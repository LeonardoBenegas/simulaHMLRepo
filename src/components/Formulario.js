import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
/* import { clienteAxios } from '../config/axios' */



const Formulario = () => {

    const [formState, actualizarFormulario] = useState({
        token: '',
        sign: '',
    });

    const [error, actualizarError] = useState(false);



    const actualizaState = (e) => {
        actualizarFormulario({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const { token, sign } = formState;

    const submitFormulario = e => {
        e.preventDefault();

        // Validar
        if (token.trim() === '' || sign.trim() === '') {
            actualizarError(true);
            return;
        }
        //Elimina mensaje error
        actualizarError(false);

        //Asigna ID 
        formState.id = uuid();
        console.log(formState);
        
        //Hace POST con Axios
        /* clienteAxios.post('/concatURL', this.formState)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            }); */


    }

    return (
        <Fragment>
            <h2>Crear Sesión</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                action="http://192.168.0.9:3001/" method="post"
            >
                <label>Token</label>
                <textarea
                    name="token"
                    className="u-full-width"
                    onChange={actualizaState}
                    value={token}

                ></textarea>

                <label>Sign</label>
                <textarea
                    name="sign"
                    className="u-full-width"
                    onChange={actualizaState}
                    value={sign}

                ></textarea>

                <button type="submit" className="u-full-width button-primary">Entrar</button>
            </form>
        </Fragment>
    );
}

export default Formulario;