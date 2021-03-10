import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Introduce texto</p>
                <input type="text" onChange={this.props.cambiando} value={this.props.text}/>
                <p>La longitud del texto es: {this.props.longitud}</p>
            </div >
        )
    }
};

export default Input;