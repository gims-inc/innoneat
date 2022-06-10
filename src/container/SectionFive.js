import './mainContent.css';
//import './btn.css';

import { FaFacebook, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa";
//import bg from '../assets/images/banner-bg.jpg';
import React, { useState } from 'react';
//import { ReactDOM } from 'react-dom/client';




export const Form =({oncreateMail})=>{

    const [inputs,setInputs]= useState({});

    const[textarea,setTextarea]=useState("");
    
    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    
    const handleChangetxt=(e)=>{
         setTextarea(e.target.value)
    }

   

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(inputs)//debug
        // console.log(textarea)//debug
        // console.log(email)//debug

        if(!textarea){
            alert('The message part cannot be left blank!') 
             return 
          }  

        const mail=JSON.stringify([{...inputs,textarea}])
        //console.log(mail)//debug

        oncreateMail({mail})//

        setInputs('') //clear all inputs
        setTextarea('')

       
    }


    return(
            <div className="container">

                        <form id="contact" onSubmit={handleSubmit}>

                        <div className="contact-row">

                            <div className="col">
                               <div className="col-md-6">
                                    <a href=""  target="_blank"><FaPhone style={{color: 'white', fontSize: '25px'}}/>+245 790 032188</a>
                                </div>
                                <br/>
                                <div className="col-md-6">
                                    <a href="https://ke.linkedin.com/company/inno-neat-energy?trk=public_profile_topcard-current-company"  target="_blank"><FaLinkedinIn style={{color: 'white', fontSize: '25px'}}/> INNO-NEAT LTD</a>
                                </div>
                                <br />
                                <div className="col-md-6">
                                    <a href=""  target="_blank"><FaTwitter style={{color: 'white', fontSize: '25px'}}/> @inno-neat</a>
                                </div>
                                <br />
                                <div className="col-md-6">
                                    <a href="https://www.facebook.com/InnoNeat/" target="_blank"><FaFacebook style={{color: 'white', fontSize: '25px'}}/> Inno-neat LTD</a>
                                </div> 

                            </div>



                            <div className="col">

                                <div className="col-md-6">
                                <fieldset>
                                    <input className="no-outline" name="uname" value={inputs.uname}  onChange={handleChange} type="text" id="name" placeholder="Your Name *" required="" pattern="[A-Za-z]*"/>
                                </fieldset>
                                </div>
                                    <br />
                                <div className="col-md-6">
                                <fieldset>
                                    <input className="no-outline" name="phone" value={inputs.phone||""}  onChange={handleChange} type="tel" id="phone" placeholder="Your Phone" required=""  />
                                </fieldset>
                                </div>
                                <br />
                                <div className="col-md-6">
                                <fieldset>
                                    <input className="no-outline" name="email" value={inputs.email}  onChange={handleChange}  type="email" id="email" placeholder="Your Email *" required="" />
                                </fieldset>
                                </div>
                                <br />
                            </div>

                            <div className="col">
                                <div className="col-md-8">
                                <fieldset>
                                    <input className="no-outline" name="subject" value={inputs.subject||""}  onChange={handleChange} type="text" id="subject" placeholder="Subject" pattern="[A-Za-z]*" />
                                </fieldset>
                                </div>
                                <br />
                                <div className="col-md-8">
                                <fieldset>
                                    <textarea className="form-border form-control" name="message"value={textarea} onChange={handleChangetxt} rows="3" id="message" placeholder="Message*" required=""></textarea>
                                </fieldset>
                                </div>
                                <br />
                             </div>

                            <br />

                        </div>

                        <div className="">
                              
                                <button type="submit" className="btn2  btn btn-outline-info" >Send us a message</button>
                             
                         </div>

                        </form>
                        <br />
                        <br />
                    </div>
        );
    }



    const TalkTous = () =>{

        const getMaildata=(jsonObj)=>{
            console.log(jsonObj)//debug
            //send mail API
          }


        return(
            <div className="contact-us" > 
               
                 <div className="container">
                 <h4>Get in touch!</h4>
                        <br />
                        <br />
                    <Form oncreateMail={getMaildata}/>
                        
                </div>
            </div>
    
        );
    }

    export default TalkTous;