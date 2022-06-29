import React from "react";
import { Link } from "react-router-dom";

const featuresContent = [
  {
    icon: "184",
    bgColor: "#ECF1FF",
    title: "NUMÉROS INTERNATIONAUX",
    subTitle: `Vente de minutes de communications vers toutes les destinations dans le monde.`,
    dealyAnimation: "200",
  },
  {
    icon: "133",
    bgColor: "#F7EDFF",
    title: "Trunk SIP",
    subTitle: `Offre Trunk SIP.`,
    dealyAnimation: "200",
  },
  {
    icon: "133",
    bgColor: "#FFF8E0",
    title: "Numéros SDA",
    subTitle: `Vente des numéros SDA`,
  dealyAnimation: "200",
},
{
  icon: "132",
  bgColor: "#FFEBDB",
    title: "CRM Cloud",
    subTitle: `Vente/location de licences CRM Cloud `,
    dealyAnimation: "0",
  },
  {
    icon: "133",
    bgColor: "#E0F8F8",
    title: "Firewall",
    subTitle: `Installation et la configuration de Firewall à base de pfsense.`,
    dealyAnimation: "100",
  },
  {
    icon: "133",
    bgColor: "#ECF1FF",
    title: "IPBX VOIP",
    subTitle: `Administration des serveurs Cloud (GoAutodial,asterisk , Elastix /Free PBX )= IPBX VOIP.`,
    dealyAnimation: "200",
  },
];

const FancyFeatureThirtyFive = () => {
  return (
    <>
      {featuresContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dealyAnimation}
          key={i}
        >
          <Link to="/service-details" className="block-style-twentyTwo">
            <div
              style={{ background: val.bgColor }}
              className="icon d-flex align-items-center justify-content-center"
            >
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.subTitle}</p>
          </Link>
          {/* <!-- /.block-style-twentyTwo --> */}
        </div>
      ))}
    </>
  );
};

export default FancyFeatureThirtyFive;
