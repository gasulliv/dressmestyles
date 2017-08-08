import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <nav>
   <div class = "container">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><img class = "small" [src]="fullImagePath">
      </a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html"><i class="fa fa-cloud" aria-hidden="true"></i></a></li>
        <li><a href="badges.html">Outfits</a></li>
        <li><a href="collapsible.html">Profile</a></li>
        <li><a href="mobile.html">Logout</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
   </div>
  </nav>
  <div class = "container">
   <div class="row">
      <div class="col s6 login">

		 <div class="row">
        <div class="col s12 m7">
          <div class="card small">
            <div class="card-image">
              <img src="images/sample-1.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>


      </div>
      <div class="col s6 info">

		 <div class="row">
        <div class="col s12 m7">
          <div class="card small">
            <div class="card-image">
              <img src="images/sample-1.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>

      </div>
   </div>
  <div class = "weather">
  	If the user needs to add a new weather they can do that here
  </div>
  <div class = "outfits">
  New outfits based on the chosen new weather and location will appear here!
  </div>
  </div>
  `,

  styles: [`
   nav {
	background-color:transparent;
	padding:4px;
   }
	a {
		color:  #FCFBE3;
	}

	.info {
		background-color: #FCFBE3;
	}

	.login{
		background-color: transparent;
	}

	.weather {

		width:100%;
		padding:40px;

	}

	.outfits{
		background-color: #FCFBE3;
		padding:20px;
		width:100%;
	}

    .profile {

	background-color: #FCFBE3;
	padding:20px;
	width:100%;

	}

	.brand-logo{
		margin-left:20px;
	}

	.small {
		width:4%;
		height:4%;
	}

  `]
})
export class AppComponent  {

	name = 'Angular';

	fullImagePath: string;

	constructor() {
    this.fullImagePath = '/assets/images/no-bk.png'
	 }


}