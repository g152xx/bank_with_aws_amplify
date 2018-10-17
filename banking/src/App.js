import React, { Component } from 'react'; 
import Main from './Components/Main'
import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css'

import { withAuthenticator } from 'aws-amplify-react'

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
          <Main />
      </div>
    );
  }
}

export default withAuthenticator(App, {includeGreeting:true });
