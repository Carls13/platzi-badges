import React from 'react';
import './styles/SmallBadge.css';
import twitterLogo from '../images/twitter.png'

class Badge extends React.Component{
	render(){

		const { firstName, lastName, jobTitle, twitter, avatarUrl } = this.props.badge

		return <div className="SmallBadge">
			<div class="row">
				<div class="col-2">
				  	<img src={avatarUrl} alt="Avatar" className="m-2 rounded-circle"/>
				</div>
				<div class="col-10">
					<div className="rightContainer">
					  	<h5><b>{firstName} {lastName}</b></h5>
					  	<div class="twitterContainer">
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