import React from "react";
import { Link } from "react-router-dom";

const featuresContent = [
  {
    icon: "133",
    bgColor: "#ECF1FF",
    title: "CRÉATION GRAPHIQUE",
    subTitle: `Nous créons votre charte graphique pour le web et les supports en papier tels que les logos, les cartes de visites, les flyers, les animations vidéo.`,
    dealyAnimation: "200",
  },
  {
    icon: "133",
    bgColor: "#F7EDFF",
    title: "SITES WEB & E-SHOPS",
    subTitle: `Nous inventons votre site web ou votre boutique en ligne pour vous assurer une présence sur internet et promouvoir vos produits et services.`,
    dealyAnimation: "200",
  },
  {
    icon: "133",
    bgColor: "#FFF8E0",
    title: "RÉSEAUX SOCIAUX",
    subTitle: `Nous œuvrons à améliorer votre notoriété grâce aux médias sociaux. Nos communautés managers feront tout pour attirer de nouveaux fans à votre marque et répondre aux demandes de vos clients.`,
  dealyAnimation: "200",
}
];

const FancyFeatureThirtyFive1 = () => {
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

export default FancyFeatureThirtyFive1;
