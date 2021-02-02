import React from "react";
import '../Skills/style.css'




function Skills(){
    return(
		<div id="skills" class="container text-center bg-grey page-view">
			<h2 class="page-title red">Skills</h2>
			<h3 class="title">How I do my work</h3>
			<hr/>
			<div class="row">
			<div class="col-sm-4">
				<h4><i class="fa fa-cogs"></i> Backend</h4>
				<h5><strong>Languages</strong></h5>
				<ul>
				<li>Javascript | NodeJS</li>
				<li>HTML5| CSS</li>
				</ul>
				<h5><strong>Databases</strong></h5>
				<ul>
				<li>MongoDB</li>
				<li>MySQL | MariaDB</li>
				<li>GraphQl</li>
				</ul>
				<h5><strong>API</strong></h5>
				<ul>
				<li>RESTFUl</li>
				<li>CRUD</li>
				</ul>
				<h5><strong>Tools | Frameworks</strong></h5>
				<ul>
				<li>ReactJS</li>	
				<li>ExpressJS</li>
				<li>MERN</li>
				</ul>
			</div>
			<div class="col-sm-4">
				<h4><i class="fa fa-code"></i> Frontend</h4>
				<h5><strong>HTML | CSS</strong></h5>
				<ul>
				<li>HTML5 (+Canvas)</li>
				<li>CSS3 & Responsive</li>
				<li>Stylus & Bootstrap</li>
				</ul>
				<h5><strong>JavaScrpt</strong></h5>
				<ul>
				<li>ES5 | ES6</li>
				<li>jQuery</li>
				<li>React | React Router</li>
				</ul>
			</div>
			<div class="col-sm-4">
				<h4><i class="fa fa-flask"></i> Other</h4>
				<h5><strong>npm lab</strong></h5>
				<ul>
				<li>JEST</li>
				<li>ExpressJS</li>
				<li>Stripe</li>
				<li>Apollo</li>
				<li>Redux</li>
				<li>PWA</li>
				<li>inquirer</li>
				<li>Git</li>
				<li>Heroku</li>
				<li>Atlas</li>
				</ul>
			</div>
			</div>
        </div>       
    )
}


export default Skills;