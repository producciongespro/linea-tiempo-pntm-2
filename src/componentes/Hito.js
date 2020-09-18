import React from 'react';
import config from '../config.json';
const icoUrl=config.icoUrl;

function Hito(props) {

    //Administración de animaciones
    const handleRemoveAnimation=(e)=> {
        let target= e.target;
        //console.log("Termina");
        target.classList.remove("animate__bounceInLeft");
    }

    const handleAddAnimation=(e)=> {             
        //Método que agrega la animación y ejecuta elmýtodo de props para abrir el modal
        let cTarget= e.currentTarget;
        props.handleShow(cTarget);        
        cTarget.classList.add("animate__headShake");
        setInterval(() => {
            cTarget.classList.remove("animate__headShake");
        }, 1000);
    }


let item=props.item;
    return (
        <div className="row pb-2 mb-1">

            <div className="col-2">                
                    <span 
                        className="badge badge-dark campo-mediano  animate__animated animate__heartBeat"
                        >
                        {item.anno}
                    </span>                
            </div>

            <div className="col-2 div-division"></div>
            <div className="col-8">
            {
                item.hitos.map((hito, i)=>(
                    <div 
                        key={"hito"+i} 
                        className="alert alert-dark div-hito animate__animated animate__bounceInLeft"
                        onAnimationEnd={handleRemoveAnimation}                        
                        onClick={ handleAddAnimation}
                        onKeyPress={handleAddAnimation}                        
                        id={hito.id}
                        data-modal={hito.modal}
                        data-link={hito.link}
                        role="button"
                        >
                            <p className="font-2" >
                                {hito.descripcion }
                            </p>                            
                            <p className="text-center" >
                                <img className="img-peq" src={ icoUrl + hito.ico} alt="hito.ico" />
                            </p>
                    </div>
                ))
            }

            </div>                
        </div>
    )

}

export default Hito;