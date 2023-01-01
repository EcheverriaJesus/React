import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statu: false
        }
    }
    render() {
        return (
            <div>
                <h2> NOMBRE: {this.props.names}</h2>
                <h3> APELLIDO: {this.props.lastname}</h3>
                <h4> EMAIL: {this.props.email}</h4>
                <h5> CONECTADO: {this.state.statu}</h5>
                <div>
                <button onClick={this.estado}>
                        Concetar/Desconectar
                    </button>
                </div>
            </div>
        );
    }
    estado = () => {
        this.setState((prevState) => (
            {
                statu:false
        }
        ))
    }
}


Contacto.propTypes = {
    names: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
};


export default Contacto;
