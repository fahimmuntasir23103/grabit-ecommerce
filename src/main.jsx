import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/shop",
        Component: Shop
      },
      {
        path: "/shop/:id",
        Component: ProductDetails
      },
      {
        path: "/categories",
        Component: CategoriesPage
      },
      {
        path: "/blogs",
        Component: Blogs
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/contact",
        Component: Contact
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
