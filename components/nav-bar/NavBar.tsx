import React from "react";
import "./NavBar.css";
import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap';
const NavBar = () => {
    return (
        <div className="container">
            <Navbar className="bg-color pt-4 pb-3" expand="lg">
                <Link href="/">
                    <a><Navbar.Brand><img className="navbar-brand" src="/static/img/xreact-logo.png" alt="" style={{ width: 50 }} /></Navbar.Brand></a>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link href="/"><Nav.Link href="/about" className={`nav-link link-hover ${"/" === "/" ? "link-active" : ""}`}>Blog</Nav.Link></Link>
                        <Link href="/login"><Nav.Link href="/about">About</Nav.Link></Link>
                        <Link href="/login"><Nav.Link href="/login">Login</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;
