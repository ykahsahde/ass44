
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Spot from "./views/spot/spot";
import Home from "./views/home/home";
import Aboutus from "./views/about/aboutus";
import Contactus from "./views/contactus/contactus";

console.log("Home Component:", Home);
console.log("Spot Component:", Spot);
console.log("Aboutus Component:", Aboutus);
console.log("Contactus Component:", Contactus);

// function App() {
//   const path = window.location.pathname;
  
  
//   switch(path) {    
//     case "/":
//       return <Home />;
//     case "/spot":
//       return <Spot />;
//     case "/aboutus":  
//       return <Aboutus />; 
//     case "/contactus":  
//       return <Contactus />;
//     default:
//       return <div>Not Found</div>;  
//     }
//   }
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/spot",
    element: <Spot />
  },
  {
    path: "/aboutus",
    element: <Aboutus />
  },
  {
    path: "/contactus",
    element: <Contactus />
  }
 
]
)
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={router} />);
