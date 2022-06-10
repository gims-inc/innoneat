
import './mainContent.css';
import React, { useState } from 'react';



const Subscribe = ({onAdd}) =>{

    const [emailStr,setEmail]= useState('');
    
    

    const handleSubmit=(e)=>{
        e.preventDefault();
       // console.log(text)//debug
      if(!emailStr){
        alert('kindly enter an email before submiting!') 
         return 
      } 

      onAdd({emailStr})

      setEmail('')
    }


    return(
        <div className="subscribe">

            <div className="container">
             <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="section-heading">
                        <h6>Subscribe Newsletters</h6>
                        <h2>Don’t miss this chance!</h2>
                    </div>
                    <div className="subscribe-content">
                        <p>Be apart of this revolutionary technology that is sweeping the solar industry by a storm. Leave your email below to stay updated.</p>
                        <div className="subscribe-form">
                            <form id="subscribe-now" onSubmit={handleSubmit}>
                                <div className="row">
                                
                                    <div className="col-md-8 col-sm-12">
                                      <fieldset>
                                        <input className="form-control"  name="email" value={emailStr}  onChange={(e)=>setEmail(e.target.value)}  type="email" id="email" placeholder="Enter your email..." required="" />
                                      </fieldset>
                                    </div>
                                    
                                    <div className="col-md-4 col-sm-12">
                                      <fieldset>
                                        <button type="submit" id="form-submit" className="btn btn-outline-info">Subscribe Now</button>
                                      </fieldset>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>

    );
}

export default  Subscribe;