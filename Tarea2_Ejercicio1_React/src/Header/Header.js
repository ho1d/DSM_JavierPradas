import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div className="App">
            <h1>{this.props.titulo}</h1>
            <p>Introduzca un valor</p>
          </div>
        )
    }
}

export default Header;