
import TalkTous from "./SectionFive";
import Subscribe from "./SectionFour";
import Partners from "./SectionThree";
import About from "./SectionTwo";
import Home from "./SectionOne";
//import { Routes, Route, BrowserRouter } from "react-router-dom";

import './mainContent.css';


function MainContent() {

  const getEmail=(str)=>{
    console.log(str)//debug
    //write email to db via an API
  }

 

    return (
      <div className="maincontent">
       <Home/>
       <About/>
       <Partners/>
       <Subscribe onAdd={getEmail} />
       <TalkTous />
      </div>
    );
  }
  
  export default MainContent;


// export  const LinkRoutes =()=>{
//    <BrowserRouter>
   
//     </BrowserRouter>
//   }

  