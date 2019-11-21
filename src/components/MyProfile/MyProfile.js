import React from 'react';
import classnames from 'classnames';

import { Card, CardBody, CardTitle, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactfirst: false,
            contactsecond: false,
            contactthird: false,
            contactfour: false,
            contactfive: false,
            contactsix: false,
            contactseven: false,
            contacteight: false,
            contactnine: false,
            tabvertical: '1',
            tabhorizontal: '1',
            tabround: '1',
            tabbordericon: '1'
        };

    }

    contactfour() {
        this.setState(prevState => ({
            contactfour: !prevState.contactfour
        }));
    }

    tabbordericon = (tab) => {
        if (this.state.tabbordericon !== tab) {
            this.setState({
                tabbordericon: tab
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* <Card>
                    <CardBody> */}
                <Row >
                    <Col md={4} className="mb-30"  >
                        <Card className="card-statistics h-100">
                            <div className="p-4 text-center profile-bg">
                                <h5 className="mb-70 text-white">  </h5>
                                <div className="btn-group info-drop">
                                    <Dropdown isOpen={this.state.contactfour} toggle={this.contactfour}>
                                        {/* <DropdownToggle className="ti-more" title='' id="dropdown-no-caret" /> */}
                                        <DropdownMenu>
                                            <DropdownItem ><i className="text-primary ti-files" />Add Task</DropdownItem>
                                            <DropdownItem ><i className="text-dark ti-pencil-alt" />Edit Profile</DropdownItem>
                                            <DropdownItem ><i className="text-success ti-user" />View Profile</DropdownItem>
                                            <DropdownItem ><i className="text-secondary ti-info" />Contact info</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <CardBody className="text-center">
                                <div className="avatar-top">
                                    <img className="img-fluid w-25 rounded-circle " src="assets/images/team/04.jpg" />
                                </div>
                                <p className="mt-30">
                                    <h3>Jane Doe</h3></p>

                                <p >Administrator </p>
                                <p >Status : Active</p>
                                <div className="divider mt-20" />
                                <Row>
                                    <Col sm={6} className="mt-30">
                                        <h5 className="fontLight" >Deals</h5>
                                        <h3 className="text-success mt-10">47</h3>
                                    </Col>
                                    {/* <Col sm={4} className="mt-30">
                                                <b>Messages </b>
                                                <h4 className="text-danger mt-10">475</h4>
                                            </Col> */}
                                    <Col sm={6} className="mt-30">
                                        <h5 className="fontLight" >Investment</h5>
                                        <h3 className="text-warning mt-10">4544</h3>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    {/* <Col md={6} style={{ border: "1px solid green" }}> 12345</Col> */}
                    {/* <Col md={6} style={{ border: "1px solid blue" }}> 12345</Col> */}

                    <Col md={8} className="mb-30"  >
                        <Card className="card-statistics h-100 profileTabs">
                            <CardBody>
                                <CardTitle>Profile Information</CardTitle>
                                <div className="tab tab-border">
                                    <Nav tabs>
                                        <NavItem ><NavLink className={classnames({ active: this.state.tabbordericon === '1' })} onClick={() => { this.tabbordericon('1'); }}><i className="fa fa-user"></i> Personal Information</NavLink></NavItem>
                                        <NavItem ><NavLink className={classnames({ active: this.state.tabbordericon === '2' })} onClick={() => { this.tabbordericon('2'); }}><i className="fa fa-home"></i> Address Information</NavLink></NavItem>
                                        {/* <NavItem ><NavLink className={classnames({ active: this.state.tabbordericon === '3' })} onClick={() => { this.tabbordericon('3'); }}><i className="fa fa-picture-o"></i> Portfolio</NavLink></NavItem> */}
                                        {/* <NavItem ><NavLink className={classnames({ active: this.state.tabbordericon === '4' })} onClick={() => { this.tabbordericon('4'); }}><i className="fa fa-check-square-o"></i> Contact</NavLink></NavItem> */}
                                    </Nav>
                                    <TabContent activeTab={this.state.tabbordericon} >
                                        <TabPane tabId="1">

                                            <form onSubmit={this.handleSubmit}>
                                                <Row>
                                                    <Col md={6}>
                                                        <div className="form-group">
                                                            <label htmlFor="firstName">First Name</label>
                                                            <input type="firstName" className="form-control" id="firstName" onChange={this.onChange} name="firstName" value={this.state.firstName} aria-describedby="emailHelp" />
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="form-group">
                                                            <label htmlFor="lastName">Last Name</label>
                                                            <input type="lastName" className="form-control" id="lastName" onChange={this.onChange} name="lastName" value={this.state.lastName} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        <div className="form-group">
                                                            <label htmlFor="mobile">Contact Number</label>
                                                            <input type="mobile" className="form-control" id="mobile" onChange={this.onChange} name="mobile" value={this.state.mobile} />
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                                            <input type="email" className="form-control" id="exampleInputEmail1" onChange={this.onChange} name="email" value={this.state.email} aria-describedby="emailHelp" />
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col md={6}><div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">User Type</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={this.onChange} name="email" value={this.state.email} aria-describedby="emailHelp" />

                                                    </div></Col>
                                                    <Col md={6}> <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">User Role</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={this.onChange} name="email" value={this.state.email} aria-describedby="emailHelp" />
                                                    </div></Col>
                                                </Row>


                                                <Row>
                                                    <Col md={6}> <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Gender</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={this.onChange} name="email" value={this.state.email} aria-describedby="emailHelp" />
                                                    </div></Col>
                                                    <Col md={6}></Col>
                                                </Row>


                                                {/* <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Password</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.onChange} name="password" value={this.state.password} placeholder="Password" />
                                                        </div> */}
                                                {/* <div className="form-check mb-3">
                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={this.state.checkout} onChange={this.onChange} />
                                                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                                        </div> */}
                                                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                                            </form>

                                        </TabPane>

                                        <TabPane tabId="2">
                                            <form onSubmit={this.handleSubmit}>

                                                {/* <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Password</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.onChange} name="password" value={this.state.password} placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.onChange} name="password" value={this.state.password} placeholder="Password" />
                                                        </div> */}
                                                {/* <div className="form-check mb-3">
                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={this.state.checkout} onChange={this.onChange} />
                                                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                                        </div> */}
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Address Line 1</label>
                                                    <input type="text" className="form-control" id="address1" name="address1" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Address Line 2</label>
                                                    <input type="text" className="form-control" id="address2" name="address2" />
                                                </div>
                                                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                                            </form>
                                        </TabPane>

                                        <TabPane tabId="3">
                                            <p>Benjamin Franklin, inventor, statesman, writer, publisher and economist relates in his autobiography that early in his life he decided to focus on arriving at moral perfection. He made a list of 13 virtues, assigning a page to each. Under each virtue he wrote a summary that gave it fuller meaning. Then he practiced each one for a certain length of time. To make these virtues a habit, Franklin can up with a method to grade himself on his daily actions.</p>
                                        </TabPane>

                                        <TabPane tabId="4" >
                                            <p>The other virtues practice in succession by Franklin were silence, order, resolution, frugality, industry, sincerity, Justice, moderation, cleanliness, tranquility, chastity and humility. For the summary order he followed a little scheme of employing his time each day. From five to seven each morning he spent in bodily personal attention, saying a short prayer, thinking over the day’s business and resolutions.</p>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/* </CardBody>
                </Card> */}
            </React.Fragment >
        );
    }
}
export default MyProfile;