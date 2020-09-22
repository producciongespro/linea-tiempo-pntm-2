import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import config from '../config.json';
const icoUrl = config.icoUrl;

export default function HitoEsc(props) {


    return (
        <Carousel>
            {
                props.data.map((item) => (
                    item.hitos.map((hito, i) => (
                        <Carousel.Item key={"hito" + i} >
                            <div className="row">
                                <div className="col-6  offset-md-3 mb-4">
                                    <div className="card" >

                                        <div className="card-body">
                                            <p className="card-text">
                                                <img className="ico-desktop" src={icoUrl + hito.ico} alt={hito.ico} />
                                            </p>
                                            <h5 className="card-title">
                                                {hito.descripcion}
                                            </h5>                                            
                                            <button className="btn btn-primary"> Ver detalles </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </Carousel.Item>
                    ))

                ))
            }
        </Carousel>
    )



}