import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
        {/* LEFT SIDE OF NAV BAR. */}
        <div className="row flex-nowrap justify-content-end align-items-center">
            <div >
              <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.signUpButton()} style={{marginRight: '10px'}} >Home</span>
            </div>
            <div >
              <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.signUpButton()} style={{marginRight: '10px'}} >Messages</span>
            </div>
            <div >
              <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.signUpButton()} style={{marginRight: '10px'}} >Members</span>
            </div>
            <div >
              <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.signUpButton()} style={{marginRight: '10px'}} >Posts</span>
            </div>
            <div >
              <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.signUpButton()} style={{marginRight: '10px'}} >About</span>
            </div>

          {/* RIGHT SIDE OF NAV BAR */}
          <div className='col'>      
          <div className="row flex-nowrap justify-content-end align-items-center"> 
          {
                this.props.user ? <div >
              <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.signUpButton()} style={{marginRight: '10px'}} >{this.props.user.username} Profile</span>
                </div> : null
          }
            {this.props.user ? null : 
            <div >
              <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.signUpButton()} style={{marginRight: '10px'}} >Sign Up</span>
            </div>
            }
            {this.props.user ?
            <div >
              <span className="btn btn-sm btn-outline-secondary" onClick={()=> this.props.history.push('/ihelp')} style={{marginRight: '10px'}} >iHelp</span>
            </div> : null
            }
            <div>
              <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.lognInLogOutButton()}>
                {this.props.user ? 'Log Out' : 'Log In'}
              </span>
            </div>
          </div>
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
