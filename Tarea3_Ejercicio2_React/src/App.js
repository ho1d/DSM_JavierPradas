import React from 'react';
import Input from './Input/Input';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
      limite_inferior: 5,
      limite_superior: 10
    }
  }

  nuevaLetra = (event) => {
    this.setState({
      texto: event.target.value
    })
  }

  eliminarLetra = (index) => {
    const letras = [...this.state.texto];
    letras.splice(index, 1);
    this.setState({
      texto: letras.join('')
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      textalign: 'center',
      margin:'16px',
      padding:'16px',
      border: '1px solid black',
      cursor: 'pointer',
      display: 'inline-block',
    };

    let aux = this.state.texto.split("");
    let bloques = null;
    bloques = (
      <div className="Contenedor">
        {aux.map((currentValue, index) => {
          return <CharComponent
            click={() => this.eliminarLetra(index)}
            letra={currentValue}
            letraIndex={index}
            estilo={style} />
        })}
      </div>
    );

    return (
      <div className="App">
        <Input
          text={this.state.texto}
          cambiando={this.nuevaLetra}
          longitud={this.state.texto.length}
        />

        <ValidationComponent
          longitud={this.state.texto.length}
          limite_inferior={this.state.limite_inferior}
          limite_superior={this.state.limite_superior}
        />

        {bloques}

      </div>
    );
  }
}

export default App;
