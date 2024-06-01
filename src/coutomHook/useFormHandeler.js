import React, { useState } from 'react'

export const useFormHandeler = (value) => {
    const [data, setData] = useState("")
    function handeler (value){
      setData(value.target.value)
    }
  return (
    {defaultValue: data, onChange: handeler}
  )
}
