import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CardCreaciones from "../components/CardCreaciones";
import { FavoritosContext } from '../context/FavoritosContext';

const MisCreaciones = () => {

  const urlArchivoJSON = "../../datos.json";
 
  const [creaciones, setCreaciones] = useState([]);

const { agregarCreacion, eliminarCreacion, listaCreaciones } = useContext(FavoritosContext)

const handleAgregar = (compra) =>{
  agregarCreacion(compra)
}
const handleQuitar = (id) =>{
  eliminarCreacion(id)
}

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
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              <div>
                {creaciones.map((creacion) => (
                  <CardCreaciones key={creacion.id} productoCard={creacion}   handleAgregar={() => handleAgregar(creacion)}
                  handleQuitar={() => handleQuitar(creacion.id)}
                  listaCreaciones={listaCreaciones}
                    />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MisCreaciones;
