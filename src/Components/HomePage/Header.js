import React, {
  useState,
  Component
} from "react";
import "./Header.scss";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import 'font-awesome/css/font-awesome.min.css';
import './fontawesome-web-5.15.3/css/all.min.css';
import Nav from "./nav";


const Header =() => {
  
    // const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);
    return (
        <div>
            <div className = "header-container" >
      <div className = "content-product" >
        <a href = "/"
        className = "header__logo-link" >
        <img className = "custom-logo"src = "https://annashop.vn/wp-content/uploads/2021/02/logo-anna1.png"class = "custom-logo"alt = "Mỹ phẩm Anna Shop"srcset = "https://annashop.vn/wp-content/uploads/2021/02/logo-anna1.png 905w, https://annashop.vn/wp-content/uploads/2021/02/logo-anna1-800x194.png 800w, https://annashop.vn/wp-content/uploads/2021/02/logo-anna1-768x186.png 768w, https://annashop.vn/wp-content/uploads/2021/02/logo-anna1-600x145.png 600w"sizes = "(max-width: 100px) 100vw, 200px" /></a>  </div> 
        < div className = "header-content" > 
        <div className = "header-content-nav1" >
        <a href = ""className = "header-content-phone" >
        <i class = "fas fa-phone-square-alt" > </i> 
        <b > 0988880999 </b>  </a > </div> 
        <marquee className = "header-content-nav2" >Anna Cosmetics - Hệ thống mỹ phẩm thương hiệu chính hãng - Top 1 Việt Nam </marquee> 
        <div className = "header-content-nav3" >
        <div className = "container-language" >
        <a href = "" > VN </a>|<a href="">EN</a >
        </div> 
        <div className = "container-login" >
          <a href = "" > <i class = "far fa-question-circle" > Hỗ trợ </i> </a >
        </div> </div> </div> 
        <div className = "header-content-1" >
        <div className = "content-search" >
        <InputGroup className = "mb-3" >
        <FormControl placeholder = "Search product"
        aria-label = "Recipient's username"
        aria-describedby = "basic-addon2"
        className = "search" />
        <Button variant = "outline-secondary"
        id = "button-addon2" >Search </Button> </InputGroup > </div> 
        <div className = "content-cart" >
        <a href = ""className = "content-iconcart" >
        <i className = "fas fa-cart-plus" > </i> </a >

        <a href = ""className = "content-iconcart" >
        <i class="fas fa-bell"></i> </a >
        
        <a href = ""className = "content-iconcart" >
        <i class="fas fa-envelope"></i> </a >
        
        <a href = ""className = "content-iconcart" >
        <i class="fas fa-user-circle"></i> </a >
        
        </div> </div > </div>
        <Nav/>
        </div>
    )
}

export default Header
