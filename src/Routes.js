import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';
import Inventario from './components/Inventario';
import CrearArticulo from './components/CrearArticulo';
import ActualizarInventario from './components/ActualizarInventario';

export default [
  <React.Fragment key={"Routes"}>
      <Route exact path="/" component={ Main } ></Route>
      <Route exact path="/inventario" component={ Inventario } ></Route>
      <Route exact path="/crear-articulo" component={ CrearArticulo } ></Route>
      <Route exact path="/actualizar-inventario" component={ ActualizarInventario } ></Route>
  </React.Fragment>
];