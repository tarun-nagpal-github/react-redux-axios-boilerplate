import React, { Component } from 'react';

import { Input, Label, Card, CardBody, Badge, Button, CardTitle, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { connect } from "react-redux";

import Data from "../../../Data/PermissionGroups.json";
import HfhTable from "./../../utils/HfhTable"
import ModalPopUp from "./../../utils/ModalPopUp";

import { exampleAction } from "./../../reduxUtils/actions/index";


class PermissionGroupList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDelete: false,
            data: Data,
            columns: [
                {
                    Header: "Group Name",
                    id: "groupName",
                    accessor: d => d.groupName,
                    headerClassName: "font-weight-bold"
                },
                {
                    Header: "Role Name",
                    id: "roleName",
                    accessor: d => d.roleName,
                    headerClassName: "font-weight-bold"
                },
                {
                    Header: "Created Date",
                    id: "createdDate",
                    accessor: d => d.createdDate,
                    headerClassName: "font-weight-bold"
                },
                {
                    Header: "Status",
                    id: "isActive",
                    accessor: d => d.isActive,
                    headerClassName: "font-weight-bold text-center",
                    Cell: row => {
                        return (
                            <div className="text-center">
                                {row.value && <Badge color="danger" style={{ fontSize: "small" }}>InActive</Badge>}
                                {!row.value && <Badge color="success" style={{ fontSize: "small" }}>Active</Badge>}
                                {/* <Badge color="success">Active</Badge> */}
                            </div>
                        )
                    }
                },
                {
                    Header: "Action",
                    // id: "isActive",
                    // accessor: d => d.isActive,
                    headerClassName: "font-weight-bold text-center",
                    Cell: row => (
                        <div className="text-center">
                            <i
                                title="Click here to delete" className="cursor-pointer fa fa-2x fa-trash-o"
                                aria-hidden="true" onClick={() => this.handleDelete(row.original)} ></i>
                        </div>
                    )
                },
            ]
        }
    }

    handleDelete = (data = null) => {
        this.setState({
            isDelete: true
        });
    };

    componentDidMount = () => {
        this.props.exampleAction(132);
    }
    render() {
        return (
            <div>
                <ModalPopUp isDelete={this.state.isDelete} />
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0">Permission Groups</h4>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Permission Groups</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <Card className="card-statistics">
                    <CardBody>
                        <form class="form-inline" action="/action_page.php">
                            <Label for="groupName">Group Name:</Label>
                            <Input type="text" class="form-control" id="groupName" />
                            <Label for="exampleSelect">Role Name</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Administrator</option>
                                <option>Administrator</option>
                                <option>Administrator</option>
                                <option>Administrator</option>
                            </Input>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        <HfhTable data={this.state.data} columns={this.state.columns} />
                    </CardBody>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = {
    exampleAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PermissionGroupList)


