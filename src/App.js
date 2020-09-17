import React, { useState, useEffect } from 'react';
import dataset from './data.json';
import Modal from 'react-bootstrap/Modal';
import Hito from './componentes/Hito';

console.log("data", dataset);

function App() {
  const [show, setShow] = useState(false);
  const [infoModal, setInfoModal]=useState(null);
  const [infoLink, setInfoLink ]=useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    setInfoLink(e.target.dataset.link);
    setInfoModal(e.target.dataset.modal);
    setShow(true);
  };

  useEffect(()=>{
    console.log("infoModal", infoModal);
    console.log("infoLink", infoLink);
  });


  const cModal = (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
      <div className="jumbotron">
        <h1>Línea de tiempo PNTM</h1>
      </div>
      <div className="container">
        PRUEBA DE VISTAS
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
