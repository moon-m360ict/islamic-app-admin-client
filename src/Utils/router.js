import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>This is home</h1>,
  },
  {
    path: '/login',
    element: <h1>Login page</h1>,
  },
]);

export default router;
