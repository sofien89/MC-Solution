import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, updateCart } from "./actions";

function App () {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate, dispatch]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    dispatch(updateCart());
  }, [auth.authenticate, dispatch])

  return (
    <>
      <Helmet>
        <title>MC-SOLUTION</title>
        <meta property="og:site_name" content="deski" />
        <meta
          property="og:url"
          content="https://themeforest.net/user/ib-themes"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="voip"
        />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, clean, corporate, creative, fullpage, minimal, modern, multipurpose, parallax, personal, photography, portfolio, showcase, Digital marketing agency, Digital marketing company, Digital marketing services, sass, software company"
        />
        <meta
          name="description"
          content="Deski is a creative saas and software React template designed for saas and software Agency websites."
        />
        <meta name="description" content="Portfolio & Agency React Template" />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      <Routes />
    </>
  );
}

export default App;
