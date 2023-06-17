import { Outlet } from "react-router-dom";
import NavBar from '../../src/components/NavBar/NavBar'
import './Layout.css'

const Layout = () => {
    return (
        <>
        <div className="containerLayaout">
            <NavBar/>
        </div>
        <div className="menuLayaout">
            <Outlet />
        </div>
        </>
    );
};
export default Layout;
