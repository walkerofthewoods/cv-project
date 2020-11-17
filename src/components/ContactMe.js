import React from 'react';

class ContactMe extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Ryan',
			email: 'ryan@example.com',
			phone: '555-123-4567',
			editing: 0
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
						name: <input type="text" name="name" value={this.state.name} />
					</label>
					<br />
					<label>
						email: <input type="text" name="email" value={this.state.email} />
					</label>
					<br />
					<label>
						phone: <input type="text" name="phone" value={this.state.phone} />
					</label>
					<br />
					<input type="submit" value="Save" />
				</form>
			);
		} else {
			return (
				<form onSubmit={this.handleSubmit}>
					<label>
						name: <a>{this.state.name}</a>
						<br />
					</label>
					<label>
						email: <a>{this.state.email}</a>
						<br />
					</label>
					<label>
						phone: <a>{this.state.phone}</a>
					</label>
					<br />
					<input type="submit" value="Edit" />
				</form>
			);
		}
	}
}

export default ContactMe;
