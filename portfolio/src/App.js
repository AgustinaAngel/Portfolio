import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Sreens/Home';
import Personal from './Sreens/Personal';
import MisCreaciones from './Sreens/MisCreaciones';
import Favoritos from './Sreens/Favoritos';
import Layout from './Sreens/Layout';
import './App.css';
import Habilidades from './Sreens/Habilidades';
import FavoritosProvider from './context/FavoritosContext';
import DetalleCreacion from './Sreens/DetalleCreacion';

function App() {
  return (
    <FavoritosProvider>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/misCreaciones" element={<MisCreaciones />} />
        
          <Route path="/creacion/:id" element={<DetalleCreacion />} />

          <Route path="/favoritos" element={<Favoritos />} />
          
        </Route>
      </Routes>
  
         </BrowserRouter> 
         </FavoritosProvider> 
  );
}

export default App;
