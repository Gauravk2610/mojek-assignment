import './App.less';
import './App.css';
import { Layout } from 'antd';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import BottomFooter from './components/BottomFooter';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Layout>
      <Header>
        {/* <NavMenu /> */}
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer style={{ backgroundColor: 'white' }}>
        <BottomFooter />
      </Footer>
    </Layout>
  );
}

export default App;
