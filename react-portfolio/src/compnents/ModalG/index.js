import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap' 
import Resume from './files/Rusame1.pdf'



function  Button2(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div>
          <be></be>
          <be></be>
      <>
        <Button variant="info" onClick={handleShow}>
          My General Resume
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>General Resume</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <div class="contaner">
               <section class="myInfo">
                   <h3>Mahmoud Abdulrhman</h3>
                   Grand Terrace, CA 92313
                       <br></br>
                    Mahmoudtheeb@gmail.com 
                            (951)729-9286
                       <br></br>
                    Willing to relocate: Anywhere
               </section>
              =====================
               <br></br>
               <section class="Education">
                   <h3>Education</h3>
                   ● UC Berkeley Extension - January 2021 Full stack web developer
                       <br></br>
                   ● Al-Zaytoonah University of Jordan - June 2010 Bachelors of Arts in Graphic Design
                   
               </section>
               =====================
               <section>
                   <h3>Work Experience</h3>
                   <br></br>
                   
                   <h4>Sales Associate</h4>
                   ------------------------
                   <br></br>
                    Ermenegildo Zegna-Cabazon, CA Mar 2019 to Present
                    <br></br>
                    ● Consistently and effectively networks to attract new customers and develop a customer database
                    <br></br>
                    ● Consults with customers to discover their needs by exploring customer preferences and occasions for which the customers are shopping.
                    <br></br>
                    ● Create opportunities for customers to experience multiple Zegna brands, products and "total looks" through demonstrating relevant yet personalized mix and match options.
                    <br></br>
                    ●  Utilize company provided (iPod/iPad) technology to offer a complete and integrated luxury experience. • Collects useful and accurate customer data and information in accordance with Zegna CRM procedures and guidelines.
                    <br></br>
                    ●  Cultivates future customer connections with Zegna (e.g. CRM after-sales activities including Thank You notes and Follow-up phone calls).
                    <br></br>
                    ● Utilize CRM software as the primary tool for after-sales communication • Drive and perform onsite audits of store physical inventories.
                    <br></br>
                    ●  Actively communicate customer, product, and other store information within the store team to ensure customer and business needs are met.
                    <br></br>
                    ●  When required support the orientation of new staff through acting as a learning coach or "buddy" if assigned by the Store Manager.
                  
                   <br></br>
                   
                   <h4>Sales Associate</h4>
                   ------------------------
                   <br></br>
                   Citizen Watch Store - Cabazon, CA Aug 2018 to Present
                   <br></br>
                   ●  Help open the store and maintain organization and cleanliness • Customer service -bilingual in English and Arabic.
                   <br></br>
                   ●  Take part in store inventory to keep track of merchandise
                   
                   <br></br>
                   
                    <h4>Assistant Manager</h4>
                    ------------------------
                    <br></br>
                    Fragrance Outlet - Cabazon, CA Nov 2016 to Jan 2019
                    <br></br>
                    ●  Develop customer relationships to drive additional business and maintain customer satisfaction.
                    <br></br>
                    ●  Showcase perfumes to customers and tell them about latest promotions and discounts.
                    <br></br>
                    ●  Explain to customers about the product they are buying and the properties of the perfume.
                    <br></br>
                    ●  Gather information about customer satisfaction about product.
                    <br></br>
                    ●  Involved in product marketing to customers.
                   
                   <br></br>
               </section>
               =====================
               <section>
                  <h3>Skills</h3> 
                  <br></br>
                   <h4> ❖ Web Development : </h4>
                    <br></br>
                   <h4> - Front End </h4>
                    • React
                    • HTML 
                    • CSS 
                    • JavaScript
                    • API’s 
                    • JQuery 
                    • Bootstrap
                    • REST
                    <br></br>
                   <h4> - ​Back End </h4>
                    • Node Js 
                    • SQL
                    • NoSQ
                    • Graphql 
                    • MERN 
                    • Redux
                    ​- Web Tools 
                    • GitHub
                    • AJAX
                    • OOP
                    <br></br>
                   <h4> ❖ Other Skills : </h4>
                    • Arabic
                    • Graphic Design
               </section>
           </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button><Button variant="primary" href={Resume}>View PDF Version</Button>
            
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


export default Button2;