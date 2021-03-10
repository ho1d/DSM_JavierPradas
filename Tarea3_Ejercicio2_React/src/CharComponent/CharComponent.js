import React from 'react';

class CharComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="Recuadro" onClick={this.props.click}>
                <p style={this.props.estilo}>{this.props.letra}</p>
            </div >
        )
    }
};

export default CharComponent;