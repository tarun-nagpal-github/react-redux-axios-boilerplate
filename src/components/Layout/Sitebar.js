import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollArea from 'react-scrollbar';
import { Collapse } from 'reactstrap';
import { isModuleExists, isPageExists } from "../../utils/RbacHelpers";
import './Header';

class Sitebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dashboard: false,
			investor: false,
			plussignele1: false,
			plussignele2: false,
			plussignele3: false,
			pagesAndPermissions: JSON.parse(window.localStorage.getItem('moduleAndPages') || "[]")
		}
	}

	investor = () => {
		this.setState({
			investor: !this.state.investor,
			plussignele1: !this.state.plussignele
		})
	}

	investor2 = () => {
		this.setState({
			plussignele3: !this.state.plussignele3
		})
	}

	syndicate = () => {
		this.setState({
			syndicate: !this.state.syndicate,
			plussignele2: !this.state.plussignele
		})
	}


	render() {
		console.log("pagesAndPermissions 2");
		console.log(this.state.pagesAndPermissions);
		console.log("pagesAndPermissions");
		return (
			<div className="side-menu-fixed">
				<ScrollArea speed={0.8} style={{ overflow: 'hidden' }} className="scrollbar side-menu-bg" contentClassName="saidbar" horizontal={false} >
					<div className="saidbar">

						<ul className="nav navbar-nav side-menu" id="sidebarnav">
							{/* <!-- menu item Dashboard--> */}
							<li className="active">
								<Link to="/"><i className="ti-home"></i><span className="right-nav-text">Dashboard</span></Link>
							</li>

							<li>  <Link to="/syndicate-investor-report"><i className="fa fa-print"></i> <span className="right-nav-text">Reports</span></Link> </li>

							{isModuleExists(this.state.pagesAndPermissions, "User") &&
								<li>
									<a href="javascript:void(0);" onClick={this.investor} aria-expanded={this.state.plussignele2 ? "true" : "false"} className={this.state.plussignele2 ? "" : "collapsed"}>
										<div className="pull-left"><i className="ti-palette"></i><span className="right-nav-text">User</span></div>
										<div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
									</a>
									<Collapse isOpen={this.state.investor}>
										<ul id="investor"  >
											{isPageExists(this.state.pagesAndPermissions, "User", "view-user") &&
												<li> <Link to="/annual-investor-report">Users List</Link> </li>
											}
										</ul>
									</Collapse>
								</li>
							}
							{isModuleExists(this.state.pagesAndPermissions, "Permission") &&
								<li>
									<a href="javascript:void(0);" onClick={this.investor2} aria-expanded={this.state.plussignele3 ? "true" : "false"} className={this.state.plussignele3 ? "" : "collapsed"}>
										<div className="pull-left"><i className="fa fa-users"></i><span className="right-nav-text">Permission</span></div>
										<div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
									</a>
									<Collapse isOpen={this.state.plussignele3}>
										<ul id="investor"  >
											{isPageExists(this.state.pagesAndPermissions, "Permission", "add-permission") &&
												<li> <Link to="/annual-investor-report">Add Permission</Link> </li>
											}
										</ul>
									</Collapse>
								</li>
							}
						</ul>
					</div>
				</ScrollArea>
			</div>
		);
	}
}
export default Sitebar;