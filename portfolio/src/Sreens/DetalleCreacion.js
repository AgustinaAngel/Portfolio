import React, { useContext, useEffect, useState } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import axios from "axios";

function DetalleCreacion() {
 const urlArchivoJSON = "../../datos.json";
 const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [creacion, setCreacion] = useState(null);

  useEffect(() => {
    console.log(id); // Añade esta línea para verificar el valor de id
    if (id) {
      // Realiza la solicitud Axios solo si id tiene un valor válido
      axios.get(urlArchivoJSON+ "/search?q="+ id)
        .then((creacion) => {
          setCreacion(creacion);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al obtener los detalles del producto', error);
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);
  



  if (loading) {
    return <div className='container'>Cargando...</div>;
  }

  if (error) {
    return <div className='container'>Error: {error.message}</div>;
  }

  if (!creacion) {
    return <div className='tamañoTextoDetalle'>Producto no encontrado</div>;
  }

  return (
    <div className="detalle-producto">
        <div className='margen-centralizado'>
      <div className='margen-superior'>
        <h2 className='textoDetalleTitulo'>{creacion.titulo}</h2>
      <img className='imagenCentrada' src={creacion.imagenes[0]} alt={creacion.titulo} />
      <p className='textoDetalleDescripcion'>{creacion.descripcion}</p>
    </div> </div> </div>
  );
}

export default DetalleCreacion;