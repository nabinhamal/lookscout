import React from "react";
import Card from "./index";

const CompanyCard = () => {
  const items = ["About Us", "News", "Leadership", "Media Kit"];
  return <Card title="Company" items={items} />;
};

export default CompanyCard;
