import React from "react";

const PricingContent = [
  {
    packName: "SDA FRANÇAIS",
    price: "70.00TND",
    preFeatures: [
      "Zone géographique 01, 02, 03, 04, 05et 09",
      "Canaux sur demande",
      "Qualité premium",
      "CLI libre",
    ],
  },
  {
    packName: "CRM Saas",
    price: "170.00TND",
    preFeatures: [
      "2 vCore(s) – 3,5 GHz – 4 Go de RAM 50 Go HDD",
      "Support Technique 7/7",
      "Backup Journalier",
      "Sans Engagements"
    ],
  },
  {
    packName: "ELASTIX CLOUD",
    price: "170.00TND",
    preFeatures: [
      "Backup Journalier",
      "Sans Engagement",
      "Solution Voice2Mail",
      "Extensions SIP et IAX",
      "Enregistrement des appels",
    ],
  },
  {
    packName: "FUSIONPBX CLOUD",
    price: "170.00TND",
    preFeatures: [
      "Extensions SIP",
      "Backup Journalier",
      "Sans Engagement",
      "Support technique 7J/7",
      "Enregistrement des appels",
    ],
  },
];

const PricingMonthly = () => {
  return (
    <div className="row no-gutters">
      {PricingContent.map((val, i) => (
        <div className="col-lg-3 col-sm-6 pr-bg d-flex" key={i}>
          <div className="pr-table-wrapper">
            <div className="pack-name">{val.packName}</div>
            <div className="price">
              <sup>$</sup>
              {val.price}
            </div>
            <div className="bill-cycle">{val.billCycle}</div>
            <a href="#" className="theme-btn-three">
              Acheter
            </a>
            <ul className="pr-feature">
              {val.preFeatures.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          </div>
          {/* /.pr-table-wrapper  */}
        </div>
      ))}
    </div>
  );
};

export default PricingMonthly;
