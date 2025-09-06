import react from 'react';
import "./about.css"
import profile_imagae from "../../assets/pr1.png" 
import theme_pattern from "../../assets/theme_pattern.svg"

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>about me </h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_imagae} alt="" />

                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            hi i am a web developer and designer.
                            i have worked on many projects and have a good knowledge of web development and design.
                             am passionate about my work and always strive to deliver the best results .</p>
                           <p> i am a quick learner and always eager to learn new technologies and skills.
                            i am a team player and always ready to help my team members.
                            i am also a good communicator and always keep my clients updated about the progress of their projects.
                        </p>

                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>html & css</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>react js </p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>javascript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>next js</p><hr style={{ width: "50%" }} /></div>

                    </div>


                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achivement">
                    <h1>10+</h1>
                    <p>years of experience </p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>90+</h1>
                    <p>projects completed</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>15+</h1>
                    <p>happy clients  </p>
                </div>
            </div>

        </div>
    )
}

export default About;