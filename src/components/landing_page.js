import React from 'react'


const LandingPage = (props) => {
	return(
		<div className="landingPage">
			<div className="background-layer">
				<div className="row text-center app-info">
					<h1 className="text-center appName">My Recipe Book</h1>
					<h1 className="text-center appDescription">Add your favourite recipes.</h1>
					<button className="btn btn-primary btn-lg action-btn" onClick={() => props.onSelect()}>Get Started</button>
				</div>
			</div>
		</div>
	)
}

export default LandingPage;