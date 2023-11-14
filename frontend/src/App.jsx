import { lazy } from 'react';
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import { useURL } from './hooks/useURL';
import { Theme } from './theme';

const DashboardLayout = lazy(() => import('./layouts/Dashboard'));

const About = lazy(() => import('./pages/About'));
const Attractions = lazy(() => import('./pages/Attractions'));
const Contact = lazy(() => import('./pages/Contact'));
const Cottages = lazy(() => import('./pages/Cottages'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Home = lazy(() => import('./pages/Home'));
const TestPage = lazy(() => import('./pages/TestPage'));

const Root = () => {
  const url = useURL();

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path={url.about.path} element={<About />} />
        <Route path={url.attractions.path} element={<Attractions />} />
        <Route path={url.contact.path} element={<Contact />} />
        <Route path={url.cottages.path} element={<Cottages />} />
        <Route path={url.gallery.path} element={<Gallery />} />
        <Route path={'test'} element={<TestPage />} />
      </Route>
    </Routes>
  );
};

const router = createBrowserRouter([{ path: '/*', Component: Root }]);

const App = () => {
  return (
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  );
};

export default App;
