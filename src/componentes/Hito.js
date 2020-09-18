import React from 'react';

function Hito(props) {

    //Administración de animaciones
    const handleRemoveAnimation=(e)=> {
        let target= e.target;
        //console.log("Termina");
        target.classList.remove("animate__bounceInLeft");
    }

    const handleAddAnimation=(e)=> {             
        //Método que agrega la animación y ejecuta elmýtodo de props para abrir el modal
        let target= e.target;
        props.handleShow(target);        
        target.classList.add("animate__bounce");
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
                            {hito.descripcion }
                    </div>
                ))
            }

            </div>                
        </div>
    )

}

export default Hito;