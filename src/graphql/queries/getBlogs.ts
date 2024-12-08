import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query GetBlogs {
    blogs {
      data {
        id
        attributes {
          title
          url_slug
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
          content
        }
      }
    }
  }
`;

export interface Blog {
  id: string;
  title: string;
  url_slug: string;
  image: {
    url: string;
  } | null;
  content: string;
}

export interface BlogResponse {
  blogs: {
    data: {
      id: string;
      attributes: {
        title: string;
        url_slug: string;
        image?: {
          data?: {
            attributes: {
              url: string;
            };
          };
        };
        content: string;
      };
    }[];
  };
}
