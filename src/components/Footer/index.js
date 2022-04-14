import React from "react";

import vector from '../../asset/Vector.svg';
import vector1 from '../../asset/Vector (1).svg';
import instagram1 from '../../asset/instagram2.svg'
import footerLogo from '../../asset/logo black 1.svg';
import './styles/footer.css';


const Footer = () => {
    return (
        <footer
            className="d-flex row align-items-center justify-content-between sm-column"
        >
            <img
                src={footerLogo}
                alt=""
            />
            <div className="social__link__logoContainer">
                <ul>
                    <li><a href="#"> <img src={vector} alt="" /> </a></li>
                    <li><a href="#"> <img src={vector1} alt="" /> </a></li>
                    <li><a href="#"> <img src={instagram1} alt="" /> </a></li>

                </ul>

            </div>
        </footer>
    );
}

export default Footer;