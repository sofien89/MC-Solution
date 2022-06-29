import React from "react";

// Main Preview Pages

import CustomerSupport from "../views/all-home-pages/CustomerSupport";



import Faq from "../views/inner-pages/pages/Faq";
import FaqDetails from "../views/inner-pages/pages/FaqDetails";

// Contact us inner pages
import ContactCustomerSupport from "../views/inner-pages/pages/contact/ContactCustomerSupport";

// About us inner pages
import AboutCustomerSupport from "../views/inner-pages/pages/about/AboutCustomerSupport";
// Pricing inner pages
import PricingCustomerSupport from "../views/inner-pages/pages/pricing/PricingCustomerSupport";
// FEATURES DROPDOWN ALL ROUTES
import Login from "../views/inner-pages/features/miscellaneous/Login";
import SignUp from "../views/inner-pages/features/miscellaneous/SignUp";
import TermsConditions from "../views/inner-pages/features/miscellaneous/TermsConditions";
import SolutionMangement from "../views/inner-pages/features/SolutionMangement";
import ProductCustomerSupport from "../views/inner-pages/features/ProductCustomerSupport";
import FeaturesCustomerSupport from "../views/inner-pages/features/FeaturesCustomerSupport";

// SERVICE PAGES ROUTES
import ServiceSDA from "../views/inner-pages/service/ServiceSDA";
import ServiceCrm from "../views/inner-pages/service/ServiceCrm";
import ServiceCloud from "../views/inner-pages/service/ServiceCloud";
import ServiceIpbx from "../views/inner-pages/service/ServiceIpbx";
import ServiceFirewall from "../views/inner-pages/service/ServiceFirewall";
import ServiceTrunk from "../views/inner-pages/service/ServiceTrunk";
import ServiceV3 from "../views/inner-pages/service/ServiceV3";

// DOCS DROPDOWN ALL ROUTES

// BLOGS DROPDOWN ALL ROUTES
import BlogV2 from "../views/inner-pages/blog-pages/BlogV2";
import BlogDetails from "../views/inner-pages/blog-pages/BlogDetails";

// Not Found Page
import NotFound from "../views/NotFound";

// Route Specific
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

import ProductListPage from "../views/inner-pages/pages/product";
import ProductDetails from "../views/inner-pages/pages/product/ProductDetails";
import Product from "../components/product/[id]";
import Cart from "../views/inner-pages/pages/Cart";
import CheckoutPage from "../views/inner-pages/pages/pricing/CheckoutPage";
import PortfolioV1 from "../views/inner-pages/portfolio/PortfolioV1";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={CustomerSupport} />

          <Route path="/team-4" component={Product} />

          {/* faq inner pages */}
          <Route path="/faq" component={Faq} />
          <Route path="/faq-details" component={FaqDetails} />
          <Route path="/contact" component={ContactCustomerSupport} />

          <Route path="/about-cs" component={AboutCustomerSupport} />

          <Route path="/pricing-cs" component={PricingCustomerSupport} />

          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/solution-management" component={SolutionMangement} />
          <Route
            path="/product-customer-support"
            component={ProductCustomerSupport}
          />
          <Route path="/f" component={FeaturesCustomerSupport} />

          {/* Service inner pages */}
          <Route path="/service-sda" component={ServiceSDA} />
          <Route path="/service-crm" component={ServiceCrm} />
          <Route path="/service-cloud" component={ServiceCloud} />
          <Route path="/service1" component={ServiceV3} />
          <Route path="/service-ipbx" component={ServiceIpbx} />
          <Route path="/service-firewall" component={ServiceFirewall} />
          <Route path="/service-trunk" component={ServiceTrunk} />
          <Route path="/boutique" component={BlogV2} />
         
          <Route path="/service" component={PortfolioV1} />

         
          <Route path="/cart" component={Cart} />
          <Route path="/blog-details" component={BlogDetails} />

          <Route path="/404" component={NotFound} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            path="/:productSlug/:productId/page"
            component={ProductDetails}
          />
          <Route path="/:slug" component={ProductListPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
