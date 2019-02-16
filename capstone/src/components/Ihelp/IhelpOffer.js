import React, { Component } from 'react'
import IhelpOfferQueue from './IhelpOfferQueue'

class IhelpOffer extends Component {

  render(){
    
    return (
      <div style={{margin: '10px'}}>
        <button  type="button"  className="btn btn-primary btn-lg btn-block">Start Offer Help Queue</button>
        <button  type="button" className="btn btn-secondary btn-lg btn-block">Start Organization Help Queue</button>
        <button  type="button" className="btn btn-secondary btn-lg btn-block">Limit Size of Queues</button>
        <button  type="button" className="btn btn-secondary btn-lg btn-block">Stop Accepting New Queues</button>
        <button  type="button" className="btn btn-secondary btn-lg btn-block">Cancel Current Queues</button>
        <IhelpOfferQueue />
      </div>
    )
  }
}


export default IhelpOffer
