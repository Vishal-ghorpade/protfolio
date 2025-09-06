import react from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "0e3ec528-ef25-41b0-8201-dd5aace70e3e");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            
        }
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>let's talk</h1>
                    <p> i am currentely aailabel to take new projects
                        you can contact me through email and contact no </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>vishalghorpade1000@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>pune , india </p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+91 8080229273</p>
                        </div>
                    </div>
                </div>
                
                    <form onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="">your name</label>
                        <input type="text" placeholder='enter your name ' name='name' />
                        <label htmlFor="">your email </label>
                        <input type="text" placeholder='enter your email' email='email' />
                        <label htmlFor="">enter your message </label>
                        <textarea name="message" rows="8" placeholder='enter ur message '  />
                        <button type='submit' className="contact-submit">submit now</button>

                    </form>
                
            </div>
        </div>
    )
}
export default contact 