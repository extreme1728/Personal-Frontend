import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import request from '../utils/request';
import { setAuthentication } from '../actions/authentication'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import Signup from './Signup'
import Ihelp from './Ihelp/Ihelp'
import Session from './Session/Session'

//AUTHRIZATION REQUEST///
class App extends Component {
  componentDidMount(){
    request('/auth/token')
    .then(response => this.props.setAuthentication(response.data))
    .catch(err => this.props.setAuthentication(null))
  }


  render() {
    return (
      <BrowserRouter>
      <div>
        
        <div className="container">
        <Header />  
        </div>
        {
          this.props.user ? <div >
          <Session />
          </div> : null
        }
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/ihelp' component={Ihelp} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />

      </div>
    </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authentication.user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setAuthentication
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
