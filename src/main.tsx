import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { SWRConfig } from 'swr';
import Index from './pages/Index/index';
import Todos from './pages/Todos';
import axios from './utils/axios';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/todos',
    element: <Todos />,
  },
]);
const fetcher = (url:string) => axios.get(url).then((res) => res.data);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher,
      }}
    >
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>,
);
