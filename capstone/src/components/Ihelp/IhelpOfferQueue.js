import React, { Component } from 'react'
import IhelpOfferQueueMiniProfile from './IhelpOfferQueueMiniProfile'

class IhelpOfferQueue extends Component {

  render(){
    
    return (
      <div style={{marginTop: '10px'}}>
        <div className="card">
          <div className="card-header">
          Students remaining in you Q#
          </div>
          <div className="card-body">
            
          <IhelpOfferQueueMiniProfile />

          </div>
        </div>
      </div>
    )
  }
}


export default IhelpOfferQueue
