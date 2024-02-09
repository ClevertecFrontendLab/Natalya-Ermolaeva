import { Outlet } from 'react-router-dom';
import Sider from '@components/Sider/Sider.jsx';
import Header from '@components/Header/Header';
import Content from '@components/Main/Content';
import Footer from '@components/Footer/Footer/Footer';

const Root = () => (
    <>
        <Sider />
        <Header />
        <Content>
            <Outlet />
        </Content>
        <Footer />
    </>
);

export default Root;
