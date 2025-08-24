import Css from "./NavBar.module.css";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <header className={`p-3 ${Css.nav}`}>
      {" "}
      <div className="container">
        {" "}
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {" "}
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {" "}
            <li>
              <a href="#" className={`nav-link px-3 ${Css.navlink}`}>
                Home
              </a>
            </li>{" "}
            <li>
              <a href="#" className={`nav-link px-3 ${Css.navlink}`}>
                Features
              </a>
            </li>{" "}
            <li>
              <a href="#" className={`nav-link px-3 ${Css.navlink}`}>
                Pricing
              </a>
            </li>{" "}
            <li>
              <a href="#" className={`nav-link px-3 ${Css.navlink}`}>
                FAQs
              </a>
            </li>{" "}
            <li>
              <a href="#" className={`nav-link px-3 ${Css.navlink}`}>
                About
              </a>
            </li>{" "}
          </ul>{" "}
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            {" "}
            <input
              type="search"
              className={`form-control ${Css.navsearch}`}
              placeholder="Search Product."
              aria-label="Search"
            />{" "}
          </form>{" "}
          <div className="text-end">
            {" "}
            <button
              type="button"
              className={`btn ${Css.navbtn}`}
              onClick={() => console.log("Button Was Clicked")}
            >
              Sign-up
            </button>{" "}
            <button
              type="button"
              className={`btn mx-2 ${Css.navbtn}`}
              onClick={() => console.log("Button Was Clicked")}
            >
              Login
            </button>{" "}
            <button
              type="button"
              className={`btn ${Css.navcart}`}
              onClick={() => console.log("Button Was Clicked")}
            >
              <IoCartOutline />
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};

export default NavBar;
