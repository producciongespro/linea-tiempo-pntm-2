import React from 'react';
import HitoEsc from './HitoEsc';



export default function Escritorio(props) {

    return (
        <React.Fragment>
            <div className="jumbotron">
                <h1>Línea de tiempo PNTM</h1>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 text-center">
                    <HitoEsc data={props.data} />
                </div>
            </div>

        </React.Fragment>
    )

}