import React, { useState } from "react";
import { Link } from "react-scroll";
import './footer.css'

const Footer = () => {

    const [navVisible, setNavVisible] = useState(false);

    const toggleNavVisibility = () => {
        setNavVisible(!navVisible);
    }

    return (
        <footer>
            <nav className="nav_footer">
                <div className="title_nav" onClick={toggleNavVisibility}>
                    <h2>NAVEGAÇÃO RAPIDA</h2>
                </div>
                {navVisible && (
                    <ul>
                        <li>
                            <Link to="home" smooth={true} duration={500}>
                                <h3>Home</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>
                                <h3>About</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500}>
                                <h3>Skills</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500}>
                                <h3>Projects</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>
                                <h3>Contact</h3>
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
            <div className="contact_footer">
                <h2>CONTATO</h2>


            </div>
        </footer>
    );
}

export default Footer;