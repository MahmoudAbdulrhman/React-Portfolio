import React,{useState} from 'react'
import './style1.css'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap' 
import Button2 from '../ModalG/index'



function  Resume(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div>
            
        <h2 class="page-title red">Resume</h2>
		  <h3 class="title"> Please select which Resume you would like to see </h3>
          <br></br>
          <br></br>
      <>
        <Button variant="info" onClick={handleShow}>
          My Web Developer Resume
        </Button>
        <br></br>
        <br></br>
         <Button2 />
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
    );
}


export default Resume;