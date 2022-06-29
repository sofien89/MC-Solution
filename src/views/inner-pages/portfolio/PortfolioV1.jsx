import React from "react";
import { Helmet } from "react-helmet";
import PortfolioTwo from "../../../components/portfolio/PortfolioTwo";
import FooterSeven from "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";
import HeaderLandingAppointment from "../../../components/header/landing/HeaderLandingAppointment";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRight from "../../../components/footer/CopyRight";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";

const PortfolioV1 = () => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>
          Boutique
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingAppointment />
      {/* End Header */}

      {/* =============================================
         Fancy Hero Six
        ==============================================  */}
      <div className="fancy-hero-six">
        <div className="container">
          <h1 className="heading">Nos Services</h1>
          
        </div>
      </div>
      
      <div className="fancy-portfolio-two lg-container">
        <div className="container">
          <div className="top-border bottom-border pb-130 md-pb-90">
            <PortfolioTwo />
          </div>
        </div>
      </div>
      {/* /.fancy-portfolio-two */}

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container inner-btn-black">
            <FooterTwo />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightTwo />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default PortfolioV1;
