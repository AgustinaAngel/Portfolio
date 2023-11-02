import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CardCreaciones from "./CardCreaciones";

const LimiteCreaciones = () => {
  const urlArchivoJSON = "../../datos.json?limit=6";
  const [creaciones, setCreaciones] = useState([]);

  useEffect(() => {
    axios
      .get(urlArchivoJSON)
      .then((response) => {
        const creacionesJSON = response.data;
        setCreaciones(creacionesJSON);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <>
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Proyectos Destacados</span>
            </h1>
          </div>
          <div className="row gx-4 gx-lg-5">
            {creaciones.map((creacion) => (
              <div key={creacion.id} className="col-lg-6 mb-4">
                <CardCreaciones productoCard={creacion} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LimiteCreaciones;
