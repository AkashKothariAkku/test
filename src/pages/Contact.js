import { useState } from "react";
import MyComponent from "../components/MyComponent";
import { useFormHandeler } from "../coutomHook/useFormHandeler";
import { useNavigate } from "react-router-dom";

function Contact(){
  // const menu = [{name: "Home", url: "/"},{name: "About", url: "/about-us"},{name: "Services", url: "/service"},{name: "Courses", url: "/courses"}]
  const [show, setShow] = useState(false)
  const [field, setField] = useState({
    name: "akash",
    mobileNo: 635462784,
    email: "mail@gmail.com"
  })
  function fillForm(fields, value){
    setField((prev)=>{
      return {...prev, [fields]: value}
    })
  }
  const navigate = useNavigate()
  const firstName = useFormHandeler("")
  const lastName = useFormHandeler("")
  const hitMe = () => {
    navigate("/", {state: {firstName: firstName?.defaultValue, lastName: lastName?.defaultValue}})
  }
    return (
        <>
        <MyComponent navMenu={menu} field={field} fillForm={fillForm} show={show} setShow={setShow}/>
          <div>Contact</div>

          <input type="text" {...firstName}/>
          <input type="text" {...lastName}/>
          <button onClick={hitMe}>Click me</button>
        </>
    )
}

export default Contact;

