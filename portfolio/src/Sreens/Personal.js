import React from "react";

const Personal = () => {
  return (
    <>
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">Sobre mi</span>
                </h2>
                <p className="lead fw-light mb-4">
                  Soy estudiante de 5to año en la escuela ORT en la
                  especialidad informática.
                </p>
                <p className="text-muted pb-1">
                  Soy una persona muy organizada, siempre me propongo cumplir
                  con mis responsabilidades de manera eficiente. Disfruto de
                  trabajar en equipo para poder compartir ideas y llegar a
                  conclusiones con sus soluciones. 
                </p>
                <p className="text-muted  pb-1">
                  Tengo despierto el interes de
                  continuar en desafios relacionados con el mundo informático,
                  principalmente en UX y programación frontend. 
                </p>
                <p className="text-muted">
                Estoy ansiosa por comenzar a en el ámbito laboral y seguir creciendo tanto
                  en mis habilidades profesionales como en mi desarrollo
                  personal, con el objetivo de enriquecer aún más mis
                  conocimientos e intereses tecnológicos.
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a className="text-gradient" href="#!">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a className="text-gradient" href="#!">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a className="text-gradient" href="#!">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Personal;
