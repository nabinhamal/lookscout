import React from "react";
import Card from "./index";

const ResourcesCard = () => {
  const items = ["Partners", "Community", "Developers", "App", "Blog"];
  return <Card title="Resources" items={items} />;
};

export default ResourcesCard;
