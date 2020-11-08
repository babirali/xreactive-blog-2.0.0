import NavBar from "./nav-bar/NavBar";
import SideBar from "./side-bar/SideBar";
import Footer from "./footer/Footer";

import "../components/nav-bar/NavBar.css";
import "../components/post/post.css";
import "../components/side-bar/SideBar.css";
import "../components/pagination/Pagination.css";

const Layout = (props) => {
    return (
        <div className="app">
            <NavBar />
            <div className="container min-vh-100" style={{ paddingBottom: "30px" }}>
                <div className="row m-0">
                    <div className="col-md-9">
                        {props.children}
                    </div>
                    <SideBar />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
