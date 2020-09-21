import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


export default function Escritorio(props) {

    return (
      <div className="row">
          <div className="col-12 text-center">
          <Carousel>            
            <Carousel.Item>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Noticias</h5>
                        <p className="card-text">Para estar incormado Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://www.nacion.com/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <Carousel.Caption>
                    <h3>TErcero a ve r que pasa</h3>
                    <a href="https://www.nacion.com/" target="_blank" rel="noopener noreferrer"> NOTICIAS  </a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>



        </Carousel>
          </div>
      </div>

        

    )

}