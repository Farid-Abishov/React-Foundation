import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../components/UserListComponent";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [
        {
          id: 1,
          name: "Farid",
          surname: "Abishov",
          username: "faridabishov",
        },
        {
          id: 2,
          name: "Ali",
          surname: "Abishov",
          username: "alidabishov",
        },
        {
          id: 3,
          name: "Emin",
          surname: "Babayev",
          username: "eminbabayev",
        },
        {
          id: 4,
          name: "Nurlan",
          surname: "Babayev",
          username: "eminbabayev",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Navbar>
          <div className="container">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
          </div>
        </Navbar>
        <UserListComponent users={this.state.Users} />
      </div>
    );
  }
}

export default HomePage;
