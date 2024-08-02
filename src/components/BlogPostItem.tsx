import * as React from "react";
import { CiCalendar } from "react-icons/ci";

const metadata = {
  title: "The AGI hype train is running out of steam",
  description:
    "Something’s very wrong with the traditional 9 to 5: it doesn’t work.",
  thumbnail: "/02.jpg",
  tags: ["Work", "Lifestyle"],
};

const BlogPostItem: React.FC = () => {
  return (
    <div>
      <div>
        <img
          src={metadata.thumbnail}
          alt="blog-post-1"
          width={296}
          height={152}
          className="w-full rounded-lg"
        />
        <div>
          <div className="flex items-center mt-4">
            <span>
              <CiCalendar />
            </span>
            <span className="ml-2">Dec 5, 2021</span>
          </div>
          <h3 className="fonts-crete text-[24px] mb-4">{metadata.title}</h3>
          <div>{metadata.description}</div>
        </div>
      </div>
      <div className="flex gap-[.5rem] mt-10">
        {metadata.tags.map((tag) => (
          <div
            key={tag}
            className="py-[6px] px-[10px] bg-pink rounded-bg text-sm"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostItem;
