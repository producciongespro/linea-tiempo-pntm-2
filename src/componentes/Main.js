import React from 'react';
import Hito from './Hito';
import dataset from '../data.json';
console.log("data",dataset);


function Main () {

    const obtenerData =()=> {
        fetch("../data.json")
            .then(resp=> {
                let json= resp.json();
                console.log("adsdsa", json);
                return json;
            } )
            .then(json=>{
                console.log("json", json);
            })        
    }

    //obtenerData();

    return (
        <React.Fragment>
            <div className="jumbotron">
            <h1>Línea de tiempo PNTM</h1>
        </div>
        <div className="container">
            PRUEBA DE VISTAS
             <hr/>
            {
                dataset.map((item, i)=>(
                    <Hito key={i} item={item} />
                ))  
            }

             
        </div>
        </React.Fragment>
    )
        
    
}

export default Main;