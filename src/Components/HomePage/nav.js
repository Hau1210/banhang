import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './nav.scss';
import Introduce from "./pages/introduce";
import Promotion from "./pages/promotion";
import Trademark from "./pages/trademark";
import Trend from "./pages/trend";


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="light" expand="lg" >
                        <Navbar.Brand href="#" className="categoryName"> <i class="fas fa-bars"></i> DANH MỤC SẢN PHẨM</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                // className="mr-auto my-2 my-lg-0"
                                className="introduceName"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/introduce" className="introduceName">Giới thiệu</Nav.Link>
                                <Nav.Link as={Link} to="/promotion" className="introduceName">Khuyến mại</Nav.Link>
                                <Nav.Link as={Link} to="/trademark" className="introduceName">Thương hiệu</Nav.Link>
                                <Nav.Link as={Link} to="/trend" className="introduceName">Xu hướng làm đẹp</Nav.Link>
                                <Nav.Link as={Link} to="/" className="introduce-Name"><i class="fas fa-mobile-alt"></i> Tải ứng dụng</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/introduce">
                            <Introduce />
                        </Route>
                        <Route path="/promotion">
                            <Promotion />
                        </Route>
                        <Route path="/trademark">
                            <Trademark />
                        </Route>
                        <Route path="/trend">
                            <Trend />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}