import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index'
import Todos from "./pages/Todos";
import axios from "axios";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {SWRConfig} from 'swr'


import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/todos",
    element: <Todos/>,
  },
]);
const fetcher = (url:string) => axios.get(url).then(res => res.data)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: fetcher
      }}
    >
      <RouterProvider router={router}/>
    </SWRConfig>
  </React.StrictMode>,
)
