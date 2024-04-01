import React, { Component } from "react";
import { Table, Alert } from "reactstrap";
import FormComponent from "./FormComponent";

class UserListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.hide=this.hide.bind(this);
  }
  hide() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <div className="container mt-4">
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ visible: true })}
          >
            Add
          </button>
          <FormComponent visible={this.state.visible} hide={this.hide} />
          {this.props.users.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.users.map((user) => (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.username}</td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                      &nbsp;
                      <button className="btn btn-danger">Deletet</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Alert className="mt-4" color="warning">
              This is a primary alert — check it out!
            </Alert>
          )}
        </div>
      </div>
    );
  }
}

export default UserListComponent;
