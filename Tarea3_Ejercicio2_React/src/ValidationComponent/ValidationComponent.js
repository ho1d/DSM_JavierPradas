import React from 'react';

class ValidationComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let texto_longitud = ""
        if (this.props.longitud < this.props.limite_inferior) {
            texto_longitud = ("Texto demasiado corto")
        }
        if (this.props.longitud > this.props.limite_superior) {
            texto_longitud = ("Texto suficientemente largo")
            
        }
        return (
            <div className="Longitud">
                <p>{texto_longitud}</p>
            </div >
        )
    }
};

export default ValidationComponent;