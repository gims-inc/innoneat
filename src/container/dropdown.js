import { FaBars } from "react-icons/fa"
import React from "react"


const Dropdown =({value,onChange,children})=>{

    return(

        <>
        <button>{value}</button>
        <ul>
            {React.Children.map(children,(child)=>{ 
                return React.cloneElement(child,{onChange:onChange})
            })}
        </ul>
        
        </>
    )
}

const DropdownItem=({children,onChange})=>{
    return <li onClick={onChange} >{children}</li>
}

const menuBars =  <FaBars className="linkBars" style={{color: 'white', fontSize: '25px'}}/>

Dropdown.displayName =  menuBars

Dropdown.Item = DropdownItem


export default Dropdown

// onClick={showMenu}style