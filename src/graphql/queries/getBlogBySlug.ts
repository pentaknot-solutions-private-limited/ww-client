export const GET_BLOG_BY_SLUG = `
  query GetBlogBySlug($url_slug: String!) {
    blogs(filters: { url_slug: { eq: $url_slug } }) {
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
