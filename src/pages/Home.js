import React from 'react';
import confLogo from './../images/platziconf-logo.svg'
import astronauts from './../images/astronauts.svg'
import './styles/Home.css'
import { Link } from 'react-router-dom'

function Home(){
	return (
		<div className="Home__hero">
			<div className="row">
				<div className="col-4">
				<div className="container leftHome">
				  	<img src={confLogo} className="img-fluid" alt="Conf"/>
				  	<h1 className="badgeHome">Badge<br/>Management<br/>System</h1>
					  	<Link to="/badges" className="btn btn-primary">
					  		Start
					  	</Link>
					
				</div>
				</div>
				<div className="col-8">
				  	<img src={astronauts} className="img-fluid rightHome" alt="Astronauts"/>
				</div>
			</div>
		</div>
		)
}
export default Home;