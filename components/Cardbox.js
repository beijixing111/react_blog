
import React, { Component } from 'react';

export default class  extends Component {
  render() {
    return (
    	<>
	      <div className="card-section">
	        <div className="card-title">{this.props.title}</div>
	        <div className="card-content">
	        	{this.props.children}
	        </div>
	      </div>
	    </>  
    )
  }
}