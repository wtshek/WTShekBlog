import * as React from "react";
import { CiCalendar } from "react-icons/ci";

const metadata = {
  title: "The AGI hype train is running out of steam",
  description:
    "Something’s very wrong with the traditional 9 to 5: it doesn’t work.",
  thumbnail: "/02.jpg",
  tags: ["Work", "Lifestyle"],
};

type BlogPostItem = {
  id: string | number;
  excerpt: string;
  title: string;
  thumbnail: { src: string };
  slug: string;
  tags: string;
};

const BlogPostItem: React.FC<{ data: BlogPostItem }> = ({ data }) => {
  const tags = data.tags.split(",");
  return (
    <div>
      <div>
        <img
          src={data.thumbnail.src}
          alt="blog-post-1"
          width={296}
          height={152}
          className="w-full rounded-lg"
        />
        <div>
          <div className="flex items-center lg:my-4 my-6">
            <span>
              <CiCalendar />
            </span>
            <span className="ml-2">Dec 5, 2021</span>
          </div>
          <h3 className="fonts-crete text-[28px] lg:text-[24px] mb-4">
            {data.title}
          </h3>
          <div>{data.excerpt}</div>
        </div>
      </div>
      <div className="flex gap-[.5rem] mt-10">
        {tags.map((tag) => (
          <div key={tag} className="tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostItem;
