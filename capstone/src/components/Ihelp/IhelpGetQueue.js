import React, { Component } from 'react'
import IhelpGetQueueMiniProfile from './IhelpGetQueueMiniProfile'

class IhelpGetQueue extends Component {

  render(){
    
    return (
      <div>
        <div style={{marginTop: '10px'}}>
          <div className="card">
            <div className="card-header">
            Helpers availables and search filter methods. 
            <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
            <button type="button" className="btn btn-primary">General Queue</button>
            </div>
            <div className="card-body">
            <IhelpGetQueueMiniProfile />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default IhelpGetQueue
