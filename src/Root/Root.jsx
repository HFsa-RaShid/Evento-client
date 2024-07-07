import { Outlet } from "react-router-dom";
import Nav from "../components/Shared/Nav";
import Footer from "../components/Shared/Footer";




const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;