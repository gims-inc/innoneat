import './mainContent.css';
import { Link } from 'react-router-dom';

import logo from '../assets/images/LOGO3.png';
//import logo2 from './assets/images/logo2.png';



const Mission = () =>{
    return(
        <div className="about">

                        

                    <Video />

                    <br />
                    <br /> 
                    <hr />
                    
                    <h4>Areas of Expertise and Inovation </h4>
                    <br />
                   
                    <What_We_Do />
                   

                    <br />
                    <br /> 

                    <More_Info />

     </div>

    );
}


export const Video =()=>{
return (
    <div className="mission">
         <div className="container">
                    
                    <div className="col">

                    <div className="about-one row">
                        
                       


                        <p>  <h3 style={{color:'steelblue'}}>INNO-NEAT</h3>Is a Solar-tech company that analyses, recycles and repurposes used lithium ion battery cells into Solar Ready battery packs for use in solar applications targeting low income communities

                        <br /><br />To provide Affordable, Reliable and Efficient Solar ready repurposed Lithium Ion Battery Solutions for low income communities Solar and E-mobility applications.
                       
                        <br /><br />This is a revolutionary technology that marks a milestone in Solar battery technology? You can feel free to <Link  to="/TalkTous">talk to us</Link> if you have anything.</p>
                       
                        
                   
                    </div>

                    <br /><br />

                    <div className="container-fluid">

                        <div className="video-container">
                           <iframe  src="https://www.youtube-nocookie.com/embed/YSsgj4OaUV0?start=5" title="YouTube INNO-NEAT" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                    </div>

                     </div>

                </div>

    </div>

);

}

export const What_We_Do =()=>{
    return(
        <div className="what-we-do">

                <div className="container">   

                <div className="row">
                    <div className="col-md-3">
                        <div className="service-item">
                            <img src="assets/images/service-item-01.png" alt=""></img>
                            <p>Recycling </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-item">
                            <img src="assets/images/cell.png" alt=""></img>
                            <p>Cell Testing</p>
                        </div>
                        
                    </div>
                    <div className="col-md-3">
                        <div className="service-item">
                            <img src="assets/images/refurb.png" alt=""></img>
                            <p>Refurbishing</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-item">
                            <img src="assets/images/bat.png" alt=""></img>
                            <p>Battery Packs</p>
                        </div>
                    </div>
                </div>

                </div>

        </div>
    )
}

export const More_Info = ()=>{
    return (
        <div className="moreinfo">

        <div className="container p-3">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" >
                    <div className="features-item">
                        <div className="features-icon">
                            
                        </div>
                        <div className="features-content">
                            <h5>Cell collection and testing</h5>
                            <p>We collect used lithium ion cells that have been discarded. We give them a second life through subjecting them to rigorous rehabilitative tests to sort and get the best quality.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" >
                    <div className="features-item">
                        <div className="features-icon">
                            
                        </div>
                        <div className="features-content">
                            <h5>Lithium battery packs</h5>
                            <p>By using state of the art manufacturing standards we make affordable and durable long lasting repurposed lithium ion battery packs. </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" >
                    <div className="features-item">
                        <div className="features-icon">
                            
                        </div>
                        <div className="features-content">
                            <h5>Impact Oriented</h5>
                            <p>Our main goal is creating an enviromental friendly solution that will provide low cost alternatives of renewable energy to offgrid communities.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}

const About =()=>{
    return(    
    <Mission />
    
    );
}


export default About;

{/* <a href="index.html" className="logo">
<img src={logo} width="170" height="150"alt="INNO-NEAT"></img>
</a>  



                        <div className="about-logo">
                            <a href="index.html" className="logo">
                            <img src={logo} width="170" height="150"alt="INNO-NEAT"></img>
                            </a>  
                        </div>



*/}