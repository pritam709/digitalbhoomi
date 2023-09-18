import React from "react";
import notFound from "../asset/3814348[1].jpg";
import Card from "./Card";
const NotFound = () => {
  return (
    <Card
      img={notFound}
      title="OOPS!!!"
      msg="This store doesn't exist till now..."
    />
  );
};
export default NotFound;
