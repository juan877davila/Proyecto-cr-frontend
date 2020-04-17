import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

function Main() {
  return (
    <div>
      <Container>
      <Jumbotron>
        <h1 className="display-3">Inventory APP</h1>
        <p className="lead">La app para manejar su inventario</p>
        <hr className="my-2" />
        <p>Controle el ingreso y salida de mercancia</p>
      </Jumbotron>
      </Container>
    </div>
  );
}

export default Main;