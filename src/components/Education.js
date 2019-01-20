import React from 'react';

class Education extends React.Component {
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading"><h3>Education</h3></div>
				<div className="panel-body">
					<div className="row">
						<div className="col-md-6">
							<ul>
								<li><b>College of Information and Computer Sciences</b></li>
								<li><b>University of Massachusetts, Amherst</b></li>
								<li>Amherst, Massachusetts</li>
								<li>B.S. in Computer Science</li>
								<li>September 2016 - May 2018</li>
								<li>GPA: 3.06</li>
							</ul>
						</div>
						<div className="col-md-6">
							<ul>
								<li><b>Coursework:</b></li>
								<ul>
									<li>Artificail Intelligence</li>
									<li>Machine Learning</li>
									<li>Affective Computing</li>
									<li>Web Programming</li>
									<li>Computer Vision</li>
									<li>Computer Networking</li>
								</ul>
							</ul>
						</div>
					</div>
					<br/> 
					<div className="row">
						<div className="col-md-6">
							<ul>
								<li><b>College of Engineering</b></li>
								<li><b>University of Massachusetts, Dartmouth</b></li>
								<li>Dartmouth, Massachusetts</li>
								<li>Major: Computer Science</li>
								<li>September 2015 - May 2016</li>
								<li>(Transferred after May 2016)</li>
								<li>GPA: 3.39</li>
							</ul>
						</div>
						<div className="col-md-6">
							<ul>
								<li><b>Coursework:</b></li>
								<ul>
									<li>Models of Computation</li>
									<li>Empirical Methods in CS</li>
								</ul>
							</ul>
						</div>
					</div>
					<br/> 
					<div className="row">
						<div className="col-md-6">
							<ul>
								<li><b>Bristol Community College</b></li>
								<li>Fall River, Massachusetts</li>
								<li>Major: Computer Science</li>
								<li>September 2013 - May 2015</li>
								<li>(Transferred after May 2015)</li>
								<li>GPA: 3.07</li>
							</ul>
						</div>
						<div className="col-md-6">
							<ul>
								<li><b>Coursework:</b></li>
							</ul>
							<img src="ns_logo.jpg"  alt="logo" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Education;