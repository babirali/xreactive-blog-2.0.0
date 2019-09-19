import React from "react";
import "./NavBar.css";
import Link from 'next/link'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-color pt-5 pb-3">
                <div className="container">
                    <Link href="/">
                        <a><img className="navbar-brand" src="/static/img/xreact-logo.png" alt="" style={{ width: 50 }} /></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars" style={{ color: "#35bdb2" }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <Link href="/"><a className={`nav-link link-hover ${"/" === "/" ? "link-active" : ""}`}>Blog</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about"><a >About</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/login"><a>Login</a></Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default NavBar;
