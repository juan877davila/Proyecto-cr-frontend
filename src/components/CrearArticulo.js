import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
} from 'reactstrap';
import axios from 'axios';

class CrearArticulo extends Component {
  state = { 
    nombre: '',
    color: '',
    talla: '',
    cantidad: 0,
  }

  cambiarInput = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case 'nombre':
        this.setState({ nombre: e.target.value })
        break;

      case 'color':
        this.setState({ color: e.target.value })
        break;

      case 'talla':
        this.setState({ talla: e.target.value })
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
    const URL = 'https://mysterious-mesa-38127.herokuapp.com/api/v1/articulos';
    axios.post(URL, jsonSend)
      .then(res => alert('¡Artículo creado!'))
      .catch(err => alert('Error al crear artículo'))
  };

  render() { 
    return ( 
      <React.Fragment>
        <h3>Crear Artículo</h3>

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
            <Label>Color</Label>
            <Input 
              value={this.state.color}
              onChange={this.cambiarInput}
              type="text"
              name="color"/>
          </FormGroup>
          <FormGroup>
            <Label>Talla</Label>
            <Input 
              value={this.state.talla}
              onChange={this.cambiarInput}
              type="text"
              name="talla"/>
          </FormGroup>
          <FormGroup>
            <Label>Cantidad</Label>
            <Input 
              value={this.state.cantidad}
              onChange={this.cambiarInput}
              type="number"
              name="cantidad"/>
          </FormGroup>
          <Button onClick={this.manejarSubmit}>Agregar</Button>
        </Form>
  
      </React.Fragment>
    );
  }
}
 
export default CrearArticulo;