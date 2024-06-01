import { useEffect, useState } from "react";
import MyComponent from "../components/MyComponent";
import axios from 'axios';

function Course(){
    const [data, setData] = useState("")
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
  .then(function (response) {
    // handle success
    console.log(response?.data, "response");
    setData(response?.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  },[])
    const menu = [{name: "Home", url: "/"},{name: "About", url: "/about-us"},{name: "Contact", url: "/contact"},{name: "Services", url: "/service"}]
   return(
    <>
    <MyComponent navMenu={menu}/>
      <div>Course</div>
      Title - <div>{data?.title}</div>
      Body - <div>{data?.body}</div>
    </>
   )
}

export default Course;