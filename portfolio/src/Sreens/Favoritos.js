import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import Boton from "../components/Boton";

const Favoritos = () => {
  const { listaCreaciones, eliminarCreacion } = useContext(FavoritosContext);

  return (
    <>

      {listaCreaciones.length > 0 ? (
        listaCreaciones.map((item) => (
          <div className="card-container margenArriba" key={item.id}>
            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
              <div className="card-body p-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                    <h2 className="fw-bolder">{item.titulo}</h2>
                    <p className="descripcionCard">{item.descripcion}</p>
                  </div>
                  <img
                    className="img-fluid tamanioImg"
                    src={item.imagenes[0]}
                    alt="..."
                  />
                </div>

                <div className="card-footer text-right">
                  <Boton info1="Ver más" link={`/creacion/${item.id}`} />
                  <button
                    type="button"
                    className="btn btn-danger tablaCamInfo"
                    onClick={() => eliminarCreacion(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-gradient d-inline mensajeNoFavs margenArriba">No tienes ningún favorito aún.</h2>
      )}
    </>
  );
};

export default Favoritos;
