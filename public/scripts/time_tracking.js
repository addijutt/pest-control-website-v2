/**
 * Time Tracking Script - time on site tracking
 * Tracks active time spent on site and sends periodic updates to API
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    PING_INTERVAL: 10000,        // 10 seconds
    INACTIVITY_TIMEOUT: 30000,   // 30 seconds of inactivity = pause
    API_ENDPOINT: 'https://api.local-pest-experts.com/time-ping',
    API_ENDPOINT_DEV: '/api/time-ping'
  };

  // State variables
  let isActive = true;
  let lastActivityTime = Date.now();
  let pingTimer = null;
  let urlParameters = '';
  let isInitialized = false;

  /**
   * Initialize time tracking
   */
  function init() {
    if (isInitialized) return;
    
    // Get URL parameters from current page (empty string if no params)
    urlParameters = window.location.search.substring(1);
    
    // console.log('time tracking initialized for:', urlParameters || '(empty params)');
    
    setupActivityListeners();
    setupVisibilityAPI();
    startPingTimer();
    
    // Send initial ping on page unload
    setupUnloadHandler();
    
    isInitialized = true;
  }

  /**
   * Setup activity detection listeners
   */
  function setupActivityListeners() {
    const activityEvents = [
      'mousedown', 'mousemove', 'keypress', 
      'scroll', 'touchstart', 'click'
    ];

    const updateActivity = () => {
      lastActivityTime = Date.now();
      if (!isActive) {
        isActive = true;
        // console.log('user became active');
        startPingTimer();
      }
    };

    // Add event listeners
    activityEvents.forEach(event => {
      document.addEventListener(event, updateActivity, { passive: true });
    });

    // Check for inactivity periodically
    setInterval(checkInactivity, 5000); // Check every 5 seconds
  }

  /**
   * Check if user has been inactive
   */
  function checkInactivity() {
    const timeSinceActivity = Date.now() - lastActivityTime;
    
    if (timeSinceActivity > CONFIG.INACTIVITY_TIMEOUT && isActive) {
      isActive = false;
      // console.log('user became inactive');
      stopPingTimer();
    }
  }

  /**
   * Setup Page Visibility API
   */
  function setupVisibilityAPI() {
    if (typeof document.hidden !== 'undefined') {
      document.addEventListener('visibilitychange', handleVisibilityChange, false);
    }
  }

  /**
   * Handle visibility change (tab switch)
   */
  function handleVisibilityChange() {
    if (document.hidden) {
      // console.log('tab hidden - pausing time tracking');
      isActive = false;
      stopPingTimer();
    } else {
      // console.log('tab visible - resuming time tracking');
      lastActivityTime = Date.now();
      isActive = true;
      startPingTimer();
    }
  }

  /**
   * Start the ping timer
   */
  function startPingTimer() {
    if (pingTimer) return; // Already running
    
    pingTimer = setInterval(() => {
      if (isActive && !document.hidden) {
        sendPing();
      }
    }, CONFIG.PING_INTERVAL);
  }

  /**
   * Stop the ping timer
   */
  function stopPingTimer() {
    if (pingTimer) {
      clearInterval(pingTimer);
      pingTimer = null;
    }
  }

  /**
   * Send ping to server
   */
  function sendPing() {
    const isDev = window.location.hostname === 'localhost' || 
                 window.location.hostname === '127.0.0.1';
    
    const endpoint = isDev ? CONFIG.API_ENDPOINT_DEV : CONFIG.API_ENDPOINT;
    // Always include url_parameters, even if empty
    const url = `${endpoint}?url_parameters=${encodeURIComponent(urlParameters)}`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        const params = urlParameters || '(empty params)';
      } else {
        // console.log('time ping warning:', data.message);
      }
    })
    .catch(error => {
      // console.log('time ping failed:', error);
    });
  }

  /**
   * Send final ping on page unload
   */
  function sendFinalPing() {
    // Use sendBeacon for reliability during page unload
    const isDev = window.location.hostname === 'localhost' || 
                 window.location.hostname === '127.0.0.1';
    
    const endpoint = isDev ? CONFIG.API_ENDPOINT_DEV : CONFIG.API_ENDPOINT;
    const url = `${endpoint}?url_parameters=${encodeURIComponent(urlParameters)}`;

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url);
      const params = urlParameters || '(empty params)';
      // console.log(`Final time ping sent via sendBeacon for: ${params}`);
    } else {
      // Fallback for older browsers
      sendPing();
    }
  }

  /**
   * Setup page unload handler
   */
  function setupUnloadHandler() {
    // Multiple events for different scenarios
    window.addEventListener('beforeunload', sendFinalPing);
    window.addEventListener('unload', sendFinalPing);
    
    // For mobile browsers
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        sendFinalPing();
      }
    });
  }

  /**
   * Public API
   */
  window.TimeTracking = {
    init: init,
    sendPing: sendPing,
    isActive: () => isActive,
    getUrlParameters: () => urlParameters
  };

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already loaded
    setTimeout(init, 100);
  }

  // console.log('time on site tracking script loaded');

})(); 