import { GetStaticPaths, GetStaticProps } from "next";
import { gql } from "@apollo/client";
import client from "../../src/lib/apollo-client";
import { BlocksRenderer } from "../../src/components/block-renderer";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

interface Blog {
  id: string;
  title: string;
  content: string;
  imageUrl?: string | null;
}

interface BlogPageProps {
  blog: Blog | null;
}

const BlogPage = ({ blog }: BlogPageProps) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  if (!blog) return <p>Blog not found.</p>;

  return (
    <section className="section-about-us blog-detail-page">
      <Container maxWidth="lg">
        <h1 className="section-title">{blog.title}</h1>
        {blog.imageUrl && (
          <div className="blog-image-wrapper">
            <img src={blog.imageUrl} alt={blog.title} />
          </div>
        )}
        <BlocksRenderer content={blog.content as any} />
      </Container>
    </section>
  );
};

// GraphQL query to fetch all slugs
const GET_ALL_SLUGS = gql`
  query GetAllSlugs {
    blogs {
      data {
        attributes {
          url_slug
        }
      }
    }
  }
`;

// GraphQL query to fetch a blog by slug
const GET_BLOG_BY_SLUG = gql`
  query GetBlogBySlug($url_slug: String!) {
    blogs(filters: { url_slug: { eq: $url_slug } }) {
      data {
        id
        attributes {
          title
          content
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

// Pre-render all blog pages based on slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_ALL_SLUGS });

  const paths = data.blogs.data.map((blog: any) => ({
    params: { url_slug: blog.attributes.url_slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

// Fetch blog data for a specific slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { url_slug } = params as { url_slug: string };

  const { data } = await client.query({
    query: GET_BLOG_BY_SLUG,
    variables: { url_slug },
  });

  const blogData = data.blogs.data[0];
  if (!blogData) {
    return { notFound: true };
  }

  const blog: Blog = {
    id: blogData.id,
    title: blogData.attributes.title,
    content: blogData.attributes.content,
    imageUrl: blogData.attributes.image?.data
      ? `${blogData.attributes.image.data.attributes.url}`
      : null,
  };

  return {
    props: { blog },
    revalidate: 10,
  };
};

export default BlogPage;
