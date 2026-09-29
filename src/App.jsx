import { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';

const {Sider, Header, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider theme='light' trigger={null} collapsible collapsed={collapsed} classNames='sider'>
        <Sidebar/>
      </Sider>
      <Layout>
        <Header></Header>
        <Content></Content>
      </Layout>
    </Layout>
  );
};
export default App;
