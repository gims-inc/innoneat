import slideOne from '../assets/images/slide-01.jpg';
import slideTwo from '../assets/images/slide-02.jpg';
import slideThree from '../assets/images/slide-03.jpg';


//mport Header from '../Header';


import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { bottom } from '@popperjs/core';

  
export default function Home() {
  //style={{ display: 'block', width: 700, padding: 30 }}
  // <h5 style={{color: 'midnightblue'}}>Plug and Play</h5>
  //<h5 style={{color: 'white'}} > Geared towards a cleaner enviroment </h5>



  // style={{color: 'green', padding:'30%'}}
  // style={{color: 'white', padding:'30%'}}
  // style={{color: 'white', padding:'30%'}}
  
  return (
          <div  className="carousel" >
            <Carousel>
              <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                     src={slideOne}
                  alt="Image One"
                />
                <Carousel.Caption>
                  <h3 style={{color: 'green', padding:'30%'}} >Solar Ready Batteries <h5>Plug and Play</h5> </h3>
                 
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                   src={slideTwo}
                  alt="Image Two"
                />
                <Carousel.Caption>
                  <h4 style={{color: 'white', padding:'30%'}} >Circular Economy <h5> Geared towards a cleaner enviroment </h5></h4>
                  
                </Carousel.Caption>
              </Carousel.Item>

              
              <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                   src={slideThree}
                  alt="Image THree"
                />
                <Carousel.Caption>
                  <h4 style={{color: 'white', padding:'30%'}}>High Performance <h5>Robust and Durable</h5></h4>
                  
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
       </div>
  );
}




//<h5  style={{color: 'white', padding:'30%'}}>


