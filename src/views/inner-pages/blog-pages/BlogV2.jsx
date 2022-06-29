import React from "react";
import { Helmet } from "react-helmet";
import BlogStyle2 from "../../../components/blog/BlogStyle2";
import BlogSidebar from "../../../components/blog/BlogSidebar";
import HeaderLandingAppointment from "../../../components/header/landing/HeaderLandingAppointment";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";

const BlogV2 = (props) => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Blog V2 || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}
      <HeaderLandingAppointment {...props}/>
      {/* End Header */}

      {/* 	=============================================
            Fancy Hero One
        ==============================================  */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto">
              <h2 className="font-rubik">Découvrez notre entreprise</h2>
            </div>
            <div className="col-lg-9 m-auto">
              <p className="font-rubik">
              Vous trouverez ici les actualités de notre société et les dernières mises à jour
              </p>
            </div>
          </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* /.fancy-hero-one */}

      {/* =====================================================
            Feature Blog One
        ===================================================== */}
      <div className="blog-page-bg">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 feature-blog-one width-lg">
              <BlogStyle2 />
              {/* /.page-pagination-one */}
            </div>
            {/* End .col */}
            <div className="col-lg-4 col-md-6">
              <BlogSidebar {...props}/>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.feature-blog-one */}

      <footer className="theme-footer-one pt-130 md-pt-70">
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

export default BlogV2;
