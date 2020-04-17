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
      <CardBody>
      <Card className="mt-3" style={{ backgroundColor: '#c7f8ff' }}>
       
          <CardTitle style={{ color: 'black' }}>{ this.state.nombre }</CardTitle>
          <CardText style={{ color: 'black' }}>
            {`Cantidades: ${this.state.cantidad} - talla: ${this.state.talla} - color: ${this.state.color}`}
          </CardText>
      
      </Card>
      </CardBody>
     );
  }
}
 
export default Articulo;