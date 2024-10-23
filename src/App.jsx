import { Home } from "./pages/Home.jsx";
import { Exchange } from "./pages/Exchange.jsx";
import { Contact } from "./pages/contact.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Coins",
    element: <Home />,
  },
  {
    path: "/Exchange",
    element: <Exchange />,
  },
  {
    path: "/Contact us",
    element: <Contact />,
  },

]);


function App() {

  return (
    
     <>

  <RouterProvider router={router} />
    
     
     </>
       
      
      
     
    
  )
}

export default App

