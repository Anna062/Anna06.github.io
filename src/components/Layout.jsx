import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Citation from "./Citation";


const Layout = () => {
    return <>
    <Banner />
    <Outlet />
    <Citation />
    <Footer />
    </>
}

export default Layout;