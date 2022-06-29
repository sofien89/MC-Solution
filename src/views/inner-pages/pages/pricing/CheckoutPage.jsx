import React from "react";
import CopyRightTwo from "../../../../components/footer/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import Layout from "../../../../components/Layout";
import AddressForm from "./AddressForm";

const CheckoutPage = () => {
  return (
    <Layout>
      <div className="main-page-wrapper p0">
        <div className="fancy-hero-three">
          <div className="bg-wrapper">
            <div className="text-center row">
              <div className="col-xl-9 m-auto">
                <AddressForm />
                <footer className="theme-footer-two pt-150 md-pt-80">
                  <div className="top-footer">
                    <div className="container">
                      <FooterTwo />
                    </div>
                  </div>
                  <div className="container">
                    <div className="bottom-footer-content">
                      <CopyRightTwo />
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
