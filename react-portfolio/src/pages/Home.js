import React from 'react';
import Main from '../compnents/Main/index';
import Projects from '../compnents/Projects/index';
// import defaultPhoto from '../assets/image/defaultPhoto1.JPG';
import AboutMe from '../compnents/AboutMe/index'
import Skills from '../compnents/Skills/index'
import Contact from '../compnents/Contact/index'
import Resume from '../compnents/Resume/index'

function Home(){
    return(
        <div style={{  
          backgroundImage: "url(../../assets/image/bg.jpg)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
  <section class="et-hero-tabs">
        <br></br>
      <Main />
    {/* <h1>STICKY SLIDER NAV</h1>
    <h3>Sliding content with sticky tab nav</h3> */}
    <div class="et-hero-tabs-container">
      <a class="et-hero-tab" href="#tab-es6">About Me</a>
      <a class="et-hero-tab " href="#tab-flexbox">Skills</a>
      <a class="et-hero-tab " href="#tab-react">Projects</a>
      <a class="et-hero-tab " href="#tab-angular">Resume</a>
      <a class="et-hero-tab " href="#tab-other">Contact Me</a>
      <span class="et-hero-tab-slider"></span>
    </div>
  </section>
  <main class="et-main">
    <section class="et-slide h-25 " id="tab-es6">
      <AboutMe />
    </section>
    <section class="et-slide h-25 m-0" id="tab-flexbox">
      <Skills />
    </section>
    <section class="et-slide h-25" id="tab-react">
        <Projects />
    </section>
    <section class="et-slide h-25" id="tab-angular">
      <Resume />
    </section>
    <section class="et-slide " id="tab-other">
      <Contact />
    </section>
  </main>
        </div>
    )
}

export default Home;