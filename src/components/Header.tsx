import * as React from "react";

const headerItems = [
  { title: "Home", url: "/" },
  { title: "Books", url: "/books" },
  { title: "Psychology", url: "/psychology" },
  { title: "Personal Growth", url: "/personal-growth" },
  { title: "Personal Finance", url: "/personal-finance" },
];

const Header: React.FC = () => {
  return (
    <header className="max-w-[1200px] mx-auto w-full flex justify-between py-[50px]">
      <div>WTS</div>
      <div className="flex gap-x-4">
        {headerItems.map((item) => (
          <a href={item.url} key={item.title} className="py-[10px] px-5">
            {item.title}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
