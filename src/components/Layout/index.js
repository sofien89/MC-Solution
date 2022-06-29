import React from "react";
import { Helmet } from "react-helmet";
import HeaderLandingAppointment from "../header/landing/HeaderLandingAppointment";

const Layout = (props) => {
  return (
    <>
      <div className="main-page-wrapper">
        <Helmet>
          <title>
            MC-SOLUTION
          </title>
        </Helmet>
        <HeaderLandingAppointment />
        {props.children}
        
      </div>
    </>
  );
};

export default Layout;
