import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderLandingAppointment from "../../../components/header/landing/HeaderLandingAppointment";
import FaqClassicThree from "../../../components/faq/FaqClassicThree";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";

const ServiceCloud = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Service Details || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingAppointment />
      {/* End Header */}

      {/* =============================================
            Fancy Hero One
        ==============================================  */}
      <div className="fancy-hero-five">
        <div className="bg-wrapper">
          <div className="container">
            <div className="text-center row">
              <div className="col-xl-9 m-auto">
                <h1 className="heading">Nos services</h1>
                <p className="sub-heading space-xs font-gordita mt-15">
                Nous sommes une entreprise créative qui se concentre sur
                  l'établissement de relations à long terme avec les clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.fancy-hero-five --> */}

      {/* =============================================
            Service Details One
        ==============================================  */}
      <div className="service-details-one pt-150 md-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-last">
              <div className="details-wrapper pl-xl-5">
                <h2 className="font-gordita">
                Meilleur fournisseur de services de télècommunication.
                </h2>
                <p className="sub-heading font-gordita pt-30 pb-70 md-pb-40">
                  Commonly used in the graphic, prit quis due & publishing
                  indust for previewing lightly visual mockups.
                </p>
                <img
                  src="images/gallery/img_01.jpg"
                  alt="gallery"
                  className="img-meta w-100"
                />
                
                
                {/* End .row */}
                <h3 className="font-gordita pt-90 pb-60 md-pt-50">
                  Any Questions find here.
                </h3>
                <FaqClassicThree />
              </div>
              {/* <!-- /.details-wrapper --> */}
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 order-lg-first">
              <div className="sidebar md-mt-100">
                <div className="category-list">
                  <h4 className="font-gordita">Services</h4>
                  <div>
                    <h5>Réseaux & VOIP :</h5>
                  </div>
                  <ul>
                    <li>
                      <a href="/service-trunk" >
                        Trunk SIP
                      </a>
                    </li>
                    <li>
                      <a href="/service-sda" >Numéros SDA</a>
                    </li>
                    <li>
                      <a href="/service-crm" >CRM Cloud</a>
                    </li>
                    <li>
                      <a href="/service-firewall">Firewall</a>
                    </li>
                    <li>
                      <a href="/service-cloud" className="active">Administration des serveurs Cloud</a>
                    </li>
                    <li>
                      <a href="/service-ipbx">IPBX VOIP</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /.category-list --> */}
                <div className="sidenote">
                  <p>
                    Evernote Web offers a complete lineup major linup browser
                  </p>
                  <span>- Rashed ka.</span>
                </div>
                <div className="share-option">
                  <h4 className="font-gordita">Share it. </h4>
                  <ul className="d-flex social-icon">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /.sidebar --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.service-details-one --> */}

      {/* 
      =============================================
            Footer
        ============================================== */}
      <div className="footer-bg-wrapper">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="fancy-short-banner-two">
          <div className="container">
            <div className="content-wrapper">
              <div
                className="
                  bg-wrapper
                  d-lg-flex
                  align-items-center
                  justify-content-between
                "
              >
                <h2 className="font-gilroy-bold">
                  Don’t find the answer? contact us for any query.
                </h2>
                <Link to="/contact-pm"> Contact us</Link>
                <div className="bubble-one"></div>
                <div className="bubble-two"></div>
                <div className="bubble-three"></div>
                <div className="bubble-four"></div>
                <div className="bubble-five"></div>
              </div>
              {/* /.bg-wrapper */}
            </div>
            {/*  /.content-wrapper */}
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-short-banner-two */}

        <footer className="theme-footer-one pt-130 md-pt-70">
          <div className="top-footer">
            <div className="container">
              <Footer />
            </div>
            {/* /.container */}
          </div>
          {/* /.top-footer */}

          <div className="container">
            <div className="bottom-footer-content">
              <CopyRight />
            </div>
            {/*  /.bottom-footer */}
          </div>
        </footer>
        {/* /.theme-footer-one */}
      </div>
    </div>
  );
};

export default ServiceCloud;
