import React, { Component } from 'react'
import IhelpGetRequest from './IhelpGetRequest'
import IhelpGetQueue from './IhelpGetQueue'


class IhelpGet extends Component {

  render(){
    
    return (
      <div>        
        <IhelpGetRequest />
        <IhelpGetQueue />
      </div>
    )
  }
}


export default IhelpGet
