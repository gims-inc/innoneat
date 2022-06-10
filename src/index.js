import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes} from "react-router-dom";

import './index.css';
//import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//import slideOne from './assets/images/slide-01.jpg';


import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';

import Home from "./container/SectionOne";


import About from "./container/SectionTwo";
import TalkTous from "./container/SectionFive";
import Subscribe from "./container/SectionFour";
import Partners from "./container/SectionThree";

import MainContent from './container/mainContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>

 <Header />
    
    
    <Routes>
    
    <Route index element={<MainContent />}/>
    <Route path="/Home" element={ <Home/> } />
    <Route path="/Partners" element={<Partners/>}/>
    <Route path="/About" element={ <About/> } />
    <Route path="/Subscribe" element={<Subscribe/>} />
    <Route path="/TalkTous" element={ <TalkTous/> } />
    <Route />
    
</Routes>

 <Footer />
 
 </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

            //    <Route exact path="/" />
            //   <Route exact path="/container/SectionOne" component={Caraousel}/>
            //   <Route exact path="/container/SectionTwo" component={About}/>