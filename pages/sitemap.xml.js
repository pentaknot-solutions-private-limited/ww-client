import { CarService } from "../src/services/cars/carService";
import { BlogResponse, GET_BLOGS } from "../src/graphql/queries/getBlogs";
import { fetchGraphQL } from "../src/lib/apollo-client";

//pages/sitemap.xml.js
const SITE_URL = "https://wishwheels.com";

function generateSiteMap(carData, blogs) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${SITE_URL}</loc>
     </url>
     <url>
       <loc>${SITE_URL}/about-us</loc>
     </url>
     <url>
       <loc>${SITE_URL}/contact-us</loc>
     </url>
     <url>
       <loc>${SITE_URL}/faq</loc>
     </url>
     <url>
       <loc>${SITE_URL}/car-collection</loc>
     </url>
     <url>
       <loc>${SITE_URL}/sell-car</loc>
     </url>
     <url>
       <loc>${SITE_URL}/history</loc>
     </url>

     ${carData
       .map(({ _id }) => {
         return `
       <url>
           <loc>${`${SITE_URL}/car-detail?carId=${_id}`}</loc>
       </url>
     `;
       })
       .join("")}

        ${blogs
          .map(({ url_slug }) => {
            return `
       <url>
           <loc>${`${SITE_URL}/blogs/${url_slug}`}</loc>
       </url>
     `;
          })
          .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const _carService = new CarService();
  const allCarsList = _carService.getAllCollection();
  const blogData = await fetchGraphQL({
    query: GET_BLOGS,
  });
  const blogs = blogData.blogs.data.map((blog) => ({
    id: blog.id,
    title: blog.attributes.title,
    url_slug: blog.attributes.url_slug,
    image: blog.attributes.image?.data
      ? { url: blog.attributes.image.data.attributes.url }
      : null,
    content: blog.attributes.content,
  }));

  const request = await allCarsList;
  const carData = await request.data.data;

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(carData, blogs);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
