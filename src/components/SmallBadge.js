import React from 'react';
import './styles/SmallBadge.css';
import twitterLogo from '../images/twitter.png'

class Badge extends React.Component{
	render(){

		const { firstName, lastName, jobTitle, twitter, avatarUrl } = this.props.badge

		return <div className="SmallBadge">
			<div className="row">
				<div className="col-2">
				  	<img src={avatarUrl} alt="Avatar" className="m-2 rounded-circle"/>
				</div>
				<div className="col-10">
					<div className="rightContainer">
					  	<h5><b>{firstName} {lastName}</b></h5>
					  	<div className="twitterContainer">
					  		<img src={twitterLogo} alt="Twitter" className="twitterLogo"/>
					  		<h5 className="blue">@{twitter}</h5>
					  	</div>
					  	<h5>{jobTitle}</h5>
					</div>
				</div>
			</div>
		</div>
	}
}

export default Badge;