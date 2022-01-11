import { createContext, useState } from "react";


export const IsPostCreateOpen = createContext();

const IsPostCreateOpenProvider = ({ children }) => {

    const [IsOpen, setIsOpen] = useState(false);

    return <IsPostCreateOpen.Provider value={{
        IsOpen,
        setIsOpen
    }}>{children}</IsPostCreateOpen.Provider>
}

export default IsPostCreateOpenProvider


