import React, { useContext, useEffect, useState } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { FavoritosContext } from '../context/FavoritosContext';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function DetalleCreacion() {
 const urlArchivoJSON = "/datos.json";
 const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [creacion, setCreacion] = useState(null);
  const { agregarCreacion, eliminarCreacion, listaCreaciones } = useContext(FavoritosContext);

  useEffect(() => {
    console.log(id);
    if (id) {
      
      axios.get(urlArchivoJSON)
        .then((creaciones) => {

          let filtro = creaciones.data.filter(item=>item.id==id);

          if(filtro.length>0){
            setCreacion(filtro[0]);
            setLoading(false);
          }
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
        <h2 className='textoDetalleTitulo'>{creacion.titulo} <h5>{creacion.fecha}</h5></h2>
      <img className='imagenCentrada ' src={creacion.imagenes[0]} alt={creacion.titulo} />
      <p className='textoDetalleDescripcion'>{creacion.descripcion}</p>
    </div> 
    
    
    {listaCreaciones.some((c) => c.id === creacion.id) ? (
          <button type="button" className="boton-quitar" onClick={() => eliminarCreacion(creacion.id)}>
            <StarIcon class="iconosFav biFavQ" color="action" />
          </button>
        ) : (
          <button type="button" className="boton-agregar" onClick={() => agregarCreacion(creacion)}>
            <StarBorderIcon class="iconosFav biFavA" color="action" />
          </button>
        )}
    </div> </div>
  );
}

export default DetalleCreacion;