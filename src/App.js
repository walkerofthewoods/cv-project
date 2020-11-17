import './App.css';
import ContactMe from './components/ContactMe';
import Education from './components/Education';
import Experience from './components/Experience';
import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();

		this.state = {};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.setState({});
	}

	render() {
		return (
			<div>
				<ContactMe />
				<br />
				<Education />
				<br />
				<Experience />
			</div>
		);
	}
}

export default App;
