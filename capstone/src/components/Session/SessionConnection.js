import React, { Component } from 'react'
import SessionConnectionProfiles from './SessionConnectionProfiles'
class SessionConnection extends Component {

  render(){
    
    return (
      <div>
        <div style={{marginTop: '10px', marginBottom: '10px'}}>
          <div className="card">
            <div className="card-header">
              <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Request Description</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
                <SessionConnectionProfiles />
            </div>  
          </div>
        </div>
      </div>
    )
  }
}


export default SessionConnection

