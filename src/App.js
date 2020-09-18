import React, { useState, useEffect } from 'react';
import dataset from './data.json';
import Modal from 'react-bootstrap/Modal';
import Hito from './componentes/Hito';

console.log("data", dataset);

function App() {
  const [show, setShow] = useState(false);
  const [infoModal, setInfoModal]=useState(null);
  const [infoLink, setInfoLink]=useState(null);
  const [infoAnno, setInfoAnno]=useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (target) => {

    setInfoLink(target.dataset.link);
    setInfoModal(target.dataset.modal);
    setInfoAnno(target.id.slice(0,4) );
    setShow(true);

  };

  useEffect(()=>{
    //console.log("infoModal", infoModal);
    //console.log("infoLink", infoLink);
    console.log("infoAnno", infoAnno  );
  });


  const cModal = (
    <>
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
    </>
  )

  return (
    <React.Fragment>
      <div className="jumbotron text-center sidebar">
        <h1>Línea de Tiempo</h1>
        <strong>
          <span className="font-2" >
            Línea de Tiempo de la Inclusión de las Tecnologías Digitales en la Educación Costarricense
          </span>
        </strong>
      </div>
      <div className="container">              
      {
        dataset.map((item,i)=>( 
          <Hito key={"hito"+i} item={item} handleShow={handleShow} />
        ))
      }
 

      </div>
        {cModal}
    </React.Fragment>
  );
}

export default App;
