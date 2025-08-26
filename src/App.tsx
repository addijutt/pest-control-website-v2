import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoadingSpinner from './components/LoadingSpinner';
// import BodyClassHandler from './components/BodyClass';
import ScrollToTop from './components/ScrollToTop';
import { GeotargetProvider } from './components/Location/GeotargetProvider';
import { routes } from './routes/routes';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import BodyClassHandler from './components/BodyClass';

const App = () => {
  return (
    <>
    <GeotargetProvider>
    <Router>
      <div className="min-h-screen flex flex-col">
      <BodyClassHandler />
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <main className="flex-grow">
        <Routes>
         {routes?.map(route => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.component Pagetitle={route.pageTitle ?? ''} PageImage={route.PageImage ?? ''} />}
          />
        ))}
        </Routes>
        </main>
        <Footer />
      </Suspense>
      </div>
    </Router>
    </GeotargetProvider>

    </>
  );
}

export default App;