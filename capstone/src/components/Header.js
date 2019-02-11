import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setAuthentication } from '../actions/authentication'

class Header extends Component {
  lognInLogOutButton = () => {
    if(this.props.user){ // log out
      localStorage.removeItem('token')
      this.props.setAuthentication(null)
    }
    else {
      this.props.history.push('/login')
    }
  }

  signUpButton = () => {
    this.props.history.push('/signup')

  }
  
  render(){
    return (
      
      <header className="blog-header py-3">
      
        <div className="row flex-nowrap justify-content-end align-items-center">
        {
              this.props.user ?
              <span style={{marginRight: '10px'}}>
                Welcome {this.props.user.username}
              </span> : null
        }
          {this.props.user ? null : 
          <div >
            <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.signUpButton()} style={{marginRight: '10px'}} >Sign Up</span>
          </div>
          }

          <div>
            <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.lognInLogOutButton()}>
              {this.props.user ? 'Log Out' : 'Log In'}
            </span>
          </div>
        </div>

      </header>
    )
  }
}

const mapStateToProps = state => ({
  user: state.authentication.user
})

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    setAuthentication
  }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
