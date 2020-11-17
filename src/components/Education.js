import React from 'react';

class Education extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			school: 'UMich',
			degree: 'BA - Sociology',
			year: '2005',
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
						school: <input type="text" name="school" value={this.state.school} />
					</label>
					<br />
					<label>
						degree: <input type="text" name="degree" value={this.state.degree} />
					</label>
					<br />
					<label>
						year: <input type="text" name="year" value={this.state.year} />
					</label>
					<br />
					<input type="submit" value="Save" />
				</form>
			);
		} else {
			return (
				<form onSubmit={this.handleSubmit}>
					<label>
						school: <a>{this.state.school}</a>
						<br />
					</label>
					<label>
						degree: <a>{this.state.degree}</a>
						<br />
					</label>
					<label>
						year: <a>{this.state.year}</a>
					</label>
					<br />
					<input type="submit" value="Edit" />
				</form>
			);
		}
	}
}

export default Education;
