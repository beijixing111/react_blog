import React, { Component } from 'react';
import Link from 'next/link';

const HotNav = [{
	"icon": "",
	"path": 'react',
	"label": 'React',
}, {
	"icon": "",
	"path": 'antd',
	"label": 'Antd Design/Mobile',
}, {
	"icon": "",
	"path": "vue",
	"label": 'Vue',
}, {
	"icon": "",
	"path": 'angular',
	"label": 'Angular',
}, {
	"icon": "",
	"path": 'nodejs',
	"label": 'Node.js',
}, {
	"icon": "",
	"path": 'koa',
	"label": 'Koa',
}, {
	"icon": "",
	"path": 'js',
	"label": 'JavaScript',
}, {
	"icon": "",
	"path": 'canvas',
	"label": 'Canvas',
}, {
	"icon": "",
	"path": 'css3',
	"label": 'Css3',
}, {
	"icon": "",
	"path": 'nginx',
	"label": 'Nginx'
}, {
	"icon": '',
	"path": 'linux',
	"label": 'Linux'
}];

export default class extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log();
	}

	render() {
		console.log(this.props);
		return (
			<>
				<div className="card-section">
					<div className="card-title"><em>hot</em>热门标签</div>
					<div className="card-content">
						{HotNav.map((item, idx) => (
							<Link href={`/blog?type=${item.path}`} as={`/blog/${item.path}`}
								key={idx}>
								<a className={this.props.type == item.path ? "show-link active" : 'show-link'}>
									{item.icon != '' ? `<i>${item.icon}</i>` : ''}{item.label}
								</a>
							</Link>
						))}
						<a className="show-link" href="https://www.jianshu.com/u/c7583a5ab917" target="_blank">简书</a>

					</div>
				</div>  
			</>
		);
	}
}