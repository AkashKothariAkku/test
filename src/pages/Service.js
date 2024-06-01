import { useContext } from "react";
import MyComponent from "../components/MyComponent";
import { GlobalContext } from "../globalContext/GlobalContext";

function Service(){
  const global = useContext(GlobalContext)
    const menu = [{name: "Home", url: "/"},{name: "About", url: "/about-us"},{name: "Contact", url: "/contact"},{name: "Courses", url: "/courses"}]
   return(
    <>
    <MyComponent navMenu={menu}/>
      <div>Service1234</div>
      <h2>{global?.num}</h2>
    </>
   )
}

export default Service;