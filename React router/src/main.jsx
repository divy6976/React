// index.js
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";


import { BrowserRouter, createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom";
import App from "./Layout.jsx";
import Home from "./components/Home.jsx";


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
<Route path="" element={<Home/>} />
<Route path="abotu" />

    </Route>
  )
)








ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
);
