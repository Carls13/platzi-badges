import React from 'react';
import Navbar from '../components/Navbar';
import header from './../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
	state ={
		form:{
			firstName:'',
			lastName:'',
			email:'',
			jobTitle:'',
			twitter:'',}
		};

	handleChange = e => {
		const { name, value } = e.target
		// const nextForm = this.state.form
		// nextForm[name] = value
		this.setState({
			form:{
				...this.state.form,
				[name]:value
			}
		})
	}


	render(){
		const { firstName, lastName, email, jobTitle, twitter } = this.state.form
		return(
			<div>
				<Navbar/>
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="Logo"/>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge 
								firstName={firstName} 
								lastName={lastName}
								avatarUrl='https://avatars2.githubusercontent.com/u/36903544?s=460&v=4'
								twitter={twitter}
								jobTitle={jobTitle}
								 />
						 </div>
						 <div className="col-6">
							<BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
						 </div>
					 </div>
				 </div>
			</div>
				)
	}
}

export default BadgeNew;