import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './root/Root';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import InterNational from './component/InterNational/InterNational';
import National from './component/National/National';
import Education from './component/Education/Education';
import Sports from './component/Sports/Sports';
import Tech from './component/Tech/Tech';
import Agriculture from './component/Agriculture/Agriculture';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('record.json')
      },
      {
        path: '/InterNational',
        element:<InterNational></InterNational>
      },
      {
        path:'/National',
        element: <National></National>
      },
      {
        path:'/Education',
        element:<Education></Education>
      },
      {
        path:'/Sports',
        element:<Sports></Sports>
      },
      {
        path:'/Tech',
        element:<Tech></Tech>
      },
      {
        path:'/Agriculture',
        element:<Agriculture></Agriculture>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
