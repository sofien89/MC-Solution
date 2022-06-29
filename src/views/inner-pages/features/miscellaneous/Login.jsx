import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import LoginForm from "../../../../components/contact/form/LoginForm";

const Login = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Login || MC-SOLUTION</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="user-data-page clearfix d-lg-flex">
        <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
          <h3 className="font-rubik">
            Want your best managment <br />
            software? <Link to="/signup">sign up</Link>
          </h3>
          <div className="illustration-holder">
            <img
              src="images/assets/ils_08.svg"
              alt="illustration"
              className="illustration"
            />
            <img
              src="images/assets/ils_08.1.svg"
              alt="illustration"
              className="shapes shape-one"
            />
            <img
              src="images/assets/ils_08.2.svg"
              alt="illustration"
              className="shapes shape-two"
            />
          </div>
        </div>
        {/* /.illustration-wrapper */}

        <div className="form-wrapper">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/">
                <img src="images/logo/deski_05.svg" alt="logo" />
              </Link>
            </div>
            <Link className="font-rubik go-back-button" to="/">
              Go to home
            </Link>
          </div>
          <div className="mt-80 md-mt-40">
            <h2>
              Bienvenue de retour !<br /> 
            </h2>
            <p className="header-info pt-30 pb-50">
              Vous n'avez pas de compte? <Link to="/signup">S'inscrire</Link>
            </p>
          </div>

          <LoginForm />
          {/* Login Form End */}
          <p className="text-center font-rubik copyright-text">
            Copyright @{new Date().getFullYear()}{" "}
            <a href="/" target="_blank" title="myFrame" rel="noreferrer">
              mc-sol
            </a>{" "}
            inc.
          </p>
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* /.user-data-page */}
    </div>
  );
};

export default Login;
