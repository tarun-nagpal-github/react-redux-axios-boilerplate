import React from 'react';
import { Loader } from "react-overlay-loader";
import { Card, CardBody, CardTitle, Row, Col, ListGroup, ListGroupItem, Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import NoRecordsFound from "./NoRecords/NoRecords";
class Permissions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actionLoader: false,
            loader: true,

            pageList: [],
            moduleData: [
                {
                    "idUserModule": 1,
                    "userModuleName": "Client Setup",
                    "modulePages": [
                        {
                            "idUserModulePage": 12,
                            "pageName": "Client Settings All Pages",
                            "pageUrl": "client-settings-all-pages",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 13,
                            "pageName": "Client List",
                            "pageUrl": "client-list",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 14,
                            "pageName": "Client Setup All Pages ",
                            "pageUrl": "client-setup-all-pages",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 15,
                            "pageName": "Fulfillment Setup",
                            "pageUrl": "fulfillment-setup",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 16,
                            "pageName": "Auto Bulk Settings",
                            "pageUrl": "auto-bulk-settings",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 17,
                            "pageName": "Order Settings",
                            "pageUrl": "order-settings",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 19,
                            "pageName": "Packing Slip Settings",
                            "pageUrl": "packing-slip-settings",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 20,
                            "pageName": "FTP Settings",
                            "pageUrl": "ftp-settings",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 21,
                            "pageName": "Demo Loan Options Settings",
                            "pageUrl": "demo-loan-options-settings",
                            "actions": []
                        }
                    ]
                },
                {
                    "idUserModule": 2,
                    "userModuleName": "Fulfillment",
                    "modulePages": []
                },
                {
                    "idUserModule": 3,
                    "userModuleName": "Receiving",
                    "modulePages": [
                        {
                            "idUserModulePage": 4,
                            "pageName": "Receiving - At Dock - Dashboard",
                            "pageUrl": "receiving-at-dock-dashboard",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 5,
                            "pageName": "Receiving - At Dock ",
                            "pageUrl": "receiving-at-dock",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 6,
                            "pageName": "Receiving - Orphan Receipts",
                            "pageUrl": "receiving-workflow",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 7,
                            "pageName": "Receiving - Missing Part # ",
                            "pageUrl": "receiving-workflow",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 8,
                            "pageName": "Receiving Queue",
                            "pageUrl": "receiving-workflow",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 9,
                            "pageName": "Tagged Receiving",
                            "pageUrl": "receiving-workflow",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 10,
                            "pageName": "Received Orders (Ready to Move) ",
                            "pageUrl": "receiving-workflow",
                            "actions": []
                        }
                    ]
                },
                {
                    "idUserModule": 4,
                    "userModuleName": "Administration",
                    "modulePages": [
                        {
                            "idUserModulePage": 2,
                            "pageName": "Create Role",
                            "pageUrl": "user-roles-list",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 3,
                            "pageName": "Create User",
                            "pageUrl": "create-user",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 11,
                            "pageName": "Create Permissions",
                            "pageUrl": "create-permissions",
                            "actions": []
                        },
                        {
                            "idUserModulePage": 22,
                            "pageName": "Client Manager Settings",
                            "pageUrl": "client-manager-settings",
                            "actions": []
                        }
                    ]
                }
            ],
            userRoles: [
                {
                    "roleId": 2,
                    "roleName": "Administrator",
                    "userType": "User - (For Admin/Client Portal)",
                    "isActive": true
                },
                {
                    "roleId": 3,
                    "roleName": "Client Manager",
                    "userType": "User - (For Admin/Client Portal)",
                    "isActive": true
                },
                {
                    "roleId": 4,
                    "roleName": "Receiving",
                    "userType": "User - (For Admin/Client Portal)",
                    "isActive": true
                },
                {
                    "roleId": 5,
                    "roleName": "traffic12",
                    "userType": "User - (For Admin/Client Portal)",
                    "isActive": true
                },
                {
                    "roleId": 6,
                    "roleName": "test",
                    "userType": "Member - (For Client Portal Only)",
                    "isActive": true
                },
                {
                    "roleId": 18,
                    "roleName": "ROLE PP",
                    "userType": "Member - (For Client Portal Only)",
                    "isActive": true
                }
            ]
        };

    }

    handleChange = (e) => {
        let name = e.currentTarget.getAttribute('name');
        let value = e.currentTarget.getAttribute('value');
        // check if module clicked
        if (name == "idUserModule") {
            let temp2 = this.state.moduleData.filter(object => object.idUserModule == value);
            if (Array.isArray(temp2) && (temp2.length > 0) && (temp2[0].modulePages)) {
                // Set the pageList 
                this.setState({
                    pageList: temp2[0].modulePages,
                    actionList: [],
                    showPageSelection: false,
                    showModuleSelection: true
                });
            }
        } else {
            // Unset the pageList 
            this.setState({
                pageList: [],
                actionList: [],
                showModuleSelection: false,
            });
        }

        this.setState({
            [name]: value,
            actionsViewModels: []
        });
    }

    GetUserList = () => {
        return (
            <ListGroup>
                {this.state.userRoles.map((item) => {
                    return (
                        <ListGroupItem
                            name="idUserRole" active={this.state.idUserRole == item.roleId}
                            onClick={this.handleChange} value={item.roleId}
                            action key={item.roleId} id={item.roleId}>
                            {item.roleName}
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
        );
    };

    GetModuleList = () => {
        return (
            <ListGroup>
                {this.state.moduleData.map((item) => {
                    return (
                        <ListGroupItem name="idUserModule"
                            active={this.state.idUserModule == item.idUserModule && this.state.showModuleSelection}
                            onClick={this.handleChange} value={item.idUserModule} action key={item.idUserModule}
                            id={item.idUserModule}>
                            {item.userModuleName}
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
        );
    };

    isModuleExists = () => {
        return (Array.isArray(this.state.moduleData) && this.state.moduleData.length > 0);
    }

    GetPageList = () => {
        if ((this.isModuleExists()) && (this.state.pageList.length > 0)) {
            return (
                <ListGroup>
                    {this.state.pageList.map((item) => {
                        return (
                            <ListGroupItem name="idUserModulePage" active={this.state.idUserModulePage == item.idUserModulePage && this.state.showPageSelection} onClick={this.fetchActions} key={item.idUserModulePage} value={item.idUserModulePage}>{item.pageName}</ListGroupItem>
                        );
                    })}
                </ListGroup>
            );
        }
        return <NoRecordsFound />;
    };

    render() {
        return (
            <React.Fragment>
                <div className="mb-90">
                    <div className="page-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3 className="mb-0">Role Based Access Control</h3>
                            </div>
                            {/* <ToastContainer /> */}
                            <div className="col-sm-6">
                                <Breadcrumb className="float-right float-sm-right">
                                    <BreadcrumbItem>
                                        <a href="#">Home</a>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>Administration</BreadcrumbItem>
                                    <BreadcrumbItem active>Permissions</BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </div>
                    </div>
                    <Row>
                        {/* <Col sm={4}>
              <RolesList />
            </Col> */}
                        <Col sm={12}>
                            <Card>
                                <CardBody>
                                    {/* <Row>
                    <Col sm={12}>
                      <h2 className="perHeading">Permission Matrix</h2>
                    </Col>
                  </Row> */}
                                    <Row className="rbac">
                                        <Col sm={2} className="modules">
                                            <Card>
                                                <CardBody>
                                                    {/* <Loader loading={this.state.loader} /> */}
                                                    <CardTitle>Roles</CardTitle>
                                                    <this.GetUserList />
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm={2} className="modules">
                                            <Card>
                                                <CardBody>
                                                    {/* <Loader loading={this.state.loader} /> */}
                                                    <CardTitle>Modules</CardTitle>
                                                    <this.GetModuleList />
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm={2} className="pages">
                                            <Card>
                                                <CardBody>
                                                    <CardTitle>Pages</CardTitle>
                                                    <this.GetPageList />
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        {/* {(this.state.actionList.length > 0) && */}
                                        <Col sm={6} className="actions">
                                            <Card>
                                                <CardBody>
                                                    <CardTitle>Actions</CardTitle>
                                                    <Row className="row" >
                                                        <Loader loading={this.state.actionLoader} />
                                                        {/* <this.GetActionList /> */}
                                                    </Row>
                                                    {/* {(this.state.actionList.length > 0) &&
                                                        <Row className="footerButton">
                                                            <Col className="text-center text-md-right" >
                                                                <Button color="secondary" onClick={() => this.savePermissions()}>Save Permissions</Button>
                                                            </Col>
                                                        </Row>
                                                    } */}
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        {/* } */}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </React.Fragment >
        );
    }
}
export default Permissions;