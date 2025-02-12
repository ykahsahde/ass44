import Home from "./views/home/home"
import ReactDOM from "react-dom/client";

// function App() {
//   const [count,setcount]=useState(0);
//   useEffect(()=>{
//     console.log("useEffect");
//   },[])
//   useEffect(()=>{
//     console.log("count",count)
//   },[count])
  
  


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home/>);  