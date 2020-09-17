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

  const handleShow = (e) => {
    setInfoLink(e.target.dataset.link);
    setInfoModal(e.target.dataset.modal);
    setInfoAnno(e.target.id.slice(0,4) );
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
        <strong>Línea de Tiempo de la Inclusión de las Tecnologías Digitales en la Educación Costarricense</strong>
      </div>
      <div className="container">        
      <hr />
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
