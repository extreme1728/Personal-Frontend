import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import request from '../utils/request';
import { setAuthentication } from '../actions/authentication'
import Home from './Home'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'


//AUTHRIZATION REQUEST///
class App extends Component {
  componentDidMount(){
    request('/auth/token')
    .then(response => this.props.setAuthentication(response.data))
    // console.log(response)
    .catch(err => this.props.setAuthentication(null))
  }


  render() {
    return (
      <BrowserRouter>
      <div>
        <div className="container">
          <Header />
        </div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />

          {/* <AuthenticatedRoute exact path='/create' component={CreateBlogPost} /> */}
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setAuthentication
  }, dispatch)

export default connect(null, mapDispatchToProps)(App)
