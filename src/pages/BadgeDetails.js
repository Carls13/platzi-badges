import React from 'react'
import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'
import { Link } from 'react-router-dom'

//Custom hook
function useIncreaseCount(max) {
	const [ count, setCount ] = React.useState(0)

	if(count>max){
		setCount(0)
	}

	return [ count, setCount ]
}

function BadgeDetails(props){
	const {firstName, lastName, email, jobTitle, twitter, id } = props.badge

	//Hooks
	const [ count, setCount] = useIncreaseCount(10)

	return(
		<div>
				<div className="BadgeDetails__hero">
					<div className="container">
						<div className="row">
							<div className="col-6">
							  	<img src={confLogo} alt="Logo de la conferencia"/>
							</div>
							<div className="col-6 BadgeDetails__hero-attendant-name">
							  	<h1>{firstName} {lastName}</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-6">
						  <Badge 
								firstName={firstName} 
								lastName={lastName}
								twitter={twitter}
								jobTitle={jobTitle}
								email={email}
								 />
						 </div>	
						 <div className="col-6">
						   	<h2>Actions</h2>
						   	<div>
						   		<div>
						   		<button onClick={()=>{
						   			setCount(count + 1)
						   		}}type="button" className="btn btn-primary mr-4">
						   			Increase counter: {count}
						   		</button>
						   			<Link className="btn btn-primary mb-4" to={`/badges/${id}/edit`}>
						   				Edit
						   			</Link>
						   		</div>
						   		<div>
						   			<button onClick={props.onOpenModal} type="button" className="btn btn-danger">
						   				Delete
						   			</button>
						   			<DeleteBadgeModal 
						   				isOpen={props.modalIsOpen} 
						   				onClose={props.onCloseModal}
						   				onDeleteBadge={props.onDeleteBadge}/>
						   	</div>
						 </div>
						</div>
					</div>
					</div>
			</div>
		)
}

export default BadgeDetails;