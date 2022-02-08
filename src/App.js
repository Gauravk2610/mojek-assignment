import './App.less';
import './App.css';
import { Layout } from 'antd';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import BottomFooter from './components/BottomFooter';
import { useSelector } from 'react-redux';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  const theme = useSelector((state) => state.theme.mode)
  console.log(theme);
  return (
    <Layout className={`main ${theme === 'dark' && 'dark'}`}>
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
