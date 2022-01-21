import { createContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState({
        countryName: "0000",
        isVisited: false
    })

    return (
    <userContext.Provider value={{
        user,
        setUser
    }}>
        {children}
    </userContext.Provider>
    )
}