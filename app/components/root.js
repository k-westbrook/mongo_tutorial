import React from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from 'react-router-dom'
import { ConnectedLoginForm } from './login-page'
import ConnectedDashboard from './dashboard'
import ConnectedSignUpForm from './signup-page'



class Root extends React.Component {



  render() {
    return (
      <div>
        <hi>hi</hi>
      </div>
    )
  }
}



export default Root
