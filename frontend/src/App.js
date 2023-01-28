import React, { Children } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { Counter } from './features/counter/Counter';
import { Cart, Home, Product, NotFound } from './pages';

const Layout = () => {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Home />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
