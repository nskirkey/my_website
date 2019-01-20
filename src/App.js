import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import RightBar from './components/RightBar';
// import AboutMe from './components/AboutMe'; 
import Education from './components/Education';
import LeftBar from './components/LeftBar';


class App extends Component {
  render() {
    return (
      <div className="App">
	    <Navigation />
	    <div className="row"> 
	        <div className="col-md-3">
	        	<LeftBar />
	        </div>
	        <div className="col-md-6">
	        	<Education />
	        </div>
	        <div className="col-md-3">
	        	<RightBar />
	        </div>
	    </div>
      </div>
    );
  }
}

export default App;
