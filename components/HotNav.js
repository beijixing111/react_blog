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
				<div className="hot-section">
					<div className="hot-title"><em>hot</em>热门标签</div>
					<div className="hot-content">
						{HotNav.map((item, idx) => (
							<Link href={`/blog?type=${item.path}`} as={`/blog/${item.path}`}
								key={idx}>
								<a className={this.props.type == item.path ? "show-link active" : 'show-link'}>
									{item.icon != '' ? `<i>${item.icon}</i>` : ''}{item.label}
								</a>
							</Link>
						))}
						<a className="show-link" href="https://www.hao123.com" target="_blank">百度</a>

					</div>
				</div> <
					style jsx="true" > 
					{`
            .hot-section{
              padding: 0px 15px; margin-bottom: 10px; box-shadow: 0 0 5px #ccc;
            }
            .hot-title{
              border-bottom: 1px solid #90bba8; font-weight: 400; padding: 10px 0;
            }
            .hot-title em{
              display: inline-block; padding: 0 5px; height: 16px;
              margin-right: 10px; background: #ff2222; font-weight: normal;
              font-size: 10px; color: #fff; 
            }
            .hot-content{
              padding: 10px 0; 
            }
            .hot-content .show-link{
              padding: 5px 16px; display: inline-block; margin: 0 10px 10px 0;
              border-radius: 2px; background: rgba(1,126,102,.08); color: #017e66;
              text-decoration: none; border-radius: 3px;
            }
            .hot-content .show-link:hover{ 
              background: #017e66; color: #fff;
            }
            .hot-content .show-link.active{
            	background: #017e66; color: #fff;
            }
          `}
				</style>
			</>
		);
	}
}