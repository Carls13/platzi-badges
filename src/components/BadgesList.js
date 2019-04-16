import React from 'react';
import SmallBadge from './SmallBadge';
import { Link } from 'react-router-dom';

function useSearchBadges(badges) {
	const [ query, setQuery ] = React.useState('')
	const [ filteredBadges, setFilteredBadges ] = React.useState(badges)

	//Hook
	React.useMemo(() => {
		const result = badges.filter(badge =>{
			return `${badge.firstName} ${badge.lastName}`.toLowerCase().
			includes(query.toLowerCase());
		});

		setFilteredBadges(result)
	}, [ badges, query ])

	return { query, setQuery, filteredBadges }
}
function BadgesList(props){
	const { badges } = props

	const { query, setQuery, filteredBadges } = useSearchBadges(badges)


	const searchBox = <form>
					<div className="form-group">
						<label>Filter badges</label>
						<input 
							type="text" 
							className="form-control" 
							placeholder="Search a name..."
							value={query}
							onChange={(e)=>{
								setQuery(e.target.value)
							}}
							/>
					</div>
				</form>;

		if (filteredBadges.length === 0) {
			return(
				<div>
				{searchBox}
					<h3>No badges were found</h3>
					<Link to="/badges/new" className="btn btn-primary">
						Create a badge
					</Link>
				</div>)
		}
		return(
			<div className="BadgesList">
				{searchBox}
				<ul className="list-unstyled">
					{
						filteredBadges.map(badge =>{
							return(
								<li key={badge.id}>
									<Link className="text-reset text-decoration-none" 
										  to={`/badges/${badge.id}`}>
										<SmallBadge badge={badge}/>
									</Link>
								</li>
								)})
					}
			</ul>
		</div>
			)
	}


export default BadgesList;