import React,{useState} from 'react'
import './style1.css'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap' 
import Button2 from '../ModalG/index'
import WebDevR from '../ModalG/files/MoeDev.pdf';
import WebDev from '../ModalG/index2'
import LIN from '../../compnents/AboutMe/assets/images/linkedin.png'
import GitHub from '../../compnents/AboutMe/assets/images/GitHub-Mark-64px.png'


function  Resume(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div class = "continer">  
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
            <Modal.Title>WebDev</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <WebDev />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" href={WebDevR}>View PDF Version</Button>
          </Modal.Footer>
        </Modal>
      </>
      <div>
      <a href="https://www.linkedin.com/in/mahmoud-abdulrhman-93964328/">
						<img src={LIN}  alt="linkedIn Icon"/>
					</a>
					<a href="https://github.com/MahmoudAbdulrhman"  >
						<img src={GitHub} alt="GItHub Icon"/ >
					</a>
      </div>
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