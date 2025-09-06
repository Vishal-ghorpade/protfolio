import react from 'react';
import "./hero.css"
import profile_img from "../../assets/pr1.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resumeFile from '../../assets/vishal.pdf'

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profile_img} alt="" />
            <h1><span>Hi i am Vishal</span> web developer based in india</h1>
            <p>“Coding 0s & 1s into websites that hit different — Code. Create. Conquer.”</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me </AnchorLink></div>
                <div className="hero-resume"><a href={resumeFile} target="_blank" rel="noopener noreferrer">
                    <button className="resume-btn">My Resume</button>
                </a>

                </div>
            </div>
        </div>
    )
}
export default Hero;