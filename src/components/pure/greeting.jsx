import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 21
        }
    }
    render() {
        return (
            <div>
                <h1>
                    HOLA SOY {this.props.name} DESDE UN COMPONENTE CLASE!
                </h1>
                <h2>
                    Y TENGO {this.state.age} AÑOS
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Sumar Experiencia
                    </button>
                </div>
            </div>
        );
    }
    birthday = () => {
        this.setState((prevState) => (
            {
                age:prevState.age +1 
        }
        ))
    }
}
Greeting.propTypes = {
    name: PropTypes.string,
};
export default Greeting;
