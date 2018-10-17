import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,NavItem} from 'reactstrap'
import Main from './Components/Main'
import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css'


class App extends Component {
  state={
    modal: false,
    primary: false,
    isOpen: false
}
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Big Daddy Supremo Bank</NavbarBrand>
                <NavbarToggler onClick={this.toggle.bind(this)} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>         
                            <button style={{marginRight:10}} class="btn btn-info btn lg">Welcome </button>         
                        </NavItem>
                        <NavItem>
                            <button  class="btn btn-danger btn lg">Sign out!</button>               
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
          <Main />
      </div>
    );
  }
}

export default App;
