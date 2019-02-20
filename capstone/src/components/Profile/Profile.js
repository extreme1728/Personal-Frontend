import React, { Component } from 'react'
import About from '../about';
import Resume from '../resume';
import Portfolio from '../portfolio';
import Testimonials from  '../testimonials';
import ContactUs from '../contactus';
import resumeData from '../resumeData';

class Profile extends Component {

  render(){
    
    return (
      <div className="App">
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
      </div>
    )
  }
}


export default Profile
