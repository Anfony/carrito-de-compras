import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    productos: [
      { id: 0, name: 'Tomate', price: 1.5, img: '/productos/tomate.jpg'},
      { id: 1, name: 'Chicharos', price: 0.45, img: '/productos/chicharos.jpg'},
      { id: 2, name: 'Lechuga', price: 15, img: '/productos/lechuga.jpg'},
    ],
    carro: [ ],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.id === producto.id)) {
      const newCarro = carro.map(x => x.id === producto.id
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
        return this.setState({ carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }
  mostrarCarro = () => {
    if(!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render() {
    const { esCarroVisible } = this.state
    return(
      <div>
        <Navbar  
          carro= {this.state.carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro} 
        />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
          <button id='btnShowBessage'>Cerrar Evento</button>
        </Layout>
      </div>
    )
  }
}

export default App;
