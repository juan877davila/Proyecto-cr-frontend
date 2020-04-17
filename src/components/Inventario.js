import React, { Component } from 'react';
import axios from 'axios';
import Articulo from './Articulo';
import {
  CardDeck 
} from 'reactstrap';

class Inventario extends Component {
  state = {
    titulo: "Inventario",
    articulos: [],
  };

  // El componente se montó
  componentDidMount() {
    const URL = 'https://mysterious-mesa-38127.herokuapp.com/api/v1/articulos';
    axios.get(URL)
      .then(response => {
        console.log('🥎' , response.data);
        const articulos = response.data;
        this.setState({ articulos });
      })
      .catch(err => console.log(err));
  }

  renderizarArticulos() {
    const { articulos } = this.state;
    if (articulos.length === 0) {
      return <span>Cargando artículos...</span>
    } else if (articulos.length > 0) {
      // ¿Cómo itero y muestro cada elemento de mi arreglo de artículos?
      return (
        <React.Fragment>
          <span>Se encontraron {articulos.length} artículos</span>
          <CardDeck>
          { articulos.map(articulo => {
            return (
              <Articulo 
                talla={articulo.talla}
                cantidad={articulo.cantidad}
                nombre={articulo.nombre}
                color={articulo.color} />
            )
          })}
          </CardDeck>
        </React.Fragment>
      )
    }
  }
  
  render() { 
    return (
      <React.Fragment>
        <h3>{ this.state.titulo }</h3>
        { this.renderizarArticulos() }
      </React.Fragment>
    );
  }
}
 
export default Inventario;