import Layout from '../components/Layout';
import React,{ Component } from 'react';
import Level from '../components/Level';
import Loading from '../components/Loading';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const adminMangerlist = [{
  id: 1,
  icon: '',
  path: 'articalmanager',
  label: '文章管理'
},{
  id: 2,
  icon: '',
  path: 'typemanager',
  label: '分类管理',
},  {
  id: 3,
  icon: '',
  path: 'friendsLink',
  label: '友情链接'
}, {
  id: 5,
  icon: '',
  path: 'carouselmanager',
  label: '幻灯片管理'
}, {
  id: 4,
  icon: '',
  path: 'personalinfo',
  label: '个人资料'
}];

export default class extends Component{
  static async getInitialProps(ctx) {
    console.log(ctx);
    const { type } = ctx.query;
    console.log(ctx.query.type);
    return {
      path: ctx.pathname,
      nowPath: ctx.query.type
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      levelData: null,
      nowPath: '/'
    };
  }
  componentDidMount() {
    let levelData = Level();
    let nowPath = location.href;
    nowPath = !this.props.nowPath ? nowPath.substr(nowPath.lastIndexOf('/') + 1) : '/';
    this.setState({
      levelData: levelData,
      nowPath
    });
  }
 
  switchContent(type) {
    console.log(type);
    switch(type) {
      case  'typemanager':
        const Typemanager = dynamic(import('../components/AdminCom/Typemanager'));
        return <Typemanager />;
      case 'friendsLink':
        const FriendsLink = dynamic(import('../components/AdminCom/FriendsLink'));
        return <FriendsLink />;
      case 'carouselmanager':
        const Carouselmanager = dynamic(import('../components/AdminCom/Carouselmanager'));
        return <Carouselmanager />;  
      case 'personalinfo':
        const Personalinfo = dynamic(import('../components/AdminCom/Personalinfo'));
        return <Personalinfo />;
      default:
        const Articalmanager = dynamic(import('../components/AdminCom/Articalmanager'));
        return <Articalmanager />;    
    }
  }

  render() {
    if (this.state.levelData == null) {
      return <Loading />;
    }
    var nowPath = !this.props.nowPath ? this.state.nowPath : this.props.nowPath;
    return (
      <Layout levelData={this.state.levelData} isActive={this.props.path}>
        <div className="admin-nav wrapper-item">
          <div className="adminlist">
            <ul>
              {adminMangerlist.map((item) => {
                return (
                  <li key={item.id} className={nowPath == item.path ? 'active' : ''}>
                    <Link href={`/admininfo?type=${item.path}`} as={`/admininfo/${item.path}`} >
                      <a ><i></i>{item.label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="admin-wrapper-content wrapper-item">
          {this.switchContent(nowPath) }
        </div>
        <style jsx="true">
          {`
           .admin-nav{
             position: fixed; left: 0; width: 180px; height: 100%;
             top:0; z-index: 100px; background: #001529;  
             padding: 100px 0 0 0;
           }
            ul,li{
              list-style: none;
            }
            .adminlist ul li{
              cursor: pointer;  
              font-size: 16px; margin: 1px 0;
              height: 60px; line-height: 60px; 
              text-align: left;
            }
            .adminlist ul li a{
              text-decroation: none; color: #fff; display: block;
              padding-left: 20px;
            }
            .adminlist ul li.active{
              background: #017e66; 
            }
            .adminlist ul li.active a{ 
              color: #fff; 
            }
            .adminlist ul li.active i{
              background: #fff;   
            }
            .adminlist ul li i{
              display: inline-block; width: 10px; height: 10px;
              background: green; margin-right: 10px; vertical-align: 2px;
            }
            .admin-wrapper-content{
              padding: 15px 20px; min-height: 800px;
            }
          `}     
        </style>
      </Layout>
    );
  }
}



// Browerll.getInitialProps = async ({req}) => {
//   const unserAgent = req ? req.headers['user-agent'] : navigator.unserAgent
//   return { unserAgent }
// }


