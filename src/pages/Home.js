import { useContext, useEffect, useReducer, useState } from "react";
import MyComponent from "../components/MyComponent";
import { GlobalContext } from "../globalContext/GlobalContext";
import { reducer } from "../reducers/reducer";
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios";
import { useLocation } from "react-router-dom";


function Home(){
  const { register, setError, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    axios.post('https://jsonplaceholder.typicode.com/posts/1', {
        ...data
    })
  .then(function (response) {
    // handle success
    console.log(response?.data, "response");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }
  useEffect(() => {
    setError("firstName", {
      type: "required",
      message: "this field is required!",
    })
  }, [setError])

  const location = useLocation()
  console.log(location, "location")
  return (
    <>
    {/* <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", {
    required: true
  })} />
  {errors.username && <p>{errors.username.message}</p>}
      <input {...register("lastName")} />
      <input type="email" {...register("email")} />


      <input type="submit" />
    </form> */}
    Hi! {location?.state?.firstName} {location?.state?.lastName}
    </>
  )
}


export default Home;


// 1.  useState  --> currentValue, updateValue
