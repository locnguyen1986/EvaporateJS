import { createBrowserRouter, redirect } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Dashboard, Uploads, Config, Auth, Analytics, Settings } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/dashboard'),
  },
  {
    element: <Layout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'uploads', element: <Uploads /> },
      { path: 'config', element: <Config /> },
      { path: 'auth', element: <Auth /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);