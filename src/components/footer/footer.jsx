import react from 'react'
import './footer.css'
import footer_logo from "../../assets/text.svg"
import user_icon from "../../assets/user_icon.svg"
import { defaultBuildStages } from 'three/tsl'
const footer = () => {
    return (<div className="footer">
        <div className="footer-top">
            <div className="footer-top_left">
                <img src={footer_logo} alt="" />
                <p>i am front end devloper 

                </p>

            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="enter your email" />

                </div>
                <div className="footer-subscribe">subscribe</div>


            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">@ 2023 all rights reserved
                
            </div><div className="footer-bottom-right">
                    <p>term of services</p>
                    <p>privacy policy </p>
                    <p>connect with me </p>
                </div>
        </div>
    </div>
    )
    
}
export default footer