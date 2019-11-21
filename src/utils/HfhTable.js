import React from "react";
import ReactTable from "react-table";
import { isArrayAndNotNull } from "./HelperFunctions";
import { Alert } from "reactstrap";
class HfhTable extends React.Component {
    constructor(props) {
        super(props);
    }

    isRecordsNotNull = () => {
        return (isArrayAndNotNull(this.props.data) && isArrayAndNotNull(this.props.columns));
    }

    render() {
        return (
            <React.Fragment>
                {this.isRecordsNotNull() &&
                    <ReactTable
                        previousText="<<"
                        nextText=">>"
                        data={this.props.data}
                        columns={this.props.columns}
                        className="-striped -highlight w-100"
                        defaultPageSize={10}
                        showPageSizeOptions={false}
                        style={{
                            width: "100%"
                        }}
                        filterable={false}
                        minRows={0}
                    />
                }
                {!this.isRecordsNotNull() &&
                    <Alert color="dark">
                        <p className="text-center">No Records Found</p>
                    </Alert>
                }
            </React.Fragment>
        );
    }
}

export default HfhTable;