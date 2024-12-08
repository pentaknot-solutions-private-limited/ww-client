import React, { useState, useEffect } from "react";
import Image from "next/image";
import CarImage from "../../public/no-image.png";
import { Grid } from "@mui/material";
import SiteButton from "./Button";
import { useRouter } from "next/router";
import { currencyFormatter } from "../utils/currecyFormatter";
import { Blog } from "../graphql/queries/getBlogs";

export default function BlogCards(
  blog: Blog & {
    setLoading: any;
  }
) {
  // Variables
  const router = useRouter();

  // Functions
  const handleClick = () => {
    router.push({
      pathname: `/blogs/${blog?.url_slug}`,
    });
    blog?.setLoading(true);
  };

  // Effects

  return (
    <div onClick={handleClick} className="cars-cards">
      <Image
        src={blog?.image?.url!}
        width={435}
        height={270}
        alt="blog-image"
      />
      <div className="content">
        <h4>{blog?.title}</h4>
      </div>
    </div>
  );
}
