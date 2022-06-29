import React from "react";
import { Helmet } from "react-helmet";
import HeroBannerTwo from "../../components/hero-banner/HeroBannerTwo";
import FeatureFour from "../../components/features/FeatureFour";
import CounterThree from "../../components/counter/CounterThree";
import FooterTwo from "../../components/footer/FooterTwo";
import CopyRightTwo from "../../components/footer/CopyRightTwo";
import HeaderLandingAppointment from "../../components/header/landing/HeaderLandingAppointment";

const CustomerSupport = (props) => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Customer Support || MC-SOLUTION</title>
      </Helmet>
      {/* End Page SEO Content */}

      {/* =============================================
		   Start Header
		   ============================================== */}
      <HeaderLandingAppointment />
      {/* End HeaderTwo Variation Three */}

      {/* =============================================
			Hero Banner Two
		  ============================================== */}
      <HeroBannerTwo />
      {/* End HeroBannerTwo */}

      {/* =============================================
				Fancy Feature Four
		  ============================================== */}
      <div className="fancy-feature-four mt-20">
        <div className="bg-wrapper">
          <img
            src="images/shape/18.svg"
            alt="shape"
            className="shapes shape-right"
          />
          <img
            src="images/shape/19.svg"
            alt="shape"
            className="shapes shape-left"
          />
          <div className="container">
            <div className="title-style-two text-center mb-100 md-mb-50">
              <div className="row">
                <div className="col-xl-8 col-lg-9 col-md-10 m-auto">
                  <p>CE QUE NOUS FAISONS</p>
                  <h2>
                    Utilisez MC SOLUTION pour stimuler la croissance de{" "}
                    <br></br>
                    <span>
                      votre entreprise.{" "}
                      <img src="images/shape/line-shape-2.svg" alt="shape" />
                    </span>
                  </h2>
                </div>
                {/* End .col */}
              </div>
            </div>
            {/* End .title */}

            <div className="inner-content">
              <img
                src="images/shape/20.svg"
                alt="shape"
                className="shapes shape-one"
              />
              <img
                src="images/shape/21.svg"
                alt="shape"
                className="shapes shape-two"
              />
              <FeatureFour />
            </div>
            {/* End .inner-content */}
          </div>
        </div>
      </div>

      {/* /.fancy-text-block-six  */}

      <div className="counter-with-icon-one pt-200 md-pt-80">
        <div className="container">
          <CounterThree />
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
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default CustomerSupport;
