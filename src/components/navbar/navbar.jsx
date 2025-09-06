import react from 'react'
import "./navbar.css"
import logo from "../../assets/text.svg"
import React, { useState } from 'react'
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"
import { useRef } from 'react'


const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const menuRef = useRef();
    const openMenu = () => {
        menuRef.current.style.right="0";
    }
    const closeMenu = () => {
        menuRef.current.style.right="-350px";
    }
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
                <li><AnchorLink className='anchor-link' ><p onClick={()=>setMenu("home")}>home</p></AnchorLink>{menu === "home" ?<img src={underline} /> : <></>} </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>aboutme</p></AnchorLink>{menu === "about" ? <img src={underline} /> : <></>} </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>services</p></AnchorLink>{menu === "services" ? <img src={underline} /> : <></>} </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>protfolio</p></AnchorLink>{menu === "work" ? <img src={underline} /> : <></> } </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>contact</p></AnchorLink>{menu === "contact" ? <img src={underline} /> : <></>} </li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink></div>
        </div>
    )
}
export default Navbar    