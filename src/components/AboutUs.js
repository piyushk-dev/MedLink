import "../styleElements/aboutus.css"
import img from "../utils/img/aboutus.jpg"


const AboutUs=()=>{
    return(  
    <div className="about-container">
    <div className="about-heading">
        <h1>ABOUT US</h1>
        <p>The project aims to create a user-friendly app and
            website tailored for hospital usage.
            The platform will offer a user interface where the
            general public can access real-time data regarding bed
            availability across various hospital facilities.
            In addition, the platform will display a comprehensive
            directory of attending doctors and available medical
            amenities for each hospital</p>
    </div>
    <div className="container flex">

        <div className="about-image">
            <img src={img} alt="xyz"/>
        </div>
        <div className="about-content">
            <h2>What we Provide To General Public</h2>
            <div className="about-wrapper">
                <div className="left">
                    <ul>
                        <li>Availability of Bed</li>
                        <li>Transport Facility</li>
                        <li>Online Counsellor </li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>Online Appointment Booking</li>
                        <li>Instant Medicine Delivery</li>
                        <li>Check Ups At Home</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default AboutUs;
