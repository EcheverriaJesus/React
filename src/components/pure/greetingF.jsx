import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
//Breve introduccion a useState

const [age, setage] = useState(21);

const birthdayf = () => {
//Actualizar el State
setage(age + 1);
}

    return (
        <div>
                <h1>
                    HOLA SOY { props.name } DESDE UN COMPONENTE FUNCIONAL!
                </h1>
                <h2>
                    Y TENGO {age} AÑOS
                </h2>
                <div>
                    <button onClick={birthdayf}>
                        Sumar Experiencia
                    </button>
                </div>
            </div>
    );
};


GreetingF.propTypes = {
name: PropTypes.string
};


export default GreetingF;
