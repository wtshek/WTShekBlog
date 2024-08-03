import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Intro from "../components/Intro";
import BlogPostItem from "../components/BlogPostItem";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({data}) => {
  return (
    <Layout>
      <Intro />
      <section className="container flex flex-col items-center">
        <span className="section-header font-crete text-[36px] lg:text-[38px]">
          Recent Posts
        </span>
        <div className="my-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
          {data.allMdx.edges.map(({node})=>{ 
            const {frontmatter, id, excerpt} = node
            const data = {id, excerpt, ...frontmatter, thumbnail: frontmatter?.thumbnail?.childImageSharp?.fluid}
            return (
            <BlogPostItem data={data}/>
          )})}
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query BlogPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter {
            title
            date
            slug
            tags
            thumbnail {
              childImageSharp{
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Crete+Round:ital@0;1&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    ></link>
  </>
);
