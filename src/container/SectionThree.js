
import './mainContent.css';
import patnerList from '../container/Partnerlist.js';
//import pic from '../assets/images/'
 
export const PartnerItem=(props)=>{

    //console.log(props.name)//debug

    return(
        <div className="pat-item">
            <div className="imgDiv">
                <img className="img" src={`../assets/images/${props.purl}`}></img>
            </div>
               
        </div>
    )
}

const Partners = () =>{
    //console.log(patnerList)//debug

    const partners = patnerList.map((listitems)=>{
       return <PartnerItem
                key={listitems.id}
                    {...listitems}
        />   
     })
    return(
        <div className="main-pat container">
            <div className="partners">
                <h3 className="row">Our Partners</h3>

                <div className="partner-item">
                    {partners}
                </div>

            </div>
        </div>

    );
}


export default Partners;


// <figcaption className="img-caption">{props.name}</figcaption>