import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

class SkillsSection extends Component {
	render(){

	    return (
	    	
	        <div className="skills container-fluid">
	        <Slide bottom>
	          <div className="row">
	          	<div className="col-md-12 mb-5"><h1 className="text-center">Skills & Expertise</h1></div>
	          </div>

	          <div className="row container mt-5">
	          	<Slide left>
	          	<div className="col-md-3 d-flex justify-content-center">
		          	<div className="logo">
		          		<i class="fas fa-drafting-compass text-center mb-2"></i>
		          		<h2>Design</h2>
		          	</div>
	          	</div>
	          	<div className="col-md-3 d-flex justify-content-center">
		          	<div className="logo">
		          		<i class="fas fa-tv text-center mb-2"></i>
		          		<h2>Development</h2>
		          	</div>
	          	</div>
	          	</Slide>

	          	<Slide right>
	          	<div className="col-md-3 d-flex justify-content-center ">
		          	<div className="logo">
		          		<i class="fas fa-shopping-cart text-center mb-2"></i>
		          		<h2>Ecommerce</h2>
		          	</div>
	          	</div>          	
	          	<div className="col-md-3 d-flex justify-content-center">
		          	<div className="logo">
		          		<i class="fas fa-mobile-alt text-center mb-2"></i>
		          		<h2>Responsiveness</h2>
		          	</div>
	          	</div>  
	          	</Slide>

	          </div>
	          </Slide>
			</div>
			
	    );
	}
};

export default SkillsSection;
