import './otherCss/header.css'


import { Link } from 'react-router-dom';
//import logo from './assets/images/LOGO3.png';
import logo2 from './assets/images/logo2.png';
//import { Link, animateScroll as scroll } from "react-scroll";
import {FaBars} from "react-icons/fa";

import React, { useState,useEffect } from 'react';
//import { Dropdown } from 'react-bootstrap';

//import  Dropdown  from '../src/container/dropdown.js';
//import hamburgerMenuPage from './container/DropTwo.js';
//import { CDropdown } from 'bootstrap';
//import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

//imort Dropdown



export const NavDiv =()=>{
    return(
        <div className="nav">
           
                                <div className="navLink"> <Link className="hl" to="/">HOME</Link></div>
                                <div className="navLink"> <Link className="hl" to="/About">ABOUT US</Link></div>
                                <div className="navLink"> <Link className="hl" to="/Partners">OUR PARTNERS</Link></div>
                                <div className="navLink"> <Link className="hl" to="/TalkTous">CONTACT US</Link></div>             

        </div>
    );
}

export const DropDiv=()=>{

    // const [menubarBtn,ShowMenu]=useState('')

    //  const menuBtn = document.getElementsByClassName("linkBars") 
 
    // menuBtn.addEventListener('click',ShowMenu)

    //  const showMenu=()=>{
    //    return(

    //     console.log("menuBarBtn")
    //     )

    
    // }

//====================================================
// const onDropDownChange =()=>{

// }

// const currentValue =()=>{
    
// }

    

//     return(
//         <div className="nav-bars-icon">
//           <Dropdown value={currentValue} onChange={onDropDownChange} >
//               <Dropdown.Item><Link className="hl" to="/">HOME</Link></Dropdown.Item>
//               <Dropdown.Item> <Link className="hl" to="/About">ABOUT US</Link></Dropdown.Item>
//               <Dropdown.Item> <Link className="hl" to="/Partners">OUR PARTNERS</Link></Dropdown.Item>
//               <Dropdown.Item> <Link className="hl" to="/TalkTous">CONTACT US</Link></Dropdown.Item>
//           </Dropdown>
               
//         </div>
//     )
// }
//===================================================
return (
    <> 
   
    </>
)
}




export const DropThree=()=> {
return (
	<div style={{ display: 'block',
				width: 70,
				padding:5}}>
	
	<Dropdown>
		<Dropdown.Toggle variant="dark">
		<FaBars className="linkBars" style={{color: 'white', fontSize: '25px'}}/>
		</Dropdown.Toggle>
		<Dropdown.Menu>
		
        <Dropdown.Item><Link className="hl2" to="/">HOME</Link></Dropdown.Item>

		<Dropdown.Item> <Link className="hl2" to="/About">ABOUT US</Link></Dropdown.Item>

        <Dropdown.Item> <Link className="hl2" to="/Partners">OUR PARTNERS</Link></Dropdown.Item>

        <Dropdown.Item> <Link className="hl2" to="/TalkTous">CONTACT US</Link></Dropdown.Item>
		
		</Dropdown.Menu>
	</Dropdown>
	</div>
);
}


export default function Header(){

        // const navLinks=['Home','About','Subscribe','Patners','Contacts']

        // const links = navLinks.map((link) => {
        //    return `<div className="navlink">${link}</div`
        // });


const [windoWidth,SetWindowwidth]=useState(window.innerWidth)

const handleResize =()=>{
   SetWindowwidth(window.innerWidth)
}
       
console.log(`widowwidth-: ${windoWidth}`)

     useEffect(()=>{
         window.addEventListener('resize',handleResize)
     })  
     
    
    return(
            <div className="head">
                <nav className="navbar">
                        <div className="container">
                            
                        <Link className="logo" to="/"> <img src={logo2} width="70" height="50"alt="INNO-NEAT"></img></Link>
                            
                          {(windoWidth >= 810)? <NavDiv/> : <DropThree/>}
                            
                        </div>
                </nav>
            </div>     
    );
}

//_rafce  
{/*  
                                <div className="navlink"><a className="nav-link" href="#about">About</a></div>
                                <div className="navlink"><a className="nav-link" href="#subscribe">Subscribe</a></div>
                                <div className="navlink"><a className="nav-link" href="#inno">Partners</a></div>
                                <div className="navlink"><a className="nav-link" href="#contact-us">Contact Us</a></div>

*/}

{/* <a href="index.html" className="logo">
<img src={logo2} width="70" height="50"alt="INNO-NEAT"></img>
</a> */}