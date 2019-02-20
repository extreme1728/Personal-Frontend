import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAuthentication } from '../actions/authentication';

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
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      <header id="home" className="blog-header py-3">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Messages</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Members</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
               <div className='col'>      
          <div className="row flex-nowrap justify-content-end align-items-center"> 
          {
                this.props.user ? <div >
              <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.signUpButton()} style={{marginRight: '10px'}} >{this.props.user.username} Profile</span>
                </div> : null
          }
            {
            <div >
              <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.signUpButton()} style={{marginRight: '10px'}} >Sign Up</span>
            </div>
            }
            {this.props.user ? null : 
            <div >
              <span className="btn btn-sm btn-outline-secondary" onClick={()=> this.props.history.push('/ihelp')} style={{marginRight: '10px'}} >iHelp</span>
            </div> 
            }
            <div>
              <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.lognInLogOutButton()}>
                {this.props.user ? 'Log Out' : 'Log In'}
              </span>
            </div>
          </div>
          </div>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Welcome To {resumeData.name}.</h1>
               <h3>This platform will choose you to {resumeData.role}. {resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {/*
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  */}
               </ul>
            </div>
         </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

         
      </header>
    </React.Fragment>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
