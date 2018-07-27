import React from 'react';
import { connect } from 'react-redux';
import { addCount } from '../../redux/text.redux';
import { Button, Layout, Menu, Icon } from 'antd';
import { Route, Switch} from 'react-router-dom';
import AddPost from '../../components/add-post/addPost';
import PostList from '../../components/post-list/postList';

import './home.css';

const { Header, Sider, Content } = Layout;
const { SubMenu, Item } = Menu;

@connect(state => state, { addCount })
class Home extends React.Component {
  constructor() {
    super();
    this.state={
      isLogin: true
    };
  }
  handleSubChange(e) {
    console.log(e);
    if(e.key==='1') {
      this.props.history.push('/addpost');
    }else if(e.key === '2') {
      this.props.history.push('/postlist');
    }
  }
  render() {
    console.log(this.props);
    const login = (
      <div className="user-login">
        <span className="login">
          欢迎，<span className="username">相思雨gg</span>
        </span>
        <span className="logout"> &nbsp;登出</span>
      </div>
    );
    const noLogin = (
      <div className="user-nologin">
        <span className="logout">登陆</span>
      </div>
    );
    return (
      <div>
        <Layout>
          <Header>
            <div className="logo">相思雨博客</div>
            <div className="header-right">
              {
                this.state.isLogin ? login : noLogin
              }
            </div>
          </Header>
          <Layout>
            <Sider theme="light" >
              <Menu theme="light" mode="inline" onClick={this.handleSubChange.bind(this)}>
                <SubMenu key="sub1" title={<span><Icon type="mail" />文章管理</span>}>
                  <Item key="1"><Icon type="mail" />发表文章</Item>
                  <Item key="2"><Icon type="mail" />文章列表</Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content>
              <Switch>
                <Route path="/postlist" component={PostList} />
                <Route path="/addpost" component={AddPost} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Home;