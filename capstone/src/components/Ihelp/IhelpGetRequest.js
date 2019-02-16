import React, { Component } from 'react'

class IhelpGetRequest extends Component {

  render(){
    
    return (
      <div>
        <div style={{marginTop: '10px'}}>
          <div className="card">
            <div className="card-header">
              <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Describer You Help Request Here</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>  
          </div>
        </div>
      </div>
    )
  }
}


export default IhelpGetRequest
