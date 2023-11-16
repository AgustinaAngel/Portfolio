import React from "react";
import MiniCardHabilidades from "../components/MiniCardHabilidades";

const Habilidades = () => {
  return (
    <>
      <div className="contenedorH">
        <div className="card shadow border-0 rounded-4 mb-5">
          <div className="card-body p-5">
            <div className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                  <i className="bi-tools biH"></i>
                </div>
                <h3 className="fw-bolder mb-0">
                  <span className="text-gradient d-inline">
                   Habilidades
                  </span>
                </h3>
              </div>
              <div className="row row-cols-1 row-cols-md-3 mb-4">
                <MiniCardHabilidades info= "UX / UI"/>
                <MiniCardHabilidades info= "Analisis de datos"/>
                <div className="col">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    Diseño y desarrollo Web
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-3">
              <MiniCardHabilidades info= "SQL Server"/>
              <MiniCardHabilidades info= "Trabajo en equipo"/>
                <div className="col">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                     Diseño y desarrollo Mobile
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-0">
              <div className="d-flex align-items-center mb-4">
                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                  <i className="biH bi-code-slash"></i>
                </div>
                <h3 className="fw-bolder mb-0">
                  <span className="text-gradient d-inline">Lenguajes</span>
                </h3>
              </div>
              <div className="row row-cols-1 row-cols-md-3 mb-4">
              <MiniCardHabilidades info= "HTML"/>
              <MiniCardHabilidades info= "CSS"/>
        
                <div className="col">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    React.js / React Native
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-3">
              <MiniCardHabilidades info= "MVC"/>
              <MiniCardHabilidades info= "C#"/>
                <div className="col">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    Node.js
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Habilidades;
