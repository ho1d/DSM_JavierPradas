import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Finalizar.css'

class Finalizar extends React.Component {

    render() {
        return (
            <>
                <div className='TextoFinalizar'>
                    <p>¡Gracias por confiar en Click & Play!</p>
                </div>
                <div className='BotonFinalizar'>
                    <Link to={{ pathname: '/home' }} >
                        <Button variant="warning">
                            Realizar un nuevo pedido
                      </Button>
                    </Link>
                </div>
            </>
        );
    }

}

export default Finalizar;