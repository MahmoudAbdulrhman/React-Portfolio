import React from "react"


function Contact (){
    return(
        <div class="row">
				<div class="col-md-auto mx-auto">
					<form id="contact-form" action="mailto:mahmoudtheeb@gmail.com?subject=I saw your portfolio online"
						method="post" enctype="text/plain">
						<input type="text" name="name" placeholder="Name" id="name-input" class="input"/>
						<input type="text" name="email" placeholder="Enter Email" id="email-input" class="input"/>
						<textarea placeholder="Your Message" type="text" name="message" id="message-input"
							class="input"></textarea>
						<div class="fb flex-row-reverse">
							<input type="submit" value="SUBMIT" id="submit-btn"></input>
						</div>
					</form>
				</div>
			</div>
    )
}


export default Contact;