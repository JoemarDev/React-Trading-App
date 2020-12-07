import React , { Component } from 'react';

export default class Sidebar extends Component {
	render() {
		return(
			<div>
				<div className="webSidebar px-3">
					<div className="menu-holder">
						<a>Dashboard</a>
						<a>Profile</a>
						<a>Deposit</a>
						<a>Withdraw</a>
					</div>
				</div>
			</div>
		);
	}
}