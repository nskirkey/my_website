import React from 'react';

class Navigation extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-light bg-light">
				<div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Projects</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Education</a>
						</li>
						
					</ul>
					<a className="navbar-brand">
						<img src={ require('../graphics/ns_logo.jpg') } />
					</a>
				</div>
				<div className="mx-auto order-0">

					
				</div>
				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}	
}

export default Navigation;