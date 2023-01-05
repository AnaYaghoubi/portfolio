import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./Components/base/Root";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";


const App = () => {
  const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "ContactMe",
        element: <Contact/>
      },
        {
          path: "Portfolio",
          element: <Portfolio/>
       },
      {
        path: "Home",
        element: <Home/>
      },
      {
        path: "Portfolio/:id",
        element: <PortfolioDetail/>
      }
    ]
  }]);

  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
