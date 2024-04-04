import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../components/UserListComponent";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: uuidv4(),
          name: "Farid",
          surname: "Abishov",
          username: "faridabishov",
        },
        {
          id: uuidv4(),
          name: "Ali",
          surname: "Abishov",
          username: "alidabishov",
        },
        {
          id: uuidv4(),
          name: "Emin",
          surname: "Babayev",
          username: "eminbabayev",
        },
        {
          id: uuidv4(),
          name: "Nurlan",
          surname: "Babayev",
          username: "eminbabayev",
        },
      ],
    };
    this.addUser=this.addUser.bind(this)
    this.deleteUser = this.deleteUSer.bind(this);
  }

  addUser = (name, surname, username) => {
    if ((name, surname, username)) {
      const users = [...this.state.users];
      users.push({
        id: uuidv4(),
        name: name,
        surname: surname,
        username: username,
      });
      this.setState({ users });
      toast(`${name} Added`);
    } else {
      alert("please fill all fiels");
    }
  };

  deleteUSer = (obj) => {
    const users = this.state.users.filter((user) => {
      return user.id !== obj.id;
    });
    this.setState({ users });
    toast(`${obj.name} Removed`);
  };

  render() {
    return (
      <div>
        <ToastContainer></ToastContainer>
        <Navbar>
          <div className="container">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
          </div>
        </Navbar>
        <UserListComponent
          users={this.state.users}
          addUser={this.addUser}
          deleteUSer={this.deleteUSer}
        />
      </div>
    );
  }
}

export default HomePage;
