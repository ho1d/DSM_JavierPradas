import React from 'react';
import './App.css';
import Header from './Header/Header';
import Resultado from './Resultado/Resultado';
import Input from './Input/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      botonPulsado: "nada",
    }
  }

  almacenarInput = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  producto37 = (event) => {
    let total = this.state.input * 37;
    this.setState({
      resultado: total,
      botonPulsado:37,
    })
  }
  producto43 = (event) => {
    let total = this.state.input * 43;
    this.setState({
      resultado: total,
      botonPulsado:43
    })
  }
  render() {
    return (
      <div className="App">
        <Header titulo="Ejercicio 1 React"></Header>
        <Input cambiando={this.almacenarInput}></Input>
        <button onClick={() => this.producto37()}>x 37</button>
        <button onClick={() => this.producto43()}>x 43</button>
        <Resultado valor={this.state.resultado} />
        <p>Se ha multiplicado por  {this.state.botonPulsado}</p>
      </div>
    )
  }

}
export default App;
