import React from 'react';

export default function Splash() {
    return (

        <div className="container text-center">
            <div className="row">
                <div className="col-12 titulo-splash">
                    <h1>Línea de tiempo PNTM</h1>
                    <strong>
                        Línea de Tiempo de la Inclusión de las Tecnologías Digitales en la Educación Costarricense
                    </strong>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-12 ">
                    <span>Cargando datos. Por favor espere...</span>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-4 offset-4">
                    <img className="img-fluid" src="./assets/gif/loader.gif" alt="Animación de carga de datos" />
                </div>
            </div>
        </div>

    )
}