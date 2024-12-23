import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { Container, Grid, styled } from "@mui/material";
import {
  Blog,
  BlogResponse,
  GET_BLOGS,
} from "../../src/graphql/queries/getBlogs";
import BlogCards from "../../src/components/blogCards";
import { useRouter } from "next/router";
import LoadingComponent from "../../src/components/loading/LoadingComponent";
import LoadingContext from "../../src/context/LoadingContext";
import { fetchGraphQL } from "../../src/lib/apollo-client";

interface BlogsPageProps {
  blogs: Blog[];
}
const StyledGrid = styled(Grid)`
  @media (max-width: 576px) {
    justify-content: center !important;
  }
`;

export default function Blogs({ blogs }: BlogsPageProps) {
  const { siteLoading, setSiteLoading } = useContext(LoadingContext);
  useEffect(() => {
    setSiteLoading(false);
  }, []);

  return (
    <section className="faq-section">
      <Head>
        <title>Wish Wheels | Blogs</title>
      </Head>
      <Container maxWidth="lg">
        <h3 className="faq-section-title mb-24">Blogs</h3>
        <div className="blog-lists">
          <StyledGrid container rowSpacing={3} spacing={2}>
            {blogs &&
              blogs.map((blog, index: number) => (
                <Grid key={index} item sm={6} md={4}>
                  <BlogCards {...blog} setLoading={setSiteLoading} />
                </Grid>
              ))}
          </StyledGrid>
        </div>
      </Container>
    </section>
  );
}

export async function getStaticProps() {
  const data = await fetchGraphQL<BlogResponse>({
    query: GET_BLOGS,
  });

  const blogs: Blog[] = data.blogs.data.map((blog) => ({
    id: blog.id,
    title: blog.attributes.title,
    url_slug: blog.attributes.url_slug,
    image: blog.attributes.image?.data
      ? { url: blog.attributes.image.data.attributes.url }
      : null,
    content: blog.attributes.content,
  }));

  return {
    props: {
      blogs,
    },
  };
}
