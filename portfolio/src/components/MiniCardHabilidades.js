import { Link, NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { FavoritosContext } from "../context/FavoritosContext";
import StarsIcon from '@mui/icons-material/Stars';
import { useContext } from "react";

function MiniCardHabilidades({ info }) {
    return (
 <>
   <div className="col mb-4 mb-md-0">
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    {info}
                  </div>
                </div>
 </>
  );
};

export default MiniCardHabilidades;
