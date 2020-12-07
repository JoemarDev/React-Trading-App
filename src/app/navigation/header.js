import React , { Component } from 'react';
import navIcon from '../assets/images/burger-button.svg';
import balanceIcon from '../assets/images/balance-icon.svg';

export default class Header extends Component {
	render() {
		return (
			<div>
				<div className="web-nav w-100">
					<div className="card bg-dark p-2 text-white mx-1 float-left">
						<label className="m-0"> Balance </label>
					</div>
					<div className="card bg-dark p-2 text-white mx-1 float-left">
						<label className="m-0"> Assets </label>
					</div>
					<div className="card bg-dark p-2 text-white mx-1 float-left">
						<label className="m-0"> Credit </label>
					</div>
					<div className="card bg-dark p-2 text-white mx-1 float-right">
						<label className="m-0"> Language </label>
					</div>

					<div className="card bg-dark p-2 text-white mx-1 float-right">
						<label className="m-0"> Balance </label>
					</div>
					<div className="clearfix"></div>
				</div>


			</div>
		);
	}
}