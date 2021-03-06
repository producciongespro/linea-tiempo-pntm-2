import React from 'react';
import HitoEsc from './HitoEsc';



export default function Escritorio(props) {

    return (
        <React.Fragment>
    <div className="jumbotron">
        <div className="row"> 

            <div className="col-10">
                 <h1>Antecedentes TDIC</h1>
                <h2>Hacia una ciudadanía digital con equidad social</h2>
                <strong>
                    <span className="font-2" >
                    Línea de Tiempo de la Inclusión de las Tecnologías Digitales en la Educación Costarricense
                    </span>
                </strong> 
            </div> 

            <div className="col-2 acerca">
                <button>Acerca de</button>
           </div>
         </div>
    </div><hr />

            <HitoEsc data={props.data} />

           <div className="footer">
            <div className="row">
                <div className="col-12 pie">
                <p>Dirección de Recursos Tecnológicos</p>  
                </div>
           </div>
           </div>
         
        </React.Fragment>
    )

}