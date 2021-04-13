import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';

import './Pedido.css';

class Pedido extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detalles: false
        };
    }

    render() {
        let carrito = []
        for (let key in this.props.carrito) {
            carrito.push(
                <div>
                    <row>
                        <Card className="CardProductoCarrito" style={{ float: 'left', backgroundColor: '#f6c90e' }}>
                            <Card.Img src={this.props.carrito[key].imagen} />
                            <Card.Body>
                                <div className="CardFondo">
                                    <Card.Title>
                                        <div className="CardTitulo">

                                            {this.props.carrito[key].producto}
                                        </div>
                                    </Card.Title>
                                    <Card.Text >
                                        <div className="CardTexto">
                                            Cantidad: {this.props.carrito[key].cantidad}
                                        </div>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </row>
                </div>
            )
        }
        return (

            <>
                <Row className="Pedido">
                    <Col>
                        <div className="PedidoDatos">
                            <p>Referencia del pedido: {this.props.referencia}</p>
                            {carrito}

                        </div>
                        <div >
                            <Row >
                                <div className="DetallesTitulo">
                                    <p >Información del pedido</p>
                                </div>
                            </Row>
                            <Row>
                                <Col className="DetallesTexto">
                                    <p>Total: {this.props.total}€</p>
                                    <p>Nombre y apellidos: {this.props.nombre} {this.props.apellidos}</p>
                                    <p>Direccion: {this.props.direccion}</p>
                                    <p>Teléfono: {this.props.telefono}</p>
                                </Col>
                                <Col className="DetallesTexto">
                                    <p>Ciudad: {this.props.ciudad}</p>
                                    <p>Código postal: {this.props.codigopostal}</p>
                                    <p>País: {this.props.pais}</p>
                                    <div className="BotonBorrar">
                                        <Button variant="danger" onClick={this.props.confirmarBorrar} >Eliminar pedido </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </Col>
                </Row>
            </>
        );
    }
}

export default Pedido;
