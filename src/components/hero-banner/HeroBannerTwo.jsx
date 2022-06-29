import React from "react";
import { Link } from "react-router-dom";

const HeroBannerTwo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="hero-banner-two">
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="col-lg-6 order-lg-last">
            <div className="illustration-holder">
              <img
                src="images/assets/ils-01.png"
                alt="shape"
                className="illustration_01"
              />
              <img
                src="images/assets/ils-01.1.png"
                alt="shape"
                className="shapes shape-one"
              />
              <img
                src="images/assets/ils-01.2.png"
                alt="shape"
                className="shapes shape-two"
              />
              <img
                src="images/assets/ils-01.3.png"
                alt="shape"
                className="shapes shape-three"
              />
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 order-lg-first">
            <div className="hero-text-wrapper md-mt-50">
              <h1>
                <span>
                  Meilleure solution de
                  <img
                    src="images/shape/line-shape-1.svg"
                    alt="shape"
                    className="cs-screen"
                  />
                </span>
                conseil digital et de Télécom.
              </h1>
              <p className="sub-text">
                Vous bénéficierez d’un plan d’action sur mesure selon vos
                besoins qui vous permettra une exploitation optimale de votre
                parc téléphonique.
              </p>

              <form onClick={handleSubmit}>
                <input type="email" placeholder="Enter your email" />
                <Link to="/signup" className="signup-btn">
                  <button>S'abonner</button>
                </Link>
              </form>
              <ul className="list-item d-flex mt-20">
                <li>Chat en direct</li>
                <li>14 jours d'essai gratuit</li>
              </ul>
            </div>
            {/* /.hero-text-wrapper */}
          </div>
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}

      <div className="mt-65 md-mt-50 trusted-companies">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <p>
                Over <span>13,000+ Client</span> all over the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerTwo;
