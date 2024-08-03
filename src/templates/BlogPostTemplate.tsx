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
  const { title, date, tags } = data.mdx?.frontmatter || {};

  return (
    <Layout>
      <div className="container py-24">
        <MainContent className="!w-full lg:!w-4/5">
          <h1 className="h1">{title}</h1>
          <div className="flex gap-x-4 items-center my-3 lg:my-6">
            <span className="text-sm font-thin flex gap-x-2 items-center">
              <CiCalendar /> {date}
            </span>
            {tags?.split(",")?.map((tag) => (
              <div className="tag">{tag}</div>
            ))}
          </div>
          <MDXProvider components={components}>{children}</MDXProvider>
        </MainContent>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;
