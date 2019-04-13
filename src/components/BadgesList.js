import React from 'react';
import SmallBadge from './SmallBadge';

class BadgesList extends React.Component{
	render(){
		return(
			<ul className="list-unstyled">
				{
					this.props.badges.map(badge =>{
						return(
							<li key={badge.id}>
								<SmallBadge badge={badge}/>
							</li>
							)})
				}
		</ul>
			)
	}
}

export default BadgesList;