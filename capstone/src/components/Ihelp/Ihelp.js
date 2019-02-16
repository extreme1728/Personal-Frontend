import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import IhelpGet from './IhelpGet'
import IhelpOffer from './IhelpOffer'

class Ihelp extends Component {

  render(){
    
    return (
      <div className='container'>
        <div className="row justify-content-around">
          <button onClick={()=> this.props.history.push('/ihelp/IhelpGet')}  type="button"  className="btn btn-primary btn-lg col-5">Get Help</button>
          <button onClick={()=> this.props.history.push('/ihelp/IhelpOffer')}  type="button" className="btn btn-secondary btn-lg col-5">Offer Help</button>
        </div>
        <Route path='/ihelp/IhelpGet' component={IhelpGet} />
        <Route path='/ihelp/IhelpOffer' component={IhelpOffer} />
      </div>
    )
  }

}


export default withRouter(connect(null, null)(Ihelp))
