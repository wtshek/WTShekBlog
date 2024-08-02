import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Intro from "../components/Intro";
import BlogPostItem from "../components/BlogPostItem";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Intro />
      <section className="container flex flex-col items-center">
        <span className="section-header font-crete text-[38px]">
          Recent Posts
        </span>
        <div className="my-20 w-full grid grid-cols-2 gap-20">
          <BlogPostItem />
          <BlogPostItem />
          <BlogPostItem />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

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
