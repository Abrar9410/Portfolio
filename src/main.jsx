import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import CareCamp from './components/CareCamp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/projects/CareCamp",
    element: <CareCamp></CareCamp>,
  },
  {
    path: "/projects/TrendyTalks",
    element: <App></App>,
  },
  {
    path: "/projects/ChillGamer",
    element: <App></App>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
