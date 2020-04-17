import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
} from 'reactstrap';
import axios from 'axios';

class ActualizarInventario extends Component {
  state = { 
    nombre: '',
    cantidad: 0,
  }

  cambiarInput = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case 'nombre':
        this.setState({ nombre: e.target.value })
        break;

      case 'cantidad':
        this.setState({ cantidad: e.target.value })
        break;

      default:
        break;
    }
  }

  manejarSubmit = () => {
    const jsonSend = this.state;
    const URL = 'https://mysterious-mesa-38127.herokuapp.com/api/v1/articulos/:${id}';
    axios.patch(URL, jsonSend)
      .then(res => alert('¡Artículo actualizado!'))
      .catch(err => alert('Error al actualizar artículo'))
  };

  render() { 
    return ( 
      <React.Fragment>
        <h3>Actualizar cantidades</h3>

        <Form>
          <FormGroup>
            <Label>Nombre</Label>
            <Input
              value={this.state.nombre}
              onChange={this.cambiarInput}
              type="text" 
              name="nombre"/>
          </FormGroup>
          <FormGroup>
            <Label>Cantidad</Label>
            <Input 
              value={this.state.cantidad}
              onChange={this.cambiarInput}
              type="number"
              name="cantidad"/>
          </FormGroup>
          <FormGroup tag="fieldset">
        <legend>Seleccione la accion</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Ingreso
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Salida
          </Label>
        </FormGroup>
        </FormGroup>
          <Button onClick={this.manejarSubmit}>Actualizar</Button>
        </Form>
  
      </React.Fragment>
    );
  }
}
 
export default ActualizarInventario;