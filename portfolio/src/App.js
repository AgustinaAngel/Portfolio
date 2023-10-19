import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Sreens/Home';
import Personal from './Sreens/Personal';
import MisCreaciones from './Sreens/MisCreaciones';
import Favoritos from './Sreens/Favoritos';
import Layout from './Sreens/Layout';
import './App.css';
import Habilidades from './Sreens/Habilidades';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/misCreaciones" element={<MisCreaciones />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Route>
      </Routes>
  
         </BrowserRouter> 
  );
}

export default App;
