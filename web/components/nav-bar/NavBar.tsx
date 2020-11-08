import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
    const [currentLink, setCurrentLink] = useState("/");
    useEffect(() => {
        setCurrentLink(window.location.pathname);
    }, []);
    return (
        <div className="container">
            <Navbar className="bg-color pt-4 pb-3" expand="lg">
                <Link href="/">
                    <a><Navbar.Brand><img className="navbar-brand" src="/static/img/xreact-logo.png" alt="" style={{ width: 50 }} /></Navbar.Brand></a>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link href="/"><Nav.Link href="/about" className={`nav-link link-hover ${currentLink === "/" ? "link-active" : ""}`}>Blog</Nav.Link></Link>
                        <Link href="/about"><Nav.Link href="/about" className={`nav-link link-hover ${currentLink === "/about" ? "link-active" : ""}`}>About</Nav.Link></Link>
                        <Link href="/login"><Nav.Link href="/login" className={`nav-link link-hover ${currentLink === "/login" ? "link-active" : ""}`}>Login</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;
