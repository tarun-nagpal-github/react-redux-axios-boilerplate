import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
class ModalPopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDelete: this.props.isDelete
        }
    }
    toggleModal = () => {
        this.setState({
            isDelete: !this.state.isDelete
        })
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            isDelete: nextProps.isDelete
        });
    }



    render() {
        return (
            <React.Fragment>
                {/* Modal */}
                <Modal isOpen={this.state.isDelete} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Are you sure you want to Delete?
                    </ModalHeader>
                    <ModalFooter>
                        <Button color="danger" onClick={this.deleteFile}>Ok</Button>
                        <Button
                            color="secondary"
                            onClick={() => this.setState({ isDelete: false })}
                            data-dismiss="modal"
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
                {/* Modal */}
            </React.Fragment>
        )
    }
}

export default ModalPopUp;