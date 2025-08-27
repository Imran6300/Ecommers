import { useEffect } from "react";
import Css from "./NavBar.module.css";
import { IoCartOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector(`.${Css.nav}`);

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        navbar.style.top = "-80px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`p-3 ${Css.nav}`}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img
              src="./ecommerslogo.png"
              alt="Logo"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
              className="me-2"
            />
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className={`nav-link px-3 ${Css.navlink}`}>
                Home
              </a>
            </li>
            <li>
              <div className={Css.dropdown}>
                <button className={Css.dropbtn}>Men</button>
                <FaAngleDown />
                <div className={Css.dropdowncontent}>
                  <a href="#">T-Shirts</a>
                  <a href="#">Shirts</a>
                  <a href="#">Jeans</a>
                  <a href="#">Jackets</a>
                  <a href="#">Shoes</a>
                </div>
              </div>
            </li>
            <li>
              <div className={Css.dropdown}>
                <button className={Css.dropbtn}>Women</button>
                <FaAngleDown />
                <div className={Css.dropdowncontent}>
                  <a href="#">Tops</a>
                  <a href="#">Dresses</a>
                  <a href="#">Sarees</a>
                  <a href="#">Jeans & Pants</a>
                  <a href="#">Footwear</a>
                </div>
              </div>
            </li>
            <li>
              <div className={Css.dropdown}>
                <button className={Css.dropbtn}>Kids</button>
                <FaAngleDown />
                <div className={Css.dropdowncontent}>
                  <a href="#">Boys Clothing</a>
                  <a href="#">Girls Clothing</a>
                  <a href="#">Accessories</a>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className={`nav-link px-3 ${Css.navlink}`}>
                New Arrivals
              </a>
            </li>
          </ul>
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className={`form-control ${Css.navsearch}`}
              placeholder="Search Product."
              aria-label="Search"
            />
          </form>
          <div className="text-end">
            <button type="button" className={`btn ${Css.navbtn}`}>
              Sign-up
            </button>
            <button type="button" className={`btn mx-2 ${Css.navbtn}`}>
              Login
            </button>
            <button type="button" className={`btn ${Css.navcart}`}>
              <IoCartOutline />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
