import React from 'react';
import Home from './pages/home';
import Partners from './pages/partners';
import About from './pages/about';
import Banner from './pages/components/banner';
import './App.css';
import './pages/styles/banner.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider
} from "react-router-dom";


export default function App(props) {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/about' element={<About />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
  <>
    <Banner />

    <div>
      <Outlet />
    </div>
  </>
  )
}