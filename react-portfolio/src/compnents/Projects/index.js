import React from 'react';
import './style.css'
import $ from 'jquery';
import Book from './assets/image/book.png'
import {Button} from "react-bootstrap";
import shop from './assets/image/1.png'
import Budget from './assets/image/2.png'
import Study from './assets/image/3.png'
import transfer from './assets/image/5.png'
import team from './assets/image/6.png'



// function Projects(){

//     return(
//       <div>
      // <h2 class="page-title red">Projects</h2>
		  // <h3 class="title"> Some of the work that I can do</h3>
//       <div class="container">
//       <div class="row mt-5">
//         <div class="col-4">
//             <div class="card text-dark hight ">
//                 <img class="card-img-top" src={Book} alt="book web page"/>
//                 <div class="card-body text-left">
//                   <h5 class="card-title">Book Search Engine</h5>
//                   <p class="card-text text-muted">react+ MongoDB</p>
                  // <p class="card-text">This is a full MERN project consisting of a full functioning website that allows users to sign up, log in, 
                  // search/save/delete in a wide-range collection of books.
                  //  This was tested using graphQL from the server side and the front-end was 
                  //  tested by running 'npm start'.</p>
//                  <Button href="https://old-ocean.herokuapp.com/" class="btn btn-dark">Lunch the app</Button> 
//                 </div>
//               </div>
//         </div>
//         <div class="col-4">
//             <div class="card text-dark ">
//             <img class="card-img-top" src={shop} alt="ecomerce web page"/>
//                 <div class="card-body text-left">
//                   <h5 class="card-title">Shop-Shop</h5>
//                   <p class="card-text text-muted">MERN+ MongoDB</p>
                  // <p class="card-text">This is a full MERN project consisting of a full functioning website that allows users to sign up, log in, 
                  // buy/add to cart/ remove from cart in a wide-range collection of products, Also we used stripe to submit payment.</p>
//                   <Button href="https://murmuring-brook-60929.herokuapp.com/" class="btn btn-dark">Lunch the app</Button> 
//                 </div>
//               </div>
//         </div>
//         <div class="col-4">
//             <div class="card text-dark ">
//                 <img class="card-img-top" src={Budget} alt="Budget app"/>
//                 <div class="card-body text-left">
//                   <h5 class="card-title">Budget Tracker (PWA)</h5>
//                   <p class="card-text text-muted">webpack + PWA</p>
                  // <p class="card-text">Budget Tracker is a progressive web application that allows users to track their 
                  // budgets by adding expenses and deposits to their budget through the "Add/Subtract Funds" buttons. </p>
//                   <Button href="https://hidden-anchorage-26025.herokuapp.com/" class="btn btn-dark">Lunch the app</Button> 
//                 </div>
//               </div>
//         </div>
//         </div>
//         <div class="row mt-5">
//         <div class="col-4">
//             <div class="card text-dark ">
//                 <img class="card-img-top" src={Study} alt="socil media app"/>
//                 <div class="card-body text-left">
//                   <h5 class="card-title">Study Mouse</h5>
//                   <p class="card-text text-muted">Nodejs, handlebars, express, mysql</p>
                  // <p class="card-text">Study Mouse is a collaborative online resource where users can trade highly specific 
                  // information through asking questions and getting answers for them. The likes of stackoverflow and quora.</p>
//                   <Button href="https://thawing-castle-75058.herokuapp.com/" class="btn btn-dark">Lunch the app</Button> 
//                 </div>
//               </div>
//         </div>
//         <div class="col-4">
//             <div class="card text-dark ">
//             <img class="card-img-top" src={transfer} alt="tickt app"/>
//                 <div class="card-body text-left">
//                   <h5 class="card-title">transferCard</h5>
//                   <p class="card-text text-muted">MERN, graphQL, MongoDB</p>
//                   <p class="card-text">Travel with ease with our new contactless virtual train ticket, transferCard.</p>
//                   <Button href="https://transfercard.herokuapp.com/" class="btn btn-dark">Lunch the app</Button> 
//                 </div>
//               </div>
//         </div>
//         <div class="col-4">
//             <div class="card text-dark ">
//             <img class="card-img-top" src={team} alt="organizer app"/>
//                 <div class="card-body text-left">
//                   <h5 class="card-title">Team profile generator</h5>
                  // <p class="card-text text-muted">JAvaScript,ES6,node.js</p>
                  // <p class="card-text">Team Profile Generator This Team Profile Generator is a Node.js command-line application 
                  // that gathers your team member's information via questionnaire style.</p>
//                   <Button href="https://github.com/MahmoudAbdulrhman/team-profile-generator" class="btn btn-dark">Visit GitHub</Button> 
//                 </div>
//               </div>
//         </div>
//         </div>
//       </div>
//        </div>  
//        )
// }


function Projects (){
  return(
    <div>
    <h2 class="page-title red">Projects</h2>
    <h3 class="title"> Click on any project for more info</h3>
    <div class="cards">
   
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src={Book} alt="book web page" />
      </div>
      <div class="card-title">
        {/* <a href="1" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a> */}
        <h2>
        Book Search Engine
            <small>react+ MongoDB</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
        This is a full MERN project consisting of a full functioning website that allows users to sign up, log in, 
                  search/save/delete in a wide-range collection of books.
                   This was tested using graphQL from the server side and the front-end was 
                   tested by running 'npm start'.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
          <Button href= "https://old-ocean.herokuapp.com/" class="btn btn-dark">Lunch the app</Button> 
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src={shop} alt="ecomerce web page"/>
      </div>
      <div class="card-title">
        {/* <a href="3" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a> */}
        <h2>
            Shop-Shop
            <small>MERN+ MongoDB</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
        This is a full MERN project consisting of a full functioning website that allows users to sign up, log in, 
                  buy/add to cart/ remove from cart in a wide-range collection of products, Also we used stripe to submit payment.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
          <Button href="https://murmuring-brook-60929.herokuapp.com/"  class="btn btn-dark">Lunch the app</Button> 
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src={Budget} alt="Budget app"/>
      </div>
      <div class="card-title">
        {/* <a href="5" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a> */}
        <h2>
        Budget Tracker (PWA)
            <small>webpack + PWA</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
        Budget Tracker is a progressive web application that allows users to track their 
                  budgets by adding expenses and deposits to their budget through the "Add/Subtract Funds" buttons.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
          <Button href="https://hidden-anchorage-26025.herokuapp.com/" class="btn btn-dark">Lunch the app</Button> 
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src={Study} alt="socil media app"/>
      </div>
      <div class="card-title">
        {/* <a href="23" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a> */}
        <h2>
        Study Mouse
            <small>Nodejs, handlebars, express, mysql</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
        Study Mouse is a collaborative online resource where users can trade highly specific 
                  information through asking questions and getting answers for them. The likes of stackoverflow and quora.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
          <Button href="https://thawing-castle-75058.herokuapp.com/" class="btn btn-dark">Lunch the app</Button> 
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src={transfer} alt="tickt app"/>
      </div>
      <div class="card-title">
        {/* <a href="232" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a> */}
        <h2>
            transferCard
            <small>MERN, graphQL, MongoDB</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
        Travel with ease with our new contactless virtual train ticket, transferCard. Say goodbye to your paper train tickets! By using transferCard, 
        you will now be able to purchase your train tickets online and bring it along with you via mobile.
         You can scan your barcode at the station for entering and exiting.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
          <Button href="https://transfercard.herokuapp.com/" class="btn btn-dark">Lunch the app</Button> 
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src={team} alt="organizer app"/>
      </div>
      <div class="card-title">
        {/* <a href="232" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a> */}
        <h2>
        Team profile generator
            <small>JAvaScript,ES6,node.js</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
        Team Profile Generator This Team Profile Generator is a Node.js command-line application 
                  that gathers your team member's information via questionnaire style.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
          <Button href="https://github.com/MahmoudAbdulrhman/team-profile-generator" class="btn btn-dark">Visit GitHub</Button> 
          </div>
        </div>
      </div>
    </div>  
  </div>
  </div>
  
  
  
  
  )
} 

export default Projects;

/////logic

$(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(){
   

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});