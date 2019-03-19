
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Level from '../components/Level';

export default class extends Component {
	static async getInitialProps(ctx) {
		const { id } = ctx.query;
		const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
		const show = await res.json();
		return { show };
	}
	constructor(props) {
		super(props);
		this.state = {
			levelData: null
		};
	}
	componentDidMount() {
		let levelData = Level();
		this.setState({
			levelData: levelData
		});
	}

	render() {
		if (this.state.levelData == null) {
			return <Loading />;
		}
		const contentText = this.props.show.summary.replace(/<[/]?p>/g, '');
		return (
			<Layout levelData={this.state.levelData} isActive="/">
				<h1>{this.props.show.name}</h1>
				<p dangerouslySetInnerHTML={{__html: contentText}} />
				{this.props.show.image && !!this.props.show.image.medium ? <img src={this.props.show.image.medium} alt="" /> : ''}
			</Layout>
		);
	}
}


