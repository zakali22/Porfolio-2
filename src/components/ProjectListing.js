import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import Gallery from '../images/gallery.JPG';
import Git from '../images/git.JPG';
import Naturity from '../images/naturity.JPG';
import Spacey from '../images/spacey.JPG';
import Tour from '../images/tour.JPG';
import BD from '../images/bd.jpg'

class ProjectListing extends Component {
	render(){
		if(window.innerWidth >= 991){
	    return (
	        <div className="project container-fluid">
	          <Slide bottom>
					<div className="row">
						<div className="col-lg-4 col-xs-6">
						<a href="https://stormy-anchorage-77524.herokuapp.com/">
							  <img className="card-img-top" src={BD}/>
						</a>
						</div>
						<div className="col-lg-4 col-xs-6">
						<a href="https://igallery.netlify.com/">
							  <img className="card-img-top" src={Gallery}/>
						</a>
						</div>
						<div className="col-lg-4 col-xs-6">
						<a href="http://www.naturitypure.co.uk">
							  <img className="card-img-top" src={Naturity}/>
						</a>
						</div>
						<div className="col-lg-4 col-xs-6">
						<a href="https://git-repo-battle.netlify.com/">
							  <img className="card-img-top" src={Git}/>
						</a>
						</div>
						<div className="col-lg-4 col-xs-6">
						<a href="http://thespaceytech.com/">
							  <img className="card-img-top" src={Tour}/>
						</a>
						</div>
						<div className="col-lg-4 col-xs-6">
						<a href="http://thespaceytech.com/">
							<img className="card-img-top" src={Spacey}/>
						</a>
						</div>
						
					</div>
			  </Slide>
			</div>

	    );
		} else {
			return (
	        <div className="project container-fluid">

					<div className="row">
						<div className="col-lg-4 col-xs-6">
						<a href="https://stormy-anchorage-77524.herokuapp.com/">
							  <img className="card-img-top" src={BD}/>
						</a>
						</div>
						<div className="col-lg-4 col-xs-6">
						<a href="https://igallery.netlify.com/">
							  <img className="card-img-top" src={Gallery}/>
						</a>
						</div>
						<div className="col-lg-4 col-xs-6">
						<a href="http://www.naturitypure.co.uk">
							  <img className="card-img-top" src={Naturity}/>
						</a>
						</div>
						<div className="col-lg-4 col-xs-6">
						<a href="https://git-repo-battle.netlify.com/">
							  <img className="card-img-top" src={Git}/>
						</a>
						</div>
						<div className="col-lg-4 col-xs-6">
						<a href="http://thespaceytech.com/">
							  <img className="card-img-top" src={Tour}/>
						</a>
						</div>
						<div className="col-lg-4 col-xs-6">
						<a href="http://thespaceytech.com/">
							<img className="card-img-top" src={Spacey}/>
						</a>
						</div>
						
					</div>

			</div>

	    );
		}
	}
};

export default ProjectListing;
