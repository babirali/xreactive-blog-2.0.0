import NavBar from "./nav-bar/NavBar";
import SideBar from "./side-bar/SideBar";

import '../components/nav-bar/NavBar.css'
import "../components/post/post.css"
import "../components/side-bar/SideBar.css"

const Layout = (props) => {
    return (
        <div className="app">
            <NavBar />
            <div className="container min-vh-100" style={{ paddingBottom: "30px" }}>
                <div className="row">
                    <div className="col-md-9">
                        {props.children}
                    </div>
                    <SideBar />
                </div>
            </div>
        </div>
    );
}

export default Layout;