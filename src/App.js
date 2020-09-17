import React, { useState } from 'react';
import dataset from './data.json';
import Modal from 'react-bootstrap/Modal';
import Hito from './componentes/Hito';

console.log("data", dataset);

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const cModal = (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
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
