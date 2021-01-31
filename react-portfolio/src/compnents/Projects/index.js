import React from 'react';
import './style.css'
import $ from 'jquery';


function Projects(){

    return(
      <div>
        <h2 class="page-title red">Projects</h2>
			<h3 class="title">Some of my Fav projects that I made with different Tools</h3>
        <div class="cards">      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
          </div>
          <div class="card-title">
            <a href="m" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="m" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?mountain" alt="mountain" />
          </div>
          <div class="card-title">
            <a href="m" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="m" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?field" alt="field" />
          </div>
          <div class="card-title">
            <a href="m" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="m" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
          </div>
          <div class="card-title">
            <a href="m" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="m" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
          </div>
          <div class="card-title">
            <a href="m" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="m" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />
          </div>
          <div class="card-title">
            <a href="m" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
                Card title
                <small>Image from unsplash.com</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
              This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="m" class="btn">Read more</a>
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
    
    $("div.card").click(function(e){
      e.preventDefault();
  
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
