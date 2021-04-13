import React from 'react';
import PropTypes from 'prop-types';

import './Producto.css';

import { Card, Button, ButtonGroup } from 'react-bootstrap';

const producto = (props) => (
    <div className="Producto">
        <Card className="CardProducto" style={{ float: 'left', backgroundColor: '#f6c90e' }}>
            <Card.Img src={props.imagen} />
            <Card.Body>
                <div className="CardFondo">
                    <Card.Title>
                        <div className="CardTitulo">
                            {props.nombre}
                        </div>
                    </Card.Title>
                    <Card.Text >
                        <div className="CardTexto">
                            {props.precio}€
                    </div>
                    </Card.Text>
                    <Card.Text >
                        <div className="CardBoton">
                            <ButtonGroup>
                                <Button variant="dark" onClick={props.restarProducto}>-</Button>
                                <Button variant="secondary" disabled>{props.cantidad}</Button>
                                <Button variant="dark" onClick={props.sumarProducto}>+</Button>
                            </ButtonGroup>
                        </div>
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    </div>
);

producto.propTypes = {
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    precio: PropTypes.number,
    cantidad: PropTypes.number,
    sumarProducto: PropTypes.func,
    restarProducto: PropTypes.func
};

export default producto;