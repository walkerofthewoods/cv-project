import React from 'react';

class Experience extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			employer: 'Self-Employed',
			title: 'Web Dev',
			dates: '2020-Present',
			editing: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e) {
		this.setState({
			editing: !this.state.editing
		});

		e.preventDefault();
	}

	render() {
		if (this.state.editing) {
			return (
				<form onSubmit={this.handleSubmit} onChange={this.handleChange}>
					<label>
						employer: <input type="text" name="employer" value={this.state.employer} />
					</label>
					<br />
					<label>
						title: <input type="text" name="title" value={this.state.title} />
					</label>
					<br />
					<label>
						dates: <input type="text" name="dates" value={this.state.dates} />
					</label>
					<br />
					<input type="submit" value="Save" />
				</form>
			);
		} else {
			return (
				<form onSubmit={this.handleSubmit}>
					<label>
						employer: <a>{this.state.employer}</a>
						<br />
					</label>
					<label>
						title: <a>{this.state.title}</a>
						<br />
					</label>
					<label>
						dates: <a>{this.state.dates}</a>
					</label>
					<br />
					<input type="submit" value="Edit" />
				</form>
			);
		}
	}
}

export default Experience;
