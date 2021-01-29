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
				</ul>
				<h5><strong>Databases</strong></h5>
				<ul>
				<li>MongoDB</li>
				<li>MySQL | MariaDB</li>
				</ul>
				<h5><strong>API</strong></h5>
				<ul>
				<li>REST</li>
				</ul>
				<h5><strong>Tools | Frameworks</strong></h5>
				<ul>
				<li>ExpressJS</li>
				<li>Webpack</li>
				</ul>
			</div>
			<div class="col-sm-4">
				<h4><i class="fa fa-code"></i> Frontend</h4>
				<h5><strong>HTML | CSS</strong></h5>
				<ul>
				<li>HTML5 (+Canvas)</li>
				<li>CSS3 & Responsive</li>
				<li>Stylus</li>
				</ul>
				<h5><strong>JavaScrpt</strong></h5>
				<ul>
				<li>ES5 | ES6</li>
				<li>jQuery</li>
				<li>React | React Router</li>
				</ul>
				<h5><strong>Tools | Frameworks</strong></h5>
				<ul>
				<li>Bootstrap</li>
				<li>Font Awesome | Google fonts</li>
				<li>Stylus | Less</li>
				<li>Webpack</li>
				</ul>
			</div>
			<div class="col-sm-4">
				<h4><i class="fa fa-flask"></i> Other</h4>
				<h5><strong>DevOps | AWS</strong></h5>
				<ul>
				<li>EC2 Instance Admin</li>
				<li>S3 Bucket Admin</li>
				<li>Cache Cluster Admin</li>
				<li>Virtual Cloud Admin</li>
				</ul>
				<h5><strong>Linux</strong></h5>
				<ul>
				<li>Certified RedHat Engineer</li>
				<li>Certified CompTIA Linux</li>
				</ul>
				<h5><strong>Tools | Frameworks</strong></h5>
				<ul>
				<li>Docker</li>
				<li>Bamboo CI Admin</li>
				</ul>
			</div>
			</div>
        </div>       
    )
}


export default Skills;