import React from 'react';
import Main from '../compnents/Main/index';
import Projects from '../compnents/Projects/index'

function Home(){
    return(
        <div>
  <section class="et-hero-tabs">
      <Main />
    {/* <h1>STICKY SLIDER NAV</h1>
    <h3>Sliding content with sticky tab nav</h3> */}
    <div class="et-hero-tabs-container">
      <a class="et-hero-tab" href="#tab-es6">ABout Me</a>
      <a class="et-hero-tab" href="#tab-flexbox">Tools</a>
      <a class="et-hero-tab" href="#tab-react">Projects</a>
      <a class="et-hero-tab" href="#tab-other">Rusme</a>
      <a class="et-hero-tab" href="#tab-angular">Contact Me</a>
      <span class="et-hero-tab-slider"></span>
    </div>
  </section>
  <main class="et-main">
    <section class="et-slide" id="tab-es6">
      <h1>ES6</h1>
      <h3>something about es6</h3>
    </section>
    <section class="et-slide" id="tab-flexbox">
      <h1>Flexbox</h1>
      <h3>something about flexbox</h3>
    </section>
    <section class="et-slide" id="tab-react">
        <Projects />
      {/* <h1>Projects</h1>
      <h3>something about react</h3> */}
    </section>
    <section class="et-slide" id="tab-angular">
      <h1>Angular</h1>
      <h3>something about angular</h3>
    </section>
    <section class="et-slide" id="tab-other">
      <h1>Other</h1>
      <h3>something about other</h3>
    </section>
  </main>
        </div>
    )
}

export default Home;