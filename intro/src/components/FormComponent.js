import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      username: "",
    };
  }

  onSubmit() {
    this.props.addUser(
      this.state.name,  
      this.state.surname,
      this.state.username
    );
    this.props.hide()
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.visible}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  onChange={(e) => this.setState({ name: e.target.value })}
                  id="name"
                  name="name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="surname">Surname</Label>
                <Input
                  onChange={(e) => this.setState({ surname: e.target.value })}
                  id="surname"
                  name="surname"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  onChange={(e) => this.setState({ username: e.target.value })}
                  id="username"
                  name="username"
                  type="text"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-success "
              onClick={() => this.onSubmit()}
            >
              Add
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.hide()}
            >
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FormComponent;
