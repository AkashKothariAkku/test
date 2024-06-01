//  function MyComponent(){
//     return (
//         <>
//     <p>Hi, today is wednesday</p>
//     <h1>Good Morning</h1>
//     </>
// )
// }

import { NavLink } from "react-router-dom"

// conditional rendering - true ? statement :  2nd 

const MyComponent = (props) => {
    return (
        <>
            <ul>
                {
                    props?.navMenu?.map(value => {
                        return <NavLink to={value?.url} style={{ textDecoration: "none" }}><li>{value?.name}</li></NavLink>
                    })
                }
            </ul>
            <input type="text" name="name" value={props?.field?.name} onChange={(event)=>props.fillForm("name", event.target.value)}/>
          <input type="number" name="mobileNo" value={props?.field?.mobileNo} onChange={(event)=>props.fillForm("mobileNo", event.target.value)}/>
          <input type="text" name="email" value={props?.field?.email} onChange={(event)=>props.fillForm("email", event.target.value)}/>
          {props.show && <div>{props.field.name} {props?.field?.mobileNo} {props?.field?.email}</div>}
          <button onClick={()=>{
            props.setShow(true)
            }}>Click me to show information</button>
        </>
    )
}

export default MyComponent