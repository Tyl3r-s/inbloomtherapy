import React from 'react';
import Home from './pages/home';
import Partners from './pages/partners';
import About from './pages/about';
import './App.css';
import './pages/styles/banner.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
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
    <div className="banner">
      <Link to='/'> Home </Link>
      <Link to='/partners'> Partners </Link>
      <Link to='/about'> About </Link>
    </div>

    <div>
      <Outlet />
    </div>
  </>
  )
}