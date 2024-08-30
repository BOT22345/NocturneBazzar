// import react from 'react'
import "./Navbar.css";
import logoIcon from "../Assets/logoIcon.png";
import shopCart from "../Assets/cartIcon.jpg";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logoIcon} alt="not working" className="logoIcon"></img>
          <p>Nocturne Bazzar</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Shop
            </Link>
            {menu === "shop" ? <hr></hr> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Men");
            }}
          >
            <Link to="/mens" style={{ textDecoration: "none", color: "white" }}>
              {" "}
              Men
            </Link>
            {menu === "Men" ? <hr></hr> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Women");
            }}
          >
            <Link
              to="womens"
              style={{ textDecoration: "none", color: "white" }}
            >
              Women
            </Link>{" "}
            {menu === "Women" ? <hr></hr> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Shop");
            }}
          >
            <Link to="/kids" style={{ textDecoration: "none", color: "white" }}>
              Kids
            </Link>{" "}
            {menu === "Shop" ? <hr></hr> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem("auth-token") ? 
                (
            <button class="btn" type="button" onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}>
              <strong>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/"
                >
                  Logout
                </Link>
              </strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </button>
            
          ) : (
            <button class="btn" type="button">
              <strong>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  Login
                </Link>
              </strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </button>
          )}
          {/* <button><Link style={{textDecoration:'none', color:'white'}} to="/login">Login</Link></button> */}

          <Link to="/cart">
            <img src={shopCart} alt="not working" className="shopCart"></img>
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
