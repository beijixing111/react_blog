
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class extends Component {
	constructor(props) {
		super(props);
		
		this.body = document.querySelector('body');
		this.el = document.createElement('div');
	}

	componentDidMount() {
		this.body.appendChild(this.el);
	}
	
	componentWillUnmount() {
		this.body.removeChild(this.el);
	}
	render() {
		return ReactDOM.createPortal(
			this.props.children,
			this.el
		);
	}
}