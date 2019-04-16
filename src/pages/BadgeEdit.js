import React from 'react';
import header from './../images/platziconf-logo.svg'
import './styles/BadgeEdit.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'
import md5 from 'md5'

class BadgeEdit extends React.Component {
	state ={
		loading: true,
		error: null,
		form:{
			firstName:'',
			lastName:'',
			email:'',
			jobTitle:'',
			twitter:''}
		};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async e =>{
		this.setState({
			loading: true,
			error: null
		})
		try{
			//Gets param from url
			const { badgeId } = this.props.match.params
			const data = await api.badges.read(badgeId)

			this.setState({
				loading: false,
				form:data
			})
		} catch(error){
			this.setState({
				loading: false,
				error
			})
		}
	} 



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
		const { badgeId } = this.props.match.params

		this.setState({
			loading: true,
			error: null
		})
		try{
			await api.badges.update(badgeId, {...this.state.form,
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
				<div className="BadgeEdit__hero">
					<img className="img-fluid BadgeEdit__hero-image" src={header} alt="Logo"/>
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
							type={'Edit'}
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

export default BadgeEdit;