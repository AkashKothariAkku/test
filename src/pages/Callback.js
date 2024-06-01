import React from 'react'
import WrapperdCom from './WrapperdCom'
import MyCom3 from './MyCom3'

function Callback(Component) {
    return (props) => {
       return <Component {...props}/>
    }
}


const data = Callback(MyCom3)
export  const dataVi = data()
export const dataOne = Callback(WrapperdCom)

