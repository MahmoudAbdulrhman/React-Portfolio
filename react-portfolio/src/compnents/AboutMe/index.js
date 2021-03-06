import React from 'react';
import './style.css';
import speedometer from "./assets/images/speedometer-48.png"
import rocket from "./assets/images/rocket-48.png"
import tablet from "./assets/images/tablet-2-48.png"
import lightbulb from "./assets/images/lightbulb-2-48.png"
import defaultPhoto from "./assets/images/defaultPhoto1.JPG";


function AboutMe (){

    return(
        
     <div>
         <h2 class="page-title red">Who am I</h2>
			<h3 class="title">Get to know me</h3>
        <div id="about-me">
            <div class="container">
                    <div class="row">
                        <div class="col-md-3 text-center">
                                <div class="hexagon fb mx-auto">
                                    <img src={speedometer} alt="speed" /> 
                                </div>
                                <h4 class="bullet-title">Fast</h4>
                                <div class="bullet-text">
                                    Fast loading times and lag free interaction.
                                </div>
                        </div>
                        <div class="col-md-3 text-center">
                            <div class="hexagon fb mx-auto">
                                <img src={rocket} alt="rocket"/>
                                </div>
                                <h4 class="bullet-title">Dynamic</h4>
                                <div class="bullet-text">
                                Websites don't have to be static. My designs bring the page to life.
                            </div>
                        </div>
                        <div class="col-md-3 text-center">
                                <div class="hexagon fb mx-auto">
                                <img src={tablet} alt="tablet"/>
                                </div>
                                <h4 class="bullet-title">Responsive</h4>
                                <div class="bullet-text">
                                Optimized designs for any screen, big or small.
                            </div>
                        </div>
                        <div class="col-md-3 text-center">
                            <div class="hexagon fb mx-auto">
                                <img src={lightbulb} alt="lightbulb"/>
                                </div>
                                <h4 class="bullet-title">Intuitive</h4>
                                <div class="bullet-text">
                                    Strong preference for easy to use, intuitive UI/UX.
                                </div>
                            </div>
                    </div>  
                    <div class="row">
                    
                        <div class="col-lg-6 text-center">
                            <div id="bio">
                               <img id="headshot" src={defaultPhoto} alt="Me"
							class="img-fluid aboutImg"/>
                            </div>
                        </div>
                        <div class="col-lg-6 text-center">
                            <div id="bio">
                                <br></br>
                            <h1>Who Am I ?!!!</h1>
                            <p>I'm Mahmoud Abdulrhman, a Full-Stack Developer based in Riverside, CA. I'm
                            passionate about creating, and driven to see ideas come to fruition.</p> 
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>      
    );
}


export default AboutMe;