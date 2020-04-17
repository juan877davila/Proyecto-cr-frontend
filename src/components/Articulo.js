import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';

class Articulo extends Component {
  state = { 
    nombre: this.props.nombre,
    cantidad: this.props.cantidad,
    talla: this.props.talla,
    color: this.props.color,
  }

  render() { 
    return ( 
      <Card className="mt-3" style={{ backgroundColor: '#1933e2' }}>
        <CardBody>
          <CardTitle style={{ color: 'white' }}>{ this.state.nombre }</CardTitle>
          <CardText style={{ color: 'white' }}>
            {`Cantidades: ${this.state.cantidad} - talla: ${this.state.talla} -color: ${this.state.color}`}
          </CardText>
        </CardBody>
      </Card>
     );
  }
}
 
export default Articulo;