import React from "react";
import { Link } from "react-router-dom";


const MegaMenu = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#">
          Acceuil
        </a>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Services
        </a>
        
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Produit
        </a>

        
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Pricing
        </a>
        
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      
      {/* End li */}

      <li className="nav-item">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
        Contact us
        </a>
      
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}
    </ul>
  );
  // End navbar nav mega menu main
};

export default MegaMenu;
