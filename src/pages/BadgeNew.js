import React from 'react';
import header from './../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'
import md5 from 'md5'

class BadgeNew extends React.Component {
	state ={
		loading: false,
		error: null,
		form:{
			firstName:'',
			lastName:'',
			email:'',
			jobTitle:'',
			twitter:''}
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

	handleSubmit = async e => {
		e.preventDefault()
		const hash = md5(this.state.form.email);
		this.setState({
			loading: true,
			error: null
		})
		try{
			await api.badges.create({...this.state.form,
				avatarUrl:`https://www.gravatar.com/avatar/${hash}?d=identicon`
			})
			this.setState({
				loading: false
			})
			this.props.history.push('/badges')
		}catch(error){
			this.setState({
					loading: false,
					error
				})
		}
		}


	render(){
		if (this.state.loading){
			return <PageLoading/>
		}
		const { firstName, lastName, email, jobTitle, twitter } = this.state.form
		return(
			<React.Fragment>
				<div className="BadgeNew__hero">
					<img className="img-fluid BadgeNew__hero-image" src={header} alt="Logo"/>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge 
								firstName={firstName || 'FirstName'} 
								lastName={lastName || 'LastName'}
								twitter={twitter || 'twitter'}
								jobTitle={jobTitle || 'Job title'}
								email={email || 'email'}
								 />
						 </div>
						 <div className="col-6">
							<BadgeForm
							type={'New'}
							onChange={this.handleChange} 
							onSubmit={this.handleSubmit} 
							formValues={this.state.form}
							error={this.state.error}/>
						 </div>
					 </div>
				 </div>
			</React.Fragment>
				)
	}
}

export default BadgeNew;