import React, { createContext, useReducer, useEffect } from "react";

export const FavoritosContext = createContext();

const initialState = [];

const AGREGAR_CREACION = "[FAVORITOS] Agregar Creacion";
const ELIMINAR_CREACION  = "[FAVORITOS] Eliminar Creacion";

const FavoritosProvider = (props) => {
  const almacenarStorageFavoritos =
    JSON.parse(localStorage.getItem("favoritos")) || [];

  const FavoritosReducer = (state, action) => {
    switch (action.type) {
      case AGREGAR_CREACION:
        return [...state, action.payload];
      case ELIMINAR_CREACION:
        return state.filter((item) => item.id !== action.payload);
      default:
        return state;
    }
  };

  const [listaCreaciones, dispatch] = useReducer(
    FavoritosReducer,
    almacenarStorageFavoritos
  );

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(listaCreaciones));
  }, [listaCreaciones]);

  const agregarCreacion = (creacion) => {
    creacion.cantidad = 1;
    dispatch({ type: AGREGAR_CREACION, payload: creacion });
  };


  const eliminarCreacion = (id) => {
    dispatch({ type: ELIMINAR_CREACION, payload: id });
  };

  return (
    <FavoritosContext.Provider
      value={{
        listaCreaciones,
        agregarCreacion,
        eliminarCreacion,
      }}
    >
      {props.children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;