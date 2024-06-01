import { useState } from "react";
import { createContext } from "react";


export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    const [num, setNum] = useState(0)

    const increaseNum = () => {
        setNum(num+1)
    }

    const decreaseNum = () => {
        setNum(num-1)
    }
    let value = {
        num,
        increaseNum,
        decreaseNum
    }

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

