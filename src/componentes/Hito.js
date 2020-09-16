import React from 'react';

function Hito(props) {
let item=props.item;
    return (
        <div className="row pb-2 mb-1">

            <div className="col-2">                
                    <span className="badge badge-info campo-mediano">
                        {item.anno}
                    </span>                
            </div>

            <div className="col-2 div-division"></div>
            <div className="col-8">
            {
                item.hitos.map((hito, i)=>(
                    <div key={"hito"+i} className="alert alert-dark">
                            {hito.descripcion }
                    </div>
                ))
            }

            </div>                
        </div>
    )

}

export default Hito;