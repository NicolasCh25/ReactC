// src/App.js
import React from 'react';
import DatosPersonales from './componentes/DatosPersonales';
import ListaEstudios from './componentes/ListaEstudios';
import ListaHerramientas from './componentes/ListaHerramientas';
import GaleriaDeportes from './componentes/GaleriaDeportes';
import './estilos/App.css';



function App() {
  return (
    <div className="App">
      <header>
        <DatosPersonales />
        <ListaEstudios />
        <ListaHerramientas />
        <GaleriaDeportes />
      </header>
    </div>
  );
}

export default App;
