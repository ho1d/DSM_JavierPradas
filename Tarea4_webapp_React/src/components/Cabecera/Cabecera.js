import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import './Cabecera.css'

class Cabecera extends React.Component {

    logoutUser = () => {
        localStorage.removeItem('token');
        window.location.reload(false);
    }

    render() {
        return (
            <>
            <div className="TextoCabecera">
                <Row> 
                    <Col >
                        <div className="CabeceraBoton">
                            <Link to={{ pathname: '/home' }} >
                                <Button variant="warning">PÁGINA PRINCIPAL</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="CabeceraBoton">
                            <Link to={{ pathname: '/pedidos' }} >
                                <Button variant="warning">PEDIDOS</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="CabeceraBoton">
                            <Link to={{ pathname: '/login' }} >
                                <Button variant="warning">LOGIN</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="CabeceraBoton">
                            <Button onClick={() => this.logoutUser()} variant="warning">LOGOUT</Button>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className="CabeceraImagen">
                            <img src={logo} alt="Logo"></img>
                        </div>
                   
                        <div className="TextoCabecera">
                            <h1>Tu tienda online de videojuegos en formato físico</h1>
                        </div>
                    </Col>
                </Row>
                </div>
            </>
            
        )
        
    }
}

export default Cabecera;