import React, { Component } from "react";
import {
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Nav,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./nav.scss";
import Introduce from "./pages/introduce";
import Promotion from "./pages/promotion";
import Trademark from "./pages/trademark";
import Trend from "./pages/trend";
import Makeup from "./category/makeup";
import Skincare from "./category/skincare";
import Body from "./category/body";
import Hair from "./category/hair";
import Perfume from "./category/perfume";
import Others from "./category/others";
import QR from "./img/QR_code.png";

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div className="nav">
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#" className="categoryName">
                            <i class="fas fa-bars"> </i>
                            <div className="hover-category"> 
                                <NavDropdown.Item as={Link} to="/makeup" className="item">TRANG ĐIỂM - MAKEUP</NavDropdown.Item>                            
                                <NavDropdown.Item as={Link} to="/skincare" className="item">CHĂM SÓC DA - SKINCARE</NavDropdown.Item>                         
                                <NavDropdown.Item as={Link} to="/body" className="item">CHĂM SÓC CƠ THỂ - BODY</NavDropdown.Item>                         
                                <NavDropdown.Item as={Link} to="/hair" className="item">CHĂM SÓC TÓC - HAIR</NavDropdown.Item>                
                                <NavDropdown.Item as={Link} to="/perfume" className="item">NƯỚC HOA - PERFUME</NavDropdown.Item>                     
                                <NavDropdown.Item as={Link} to="/others" className="item">SẢN PHẨM KHÁC - OTHERS</NavDropdown.Item>
                                </div> DANH MỤC SẢN PHẨM </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                // className="mr-auto my-2 my-lg-0"
                                className="introduce-Name"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/introduce" className="introduceName">
                                    Giới thiệu
                                </Nav.Link>
                                <Nav.Link as={Link} to="/promotion" className="introduceName">
                                    Khuyến mại
                                </Nav.Link>
                                <Nav.Link as={Link} to="/trademark" className="introduceName">
                                    Thương hiệu
                                </Nav.Link>
                                <Nav.Link as={Link} to="/trend" className="introduceName">
                                    Xu hướng làm đẹp
                                </Nav.Link>
                                <Navbar.Brand href="#" className="introduce-QR">
                                    <i class="fas fa-mobile-alt"> Tải ứng dụng </i> 
                                    <div  className="logo-link" >
                                        <NavDropdown.Item>
                                        <img className="img-QR" src ={QR}  />
                                        </NavDropdown.Item>
                                        </div>
                                    
                                </Navbar.Brand>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                {/* <div>
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
                        <Route path="/makeup">
                            <Makeup />
                        </Route>
                        <Route path="/skincare">
                            <Skincare />
                        </Route>
                        <Route path="/body">
                            <Body />
                        </Route>
                        <Route path="/hair">
                            <Hair />
                        </Route>
                        <Route path="/perfume">
                            <Perfume />
                        </Route>
                        <Route path="/others">
                            <Others />
                        </Route>
                    </Switch>
                </div> */}
            </Router>
        );
    }
}
