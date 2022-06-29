import React from "react";
import { Link } from "react-router-dom";

const CallToActionThree = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="title-style-one">
          <h6 className="font-rubik" style={{ color: "#f96f60" }}>
            Start your free trial.
          </h6>
          <h2>Nouveau ici? Commencez votre essai gratuit maintenant.</h2>
        </div>
        {/* /.title-style-one */}
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <div className="form-wrapper">
          <form onClick={handleSubmit}>
            <input type="text" placeholder="Address e-mail" />
            <button Link="/login">S'abonner</button>
          </form>
          {/* End form */}
          <p className="font-rubik">
          Déjà membre? <Link to="login">S'identifier.</Link>
          </p>
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default CallToActionThree;
