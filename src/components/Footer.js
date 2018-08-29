import React from 'react';
import Slide from 'react-reveal';

const Footer = () => {
    return (
        <div className="footer container-fluid mb-5">
        <Slide bottom>
	        <div className="row">
	        	<div className="col-md-6">
	        		<i className="fab fa-linkedin"></i>
	        	</div>
	        	<div className="col-md-6">
	        		<i className="fab fa-github"></i>
	        	</div>
	        </div>
	    </Slide>
        </div>
    );
};

export default Footer;
