import React from "react";
import Card from "./index";

const ProductsCard = () => {
  const items = ["Features", "Solutions", "Integrations", "Enterprise", "Solutions"];
  return <Card title="Products" items={items} />;
};

export default ProductsCard;
