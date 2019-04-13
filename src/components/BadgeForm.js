import React from 'react';

class BadgeForm extends React.Component {
		// handleChange = (e) => {
		// 	const { value, name } = e.target
		// 	this.setState({[name]: value});
		// }

	handleClick = (e) => {
		console.log('Button was clicked')
	}
	render(){
		return (
			<React.Fragment>
				<h1>New Attendant</h1>
				<form>
					<div className="form-group">
						<label>First Name</label>
						<input onChange={this.props.onChange} 
							   className="form-control" 
							   type="text" 
							   name="firstName"
							   value={this.props.formValues.firstName}/>
					</div>
					<div className="form-group">
						<label>Last Name</label>
						<input onChange={this.props.onChange} 
							   className="form-control" 
							   type="text" 
							   name="lastName"
							   value={this.props.formValues.lastName}/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input onChange={this.props.onChange} 
							   className="form-control" 
							   type="email" 
							   name="email"
							   value={this.props.formValues.email}/>
					</div>
					<div className="form-group">
						<label>Job title</label>
						<input onChange={this.props.onChange} 
							   className="form-control" 
							   type="text" 
							   name="jobTitle"
							   value={this.props.formValues.jobTitle}/>
					</div>
					<div className="form-group">
						<label>Twitter</label>
						<input onChange={this.props.onChange} 
							   className="form-control" 
							   type="text" 
							   name="twitter"
							   value={this.props.formValues.twitter}/>
					</div>
					<button type="button" onClick={this.handleClick} type="button" className="btn btn-primary">Save</button>
				</form>				
			</React.Fragment>
			)
	}

}
export default BadgeForm