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
                    Professional Skills
                  </span>
                </h3>
              </div>
              <div className="row row-cols-1 row-cols-md-3 mb-4">
                <MiniCardHabilidades info= "SEO/SEM Marketing"/>
                <MiniCardHabilidades info= "Statistical Analysis"/>
                <div className="col">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    Web Development
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-3">
              <MiniCardHabilidades info= "Network Security"/>
              <MiniCardHabilidades info= " Adobe Software Suite"/>
                <div className="col">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    User Interface Design
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
                  <span className="text-gradient d-inline">Languages</span>
                </h3>
              </div>
              <div className="row row-cols-1 row-cols-md-3 mb-4">
              <MiniCardHabilidades info= "HTML"/>
              <MiniCardHabilidades info= "CSS"/>
        
                <div className="col">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    JavaScript
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-3">
              <MiniCardHabilidades info= "Python"/>
              <MiniCardHabilidades info= "Ruby"/>
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
