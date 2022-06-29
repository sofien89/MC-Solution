import React from "react";
import { Helmet } from "react-helmet";
import HeaderLandingAppointment from "../../../../components/header/landing/HeaderLandingAppointment";
import CopyRightTwo from "../../../../components/footer/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import Pricing from "../../../../components/pricing/pricing-one/Pricing";
import CallToActionThree from "../../../../components/call-to-action/CallToActionThree";

const PricingCustomerSupport = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Pricing||MC SOLUTION</title>
      </Helmet>

      <HeaderLandingAppointment />
      {/* End Header */}

      <div className="pricing-section-two pricing-section-two-custom">
        <div className="fancy-hero-four">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <div className="shapes shape-five"></div>
          <div className="shapes shape-six"></div>
          <div className="bg-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xl-10 col-lg-11 m-auto">
                  <h2>PACK CENTRE D'APPELS</h2>
                </div>
                <div className="col-12 m-auto">
                  <p className="font-rubik sub-heading">
                    5 minute installation · Try Team plan features for 14 days ·
                    No credit card required
                  </p>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </div>
          {/*  /.bg-wrapper */}
        </div>
        {/* /.fancy-hero-four */}

        <div className="container">
          <div className="pricing-table-area">
            <div className="tab-content">
              <Pricing />
            </div>
            <img
              src="images/shape/64.svg"
              alt="shape"
              className="shapes shape-one"
            />
            <img
              src="images/shape/65.svg"
              alt="shape"
              className="shapes shape-two"
            />
          </div>
          {/*  /.pricing-table-area  */}
        </div>
      </div>
      <footer className="theme-footer-two pt-150 md-pt-80">
        <div className="top-footer">
          <div className="container">
            <FooterTwo />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRightTwo />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingCustomerSupport;
