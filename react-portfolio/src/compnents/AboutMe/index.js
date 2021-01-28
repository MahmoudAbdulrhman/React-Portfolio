import React from 'react';
import './style.css';
import speedometer from "./assets/images/speedometer-48.png"
import defaultPhoto from "./assets/images/defaultPhoto.JPG";


function AboutMe (){

    return(
        

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
                                    <img src={speedometer} alt="speed" /> 
                                </div>
                                <h4 class="bullet-title">Fast</h4>
                                <div class="bullet-text">
                                    Fast loading times and lag free interaction.
                                </div>
                        </div>
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
                                    <img src={speedometer} alt="speed" /> 
                                </div>
                                <h4 class="bullet-title">Fast</h4>
                                <div class="bullet-text">
                                    Fast loading times and lag free interaction.
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
    );
}


export default AboutMe;