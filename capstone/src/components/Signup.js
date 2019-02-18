import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setAuthentication } from '../actions/authentication'
import request from '../utils/request'
import '../styles/login.css'

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      showErrorMessage: false
    }
  }

  handleSignIn = event => {
    event.preventDefault()
    const { inputEmail, inputPassword } = event.target
    request('/users','post', {
      username: inputEmail.value,
      password: inputPassword.value })
    .then(response => {
      return request('/auth/token', 'post', {
        username: inputEmail.value,
        password: inputPassword.value })
    })   
    .then(response => {
      localStorage.setItem('token', response.data.token)
      return request('/auth/token')
    })
    .then(response => {
      this.props.setAuthentication(response.data)
      this.props.history.push('/')
    })
    .catch(error => { 
      this.props.setAuthentication(null)
      this.setState({showErrorMessage: true, showSuccessMessage: false })
    })
  }
  

  render(){
    console.log(this.props)
    return (
      <div className="Signup">
        <form onSubmit={this.handleSignIn} className="login-form">
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
          </div>

          <div className="form-label-group">
          <p>
            <input type="text" name="FirstName" id="FirstName" className="form-control" placeholder="First Name" required autoFocus />
            </p>
          </div>

          <div className="form-label-group">
          <p>
            <input type="text" name="LastName" id="LastName" className="form-control" placeholder="Last Name" required autoFocus />
            </p>
          </div>

          <div className="form-label-group">
          <p>
            <input type="text" name="inputEmail" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
            </p>
          </div>

          <div className="form-label-group">
          <p>
            <input type="password" name="inputPassword" id="inputPassword" className="form-control" placeholder="Password" required />
            </p>
          </div>

          <div className="form-label-group">
            <input type="text" name="ConfirmPassword" id="ConfirmPassword" className="form-control" placeholder="ConfirmPassword" required autoFocus />
          </div>
          <div className={ !this.state.showErrorMessage ? 'login-auth-error login-hide-auth-error' : 'login-auth-error' }>
            Invalid Username or Password
          </div>
          <button className="btn btn-lg btn-primary btn-block" onClick={()=> this.props.history.push('/Profile')} type="submit">Sign Up</button>
        </form>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps,)(Signup)
