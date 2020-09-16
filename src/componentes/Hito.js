import React from 'react';

function Hito(props) {
let item=props.item;
    return (
        <div className="row pb-2 mb-1">

            <div className="col text-right">
                <h3>
                    <span className="badge badge-info">
                        {item.anno}
                </span>
                </h3>
            </div>
            {
                item.hitos.map((hito, i)=>(
                    <div key={"hito"+i} className="col-8 alert alert-dark">
                            {hito.descripcion }
                    </div>
                ))
            }

            

        </div>
    )

}

export default Hito;