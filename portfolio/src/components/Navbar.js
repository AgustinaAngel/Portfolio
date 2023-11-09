import { Link, NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { FavoritosContext } from "../context/FavoritosContext";
import StarsIcon from '@mui/icons-material/Stars';
import { useContext } from "react";

const Navbar = () => {
const { listaCreaciones } = useContext(FavoritosContext);
  return (
    
<nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
<div class="container px-5">
    <a class="navbar-brand" ><span class="fw-bolder text-primary">¡Hola! ¿Qurés conocerme?</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    
    <div className="nav_side">
        <Link to="/">Home</Link>
        <Link to="/personal">¿Quién soy?</Link>
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/misCreaciones">Mis creaciones</Link>
        <Link to="/favoritos">Favoritos</Link>
      </div>

      <NavLink to="/favoritos">
          <Badge color="secondary" badgeContent={listaCreaciones.length}>
            <StarsIcon color="action" />
          </Badge>
        </NavLink>

</div>
</nav>
  );
};

export default Navbar;
