import { createContext } from "react"
import useToggle from '../../hooks/useToggle'
import React from "react"


const MenuContext = React.createContext()
export { MenuContext }

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle({
      initialValue: true, onToggle: onOpen})

    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}