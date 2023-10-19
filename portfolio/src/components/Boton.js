import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Boton({ info1, link}) {
  return (
   <>
  
    <Link to={link}>
            <button className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">{ info1}</button>
    </Link>
   </>
  );
}

export default Boton;