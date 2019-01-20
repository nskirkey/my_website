import React from 'react';

class AboutMe extends React.Component {
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading"><h1>About me</h1></div>
				<div className="panel-body">
					<ul>
						<li>Name: Nicolas Skirkey</li>
						<li>Location: Amherst, MA</li>
						<li>Age: 28</li>
					</ul> 
				</div>
				<div className="panel-heading">Education</div>
				<div className="panel-body">
					<ul>
						<li>BS of computer science</li>
						<li>University of Massachusetts, Amherst</li>
					</ul> 
				</div>
			</div>
		)
	}
}

export default AboutMe;