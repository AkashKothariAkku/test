import { useCallback, useEffect, useState } from "react";
import MyComponent from "../components/MyComponent";
import { dataOne, dataVi } from "./Callback";

function About(){
  const [num, setNum] = useState(2)
  const [value, setValue] = useState(num*2)

  const sum = useCallback(() => {
    console.log(num*4)
    return value
  },[num, value])    // Memoized
  useEffect(()=>{
    setValue(num*2)
  },[num])  
  const menu = [{name: "Home", url: "/"},{name: "About", url: "/about-us"},{name: "Contact", url: "/contact"},{name: "Services", url: "/service"},{name: "Courses", url: "/courses"}]
    return (
        <>
        <MyComponent navMenu={menu}/>
          <div onClick={()=>{setNum(num*4)
           console.log(sum())
            
          }}>About</div>
          {dataVi}
          {sum()}
          {dataOne()}
        </>
    )
}

export default About;


// useMemo - variable, useCallback - function