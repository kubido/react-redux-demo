import React from 'react'
import './App.css'

// Smart components using class
class Footer extends React.Component{
  render(){
    return (
      <div>
        <div className="footerStyle">{this.props.footerText} </div>
      <button onClick={() => this.props.update() }> Update from footer</button>
      </div>
    )
  }
}


export default  Footer
