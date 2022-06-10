import './otherCss/footer.css';

import { FaFacebookMessenger, FaLinkedinIn, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="foot">


        <div className="container">
            <div className="col">
                <div className="container">
                    <div className="social">
                           

                                <div className="social-item"><p>Follow Us</p></div><br />
                                <div className="social-item"><a href="https://www.facebook.com/InnoNeat/" target="_blank" rel="noopener"><FaFacebook style={{color: 'white', fontSize: '25px'}}/></a></div>
                                <div className="social-item"><FaTwitter style={{color: 'white', fontSize: '25px'}}/></div>
                                <div className="social-item"><a href="https://ke.linkedin.com/company/inno-neat-energy?trk=public_profile_topcard-current-company" target="_blank" rel="noopener"><FaLinkedinIn style={{color: 'white', fontSize: '25px'}}/></a></div>
                            
                    </div>
                </div>
            </div>
            <br />
            <div className="col">
                    <div className="copyright">
                        <h6> &copy; 2022 INNO-NEAT </h6>
                    </div>
                </div>
        </div>

        </div>
    );
}