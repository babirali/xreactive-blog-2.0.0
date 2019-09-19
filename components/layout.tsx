import { Component } from "react";
import NavBar from "./nav-bar/NavBar";
import SideBar from "./side-bar/SideBar";

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