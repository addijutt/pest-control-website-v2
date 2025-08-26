// utils/pageUtils.ts
export const getPageName = (pathname: string): string => {
  const pageMap: Record<string, string> = {
    '/': 'Home',
    '/pest-control': 'Pest Controlrrrrrrrrrr',
    '/termite-control': 'Termite Control',
    '/bed-bug-control': 'Bed Bug Control',
    '/about': 'About Us',
    '/contact': 'Contact',
    // Add all your routes here
  };
  
  return pageMap[pathname] || 'Pest Control Services';
};