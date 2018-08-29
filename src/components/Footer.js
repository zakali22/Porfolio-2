import React from 'react';
import Slide from 'react-reveal';

const Footer = () => {
    return (
        <div className="footer container-fluid mb-5">
        <Slide bottom>
	        <div className="row">
	        	<div className="col-md-6">
	        		<a href="https://www.linkedin.com/in/zakeria-ali-2b543a107/"><i className="fab fa-linkedin"></i></a>
	        	</div>
	        	<div className="col-md-6">
	        		<a href="https://github.com/zakali22"><i className="fab fa-github"></i></a>
	        	</div>
	        </div>
	    </Slide>
        </div>
    );
};

export default Footer;
