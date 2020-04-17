import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
} from 'reactstrap';
import axios from 'axios';
import Articulo from './Articulo';

class ActualizarInventario extends Component {
  state = { 
    articulos: [],
  };

  // El componente se montó
  componentDidMount() {
    const URL = 'https://mysterious-mesa-38127.herokuapp.com/api/v1/articulos/';
    axios.get(URL)
      .then(response => {
        console.log('🥎' , response.data);
        const articulos = response.data;
        this.setState({ articulos });
      })
      .catch(err => console.log(err));
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

  rellenarSelect = () => {
    const { articulos } = this.state;
    return (
      <React.Fragment>
        { articulos.map(articulo => {
          return (
            <options><Articulo nombre={articulo.nombre}/></options>
          )
        })}
      </React.Fragment>
    )
  }
  

  
  manejarSubmit = () => {
    const jsonSend = this.state;
    const {_id} = this.state;
    const URL = `https://mysterious-mesa-38127.herokuapp.com/api/v1/articulos/${_id}`;
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
            <Label for="exampleSelect">Seleccione el articulo</Label>
            <Input type="select" name="articulo" id="exampleSelect">
              <option>Articulo 1</option>
              <option>Articulo 2</option>
              <option>Articulo 3</option>
              <option>Articulo 4</option>
              <option>Articulo 5</option>
            </Input>
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