import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import ProjectListing from './ProjectListing';

class Headline extends Component {
	state = {
		displayStart: 0,
		displayEnd: 6
	}

	percent = () => {
		const { displayStart, displayEnd } = this.state;
		if(displayStart < displayEnd){
			this.setState({
				displayStart: displayStart + 1
			})
		}
	}

	componentDidUpdate(){
		setTimeout(() => {
			this.percent()
		}, 310);
	}

	render(){

	    return (
	    	<Slide bottom>
	        <div className="headline container-fluid">
	          <Fade onReveal={() => {this.percent()}} bottom>
					<div className="row">
						<div className="col-lg-4 col-xs-6 projectCount">
							<span><h1 className="text-warning text-center display-1">{this.state.displayStart}</h1> <p style={{"font-size": "30px"}}>completed projects </p></span>
						</div>
						<div className="col-lg-8 col-xs-6">
							<div className="container">
								<h3>I'm a freelance front-end developer with 1+ years experience. I pride myself on writing concise yet readable code, solving problems and always strive to create the highest quality user experience possible. I'm told I have a genuine eye for aesthetics and enjoy working closely with designers to help achieve their vision.</h3>
							</div>
						</div>
					</div>
			  </Fade>
			</div>
			</Slide>
	    );
	}
};

export default Headline;
