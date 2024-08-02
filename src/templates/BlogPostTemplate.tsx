import React, { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { components, MainContent } from "../components/mdx-components";
import { CiCalendar } from "react-icons/ci";

const BlogPostTemplate: FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children,
}) => {
  return (
    <Layout>
      <div className="container py-24">
        <MainContent>
          <h1 className="h1">{data.mdx?.frontmatter?.title}</h1>
          <span className="text-sm font-thin flex gap-x-2 items-center my-6">
            <CiCalendar /> {data.mdx?.frontmatter?.date}
          </span>
          <MDXProvider components={components}>{children}</MDXProvider>
        </MainContent>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

// TODO: add tag
export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
      }
    }
  }
`;
