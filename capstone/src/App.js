import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import request from './utils/request';
import { setAuthentication } from './actions/authentication';
import Header from './components/header';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile/Profile';
import Ihelp from './components/Ihelp/Ihelp';
import Session from './components/Session/Session';
import Footer from './components/footer';
import resumeData from './resumeData';

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
      <div className="App">
       <Header resumeData={resumeData}/>
        </div>
      
      {
          this.props.user ? <div >
          <Session />
          </div> : null
        } 
       <Switch>
          <Route path='/Login' component={Login} />
          <Route path='/Signup' component={Signup} />
          <Route path='/Profile' component={Profile} />
          <Route path='/ihelp' component={Ihelp} />
          <Route path='/Session' component={Session} />
          
       </Switch>
       <Footer resumeData={resumeData}/>
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
