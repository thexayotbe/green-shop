import React from "react";
import data from "../../utils/MOCK_DATA";
const HomeShopSection = () => {
  return <div>{data.map((value) => console.log(value.family))}</div>;
};

export default HomeShopSection;
