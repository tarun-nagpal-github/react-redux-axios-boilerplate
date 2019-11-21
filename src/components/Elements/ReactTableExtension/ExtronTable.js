import React from "react";
import ReactTable from "react-table";
import Pagination from "./Pagination";

class ExtronTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parentRecords: props.parentRecords,
            parentColumns: props.parentColumns,
            childRecords: props.childRecords,
            childColumns: props.childColumns,
            minRows: props.minRows,
            filterable: props.filterable,
            defaultPageSize: props.defaultPageSize,
            defaultSorted: props.defaultSorted,
            showPaginationBottom: props.showPaginationBottom,
            showPaginationTop: props.showPaginationTop,
            childRecords: props.childRecords,
            childPaginationSecondary: props.childPaginationSecondary == true ? true : false,
            classes: props.classes != null ? props.classes : "",
            selectedRow: ""
        };
    }

    nullComponent = () => null;

    componentWillReceiveProps(nextProps) {
        this.setState({
            parentRecords: nextProps.parentRecords,
            parentColumns: nextProps.parentColumns,
            childRecords: nextProps.childRecords,
            childColumns: nextProps.childColumns,
            minRows: nextProps.minRows,
            filterable: nextProps.filterable,
            defaultPageSize: nextProps.defaultPageSize,
            defaultSorted: nextProps.defaultSorted,
            showPaginationBottom: nextProps.showPaginationBottom,
            showPaginationTop: nextProps.showPaginationTop,
            childPaginationSecondary: nextProps.childPaginationSecondary == true ? true : false,
            classes: nextProps.classes != null ? nextProps.classes : ""
        });
    }

    filterCaseInsensitive = ({ id, value }, row) => row[id].toString() ? row[id].toString().toLowerCase().includes(value.toString().toLowerCase()) : true

    render() {
        return (
            <div>
                <ReactTable
                    data={this.state.parentRecords}
                    columns={this.state.parentColumns}
                    className={this.state.classes}
                    // defaultSorted={[{ id: "ReceivedOn", desc: true }]}
                    // defaultSorted={[this.state.defaultSorted]}
                    defaultSortDesc={true}
                    filterable={this.state.filterable}
                    minRows={this.state.minRows}
                    defaultPageSize={this.state.defaultPageSize}
                    showPaginationTop={this.state.showPaginationTop}
                    showPaginationBottom={this.state.showPaginationBottom}
                    NoDataComponent={this.nullComponent}
                    previousText="<<"
                    nextText=">>"
                    defaultFilterMethod={this.filterCaseInsensitive}
                    getTrProps={(state, rowInfo, column) => {
                        const index = rowInfo ? rowInfo.index : -1;
                        return {
                            onClick: () => {
                                this.setState({
                                    selectedRow: index
                                });
                            },
                            style:{
                                background: this.state.selectedRow === index ? "rgba(73, 154, 255, 0.12)": null,
                                color: this.state.selectedRow === index ? "rgb(0, 0, 0)": null
                            },
                            'data-qnt': rowInfo.original.parts && rowInfo.original.parts.length > 0 ? "1" : "0"
                        }
                    }}
                    SubComponent={row => {
                        if (row.original[this.state.childRecords] && row.original[this.state.childRecords].length != 0) {
                            if (this.state.childPaginationSecondary) {
                                return (
                                    <div style={{ padding: "20px" }}>
                                        <div>
                                            <ReactTable
                                                PaginationComponent={Pagination}
                                                resolveData={data => data.map(d => {
                                                    return {
                                                        ...d,
                                                        parentRow: row.original
                                                    }
                                                })}
                                                data={row.original[this.state.childRecords]}
                                                columns={this.state.childColumns}
                                                minRows={this.state.minRows}
                                            />
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div style={{ padding: "20px" }}>
                                        <div>
                                            <ReactTable
                                                resolveData={data => data.map(d => {
                                                    return {
                                                        ...d,
                                                        parentRow: row.original
                                                    }
                                                })}
                                                data={row.original[this.state.childRecords]}
                                                columns={this.state.childColumns}
                                                minRows={this.state.minRows}
                                            />
                                        </div>
                                    </div>
                                );
                            }
                        }
                    }}
                />
            </div >
        )
    }
}

export default ExtronTable;