import { GetStaticPaths, GetStaticProps } from "next";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import LoadingContext from "../../src/context/LoadingContext";
import { useContext, useEffect, useState } from "react";
import { fetchGraphQL } from "../../src/lib/apollo-client";
import { BlocksRenderer } from "../../src/components/block-renderer";

interface Blog {
  id: string;
  title: string;
  content: string;
  imageUrl?: string | null;
}

interface BlogPageProps {
  blog: Blog | null;
}

const BlogPage = () => {
  const { siteLoading, setSiteLoading } = useContext(LoadingContext);
  const [blog, setBlog] = useState<Blog | null>(null);
  const router = useRouter();
  const { url_slug } = router.query;

  const getBlogBySlug = async () => {
    try {
      setSiteLoading(true);
      const decodedUrlSlug = decodeURIComponent(url_slug as string);
      const data = await fetchGraphQL<any>({
        query: GET_BLOG_BY_SLUG,
        variables: { url_slug: decodedUrlSlug },
      });

      const blogData = data.blogs.data[0];
      const blog: Blog = {
        id: blogData.id,
        title: blogData.attributes.title,
        content: blogData.attributes.content,
        imageUrl: blogData.attributes.image?.data
          ? `${blogData.attributes.image.data.attributes.url}`
          : null,
      };
      setBlog(blog);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setSiteLoading(false);
    }
  };

  useEffect(() => {
    getBlogBySlug();
  }, [url_slug]);

  if (!blog) return <p>Blog not found.</p>;

  return (
    <section className="blog-detail-page">
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
const GET_ALL_SLUGS = `
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
const GET_BLOG_BY_SLUG = `
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

export default BlogPage;
