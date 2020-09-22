import React from 'react';
import HitoEsc from './HitoEsc';



export default function Escritorio(props) {

    return (
        <React.Fragment>
            <div className="jumbotron">
                <h1>Línea de tiempo PNTM</h1>
                <strong>
                    <span className="font-2" >
                        Línea de Tiempo de la Inclusión de las Tecnologías Digitales en la Educación Costarricense
            </span>
                </strong>
            </div>
            <hr />
            <HitoEsc data={props.data} />
        </React.Fragment>
    )

}