import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Boton from "./Boton";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function CardCreaciones({ productoCard, handleAgregar, handleQuitar, listaCreaciones }) {
  const [added, setAdded] = useState(listaCreaciones.some(c => c.id === productoCard.id));

  const clickAgregar = () => {
      handleAgregar()
      setAdded(true)
  }
  const clickQuitar = () => {
      handleQuitar()
      setAdded(false)
  }
  console.log("este es id");
  console.log(productoCard.id);
  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5"  key={productoCard.id}>
      <div className="card-body p-0">
        <div className="d-flex align-items-center">
          <div className="p-5">
            <h2 className="fw-bolder">{productoCard.titulo}</h2>
            <p className="descripcionCard">
            {productoCard.descripcion}
            </p>
          </div>
          <img
            className="img-fluid tamanioImg"
            src={productoCard.imagenes[0]} 
            alt="..."
          />
        </div>


        <div className="card-footer text-right">
          
          <Boton info1= "Ver más" link= {`/creacion/${productoCard.id}`} />

          {added
                    ? <button
                        type="button"
                        className="boton-quitar"
                        onClick={clickQuitar}

                    >
                        <StarIcon class="iconosFav biFavQ" color="action" />
                    </button>
                    : <button
                        type="button"
                        className="boton-agregar"
                        onClick={clickAgregar}
                    >
                        <StarBorderIcon class="iconosFav biFavA" color="action" />
                    </button>
                }
        </div>
      </div>
    </div>
  );
}

CardCreaciones.propTypes = {
  productoCard: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imagenes: PropTypes.arrayOf(PropTypes.string).isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardCreaciones;
