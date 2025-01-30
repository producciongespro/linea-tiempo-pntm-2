import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import config from '../config.json';
const icoUrl = config.icoUrl;

export default function HitoEsc(props) {

    const [show, setShow] = useState(false);
    const [infoModal, setInfoModal] = useState(null);
    const [infoLink, setInfoLink] = useState(null);
    const [infoAnno, setInfoAnno] = useState(null);
    //Estados para controlar los hitos del carrusel
    const [index, setIndex] = useState(0);

    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        let target=e.target;
        setInfoLink(target.dataset.link);
        setInfoModal(target.dataset.modal);
        setInfoAnno(target.id.slice(0, 4) );
        setShow(true);
    };

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

      //arreglo con los años de todos los hitos
      var annos=[];

    useEffect(() => {
        //console.log("infoModal", infoModal);
        //console.log("infoLink", infoLink);
        //console.log("infoAnno", infoAnno);
        console.log("index", index);
    });


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 text-center">
            <Carousel 
                activeIndex={index} 
                onSelect={handleSelect}
                interval={null}
                >
                {
                    props.data.map((item) => (
                        item.hitos.map((hito, i) => (
                            <Carousel.Item key={"hito" + i} >
                                <div className="row">
                                    {
                                        //Agregas años por hitos para mostrarlos luego en la fila inferior de años
                                        annos.push(hito.id.slice(0, 4))  
                                    }
                                    {
                                       // console.log(annos)
                                    }
                                    <div className="col-6  offset-md-3 mb-4">
                                        <div className="card" >

                                            <div className="card-body">
                                                <p className="card-text">
                                                    <img className="ico-desktop" src={icoUrl + hito.ico} alt={hito.ico} />
                                                </p>
                                                <h5 className="card-title">
                                                    {hito.descripcion}
                                                </h5>
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={handleShow}
                                                    onKeyPress={handleShow}
                                                    id={hito.id}
                                                    data-modal={hito.modal}
                                                    data-link={hito.link}
                                                >
                                                    Ver detalles
                                            </button>
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
                </div>
                    </div>

            <div className="row">
                <div className="col-12 text-center visor-anno" >                    
                        {
                            annos[index]
                        }                    
                </div>
            </div>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {infoAnno}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {infoModal}
                </Modal.Body>
                <Modal.Footer>
                    <a href={infoLink} target="_blank" rel="noopener noreferrer"> Visitar link </a>
                </Modal.Footer>
            </Modal>


        </React.Fragment>
    )



}