import React, { Component } from 'react'
import SessionConnection from './SessionConnection'

class Session extends Component {
  constructor(props){
    super(props)
    this.state = {
      ExpandSessionView: false
    }
  }

  toggleSessionView = () => {
    this.setState({ExpandSessionView: !this.state.ExpandSessionView})
  }

  render(){
    return (
    <div className='container'>
      <div className="row justify-content-around" style={{marginBottom: '10px'}}>
        <button  className="btn btn-primary btn-lg col-3">Pause Session</button>
        <button  className="btn btn-primary btn-lg col-3">Session Timer 00:00</button>
        <button  className="btn btn-secondary btn-lg col-3">End Session</button>
        <button  onClick={()=> this.toggleSessionView()} className="btn btn-secondary btn-lg col-1">Expand</button>
      </div>
      <div >{ this.state.ExpandSessionView ? <SessionConnection/> : null }
      </div>
    </div>
    )
  }
}



  export default Session



