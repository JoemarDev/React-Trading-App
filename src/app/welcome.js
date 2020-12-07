import React, { Component } from 'react';


class Welcome extends Component {
	render() {
		return(
			<div>
				<h1>WAZZUPP!! {this.props.name}</h1>
				Welcome to funcking ist.
			</div>
		)	
	}
}

export default Welcome;