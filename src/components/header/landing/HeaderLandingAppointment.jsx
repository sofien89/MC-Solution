import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../../actions";

const HeaderLandingAppointment = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };
  useEffect(() => {}, [auth.authenticate]);

  const rederNonLoggedInMenu = () => {
    return (
      <div className="right-widget order-lg-3">
        <ul className="d-flex align-items-center">
          <li>
            <Link
              to="/login"
              className="signIn-action d-flex align-items-center"
            >
              {/* <img src="images/icon/120.svg" alt="icon" /> */}
              <span>Login</span>
            </Link>
          </li>
          <li>
            <Link to="/signup" className="signup-btn">
              <span>Sign up</span>
            </Link>
            <div></div>
          </li>
          <div>
            <a href="/cart" className="cart">
              <IoIosCart />
              <span style={{ margin: "0 10px" }}>Cart</span>
            </a>
          </div>
        </ul>
      </div>
    );
  };

  const renderLoggedInMenu = () => {
    return (
      <div className="right-widget order-lg-3">
        <ul className="d-flex align-items-center">
          <div>
            <a href="/">{auth.user.fullName}</a>
          </div>
          <div>
            <a href="/cart" className="cart">
              <IoIosCart />
              <span style={{ margin: "0 10px" }}>Cart</span>
            </a>
          </div>
          <div>
            <li>
              <Link to="/" className="signup-btn" onClick={logout}>
                Signout
              </Link>
            </li>
          </div>
        </ul>
      </div>
    );
  };

  const changeBackground = () => {
    if (window.scrollY >= 0) {
      setNavbar(true);
    } else {
      setNavbar(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-six bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-six bg-none"
        }
      >
        <div className="d-flex align-items-center">
          <div className="logo">
            <Link to="/">
              <img src="images/logo/deski_05.svg" alt="brand" />
            </Link>
          </div>
          {/* End logo */}
          {auth.authenticate ? renderLoggedInMenu() : rederNonLoggedInMenu()}
          {/* End .right-widget */}

          <nav
            id="mega-menu-holder"
            className="navbar navbar-expand-lg ml-lg-auto order-lg-2"
          >
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={["Acceuil", "Service", "Contact"]}
                    currentClassName="active"
                    offset={-90}
                  >
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Accueil
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/service" className="nav-link">
                        Services
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/pricing-cs" className="nav-link">
                        Offre
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/boutique" className="nav-link">
                        Boutique
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/contact" className="nav-link">
                        Contact
                      </a>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link to="/">
            <img src="images/logo/deski_05.svg" alt="brand" />
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className="navbar-nav"
          id="theme-menu-list"
          items={["feature", "service", "feedback"]}
          currentClassName="active"
          offset={-90}
        >
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={handleClick}>
              Acceuil
            </a>
          </li>
          <li className="nav-item">
            <a href="/service" className="nav-link" onClick={handleClick}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="/pricing-cs" className="nav-link" onClick={handleClick}>
              Offres
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/service-details"
              className="nav-link"
              onClick={handleClick}
            >
              Boutique
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link" onClick={handleClick}>
              Contact
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* Mobile Menu End */}
    </>
  );
};

export default HeaderLandingAppointment;
