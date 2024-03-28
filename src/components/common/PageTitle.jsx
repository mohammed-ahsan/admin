import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {" "}
        {title
          ? ` ${title} | Gigapixel : Point of Sale and E-Commerce Website all in one`
          : "Gigapixel : Point of Sale and E-Commerce Website all in one"}
      </title>
      <meta
        name="description"
        content={
          description
            ? ` ${description} `
            : "Gigapixel : Point of Sale and E-Commerce Website all in one"
        }
      />
    </Helmet>
  );
};

export default PageTitle;
