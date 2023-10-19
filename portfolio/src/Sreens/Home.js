import React from 'react';
import { FaGripVertical } from "react-icons/fa";
import Navbar from '../components/Navbar';
import InfoClave from '../components/InfoClave';
import Boton from '../components/Boton';
import Personal from './Personal';
const Home = () => {
  return (
    <div>
      <div className="container px-5 pb-5">
        <div className="row gx-5 align-items-center">
          <div className="col-xxl-5">
            <div className="text-center text-xxl-start">
<InfoClave info1= "Diseño" info2= "Programación" info3= "Proyectos" />
              
              <div className="fs-3 fw-light text-muted">//</div>
              <h1 className="display-3 fw-bolder mb-5">
                <span className="text-gradient d-inline">Agustina Angel</span>
              </h1>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                <Boton info1= "¿Quien soy?" link="/personal"/>
                <Boton info1= "Creaciones" link="/misCreaciones"/>
                
              </div>
            </div>
          </div>
          <div className="col-xxl-7">
            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
              <div className="profile bg-gradient-primary-to-secondary">
                <img className="profile-img" src="assets/profile.png" alt="..." />
                <div className="dots-1">
                  <FaGripVertical className='tamaño'/> 
                </div>
                <div className="dots-2 ">
                  <FaGripVertical className='tamaño'/>
                </div>
                <div className="dots-3">
                  <FaGripVertical className='tamaño'/> 
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Personal className='personalHome'/>
        
      </div>
    
    </div>
  
  );
};

export default Home;
