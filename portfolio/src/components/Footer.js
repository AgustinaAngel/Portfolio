import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link } from 'react-router-dom';
import Contacto from './Contacto';


function Footer() {
    return (
        <footer className="bg-white py-4 mt-auto">
             <Contacto/>
        <div className="container px-5">
       
           
            {/** */}
            
                <div className="col-auto"><div className="small m-0">Copyright &copy; Your Website 2023</div></div>
                <div className="col-auto">
                    <a className="small" href="#!">Privacy</a>
                    <span className="mx-1">&middot;</span>
                    <a className="small" href="#!">Terms</a>
                    <span className="mx-1">&middot;</span>
                    <a className="small" href="#!">Contact</a>
                </div>
            </div>



            <ul class="navOK col-md-4 justify-content-endOK list-unstyled d-flexOK">
                <li class="ms-3">
                <a  href="https://github.com/AgustinaAngel">
                    <FaGithub className=" bi iconos" />
                    </a>
                </li>
                <li class="ms-3">
                <a  href="https://www.linkedin.com/in/agustina-yael-angel/">
                    <FaLinkedin className=" bi iconos " />
                    </a>
                </li>

    
            </ul>
    
    </footer>
    );
}

export default Footer;
