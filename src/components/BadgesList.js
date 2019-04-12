import React from 'react';

class BadgesList extends React.Component{
	render(){
		return(
			<ul class="list-unstyled">
				{this.props.badges.map(badge =>{
									return(
										<li key={badge.id}>
											{badge.firstName}
										</li>
										)
								})}
		</ul>
			)
	}
}

export default BadgesList;