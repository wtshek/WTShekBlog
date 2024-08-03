import * as React from "react";
import { IoIosMenu } from "react-icons/io";

const headerItems = [
  { title: "Home", url: "/" },
  { title: "Books", url: "/books" },
  { title: "Psychology", url: "/psychology" },
  { title: "Personal Growth", url: "/personal-growth" },
  { title: "Personal Finance", url: "/personal-finance" },
];

const Header: React.FC = () => {
  const drawer = React.useRef<HTMLDivElement>(null);
  const isDrawerOpen = React.useRef(false);

  const onMenuIconClick = () => {
    if (!drawer.current) return;
    if (!isDrawerOpen.current) {
      console.log(drawer);
      drawer.current.style.transform = "scaleX(1)";
      isDrawerOpen.current = true;
      return;
    }
    drawer.current.style.transform = "scaleX(0)";
    isDrawerOpen.current = false;
  };

  return (
    <>
      <header className="container w-full flex justify-between items-center py-[50px]">
        <div className="font-bold font-crete text-[32px]">WTShek</div>
        <div className="gap-x-4 hidden lg:flex">
          {headerItems.map((item) => (
            <a
              href={item.url}
              key={item.title}
              className="py-[10px] px-5 hover:underline"
            >
              {item.title}
            </a>
          ))}
        </div>
        <IoIosMenu
          className="fixed right-0 bottom-20 lg:hidden w-10 h-10 bg-white p-2 rounded-lg"
          width={50}
          height={50}
          onClick={onMenuIconClick}
        />
      </header>
      <div
        ref={drawer}
        className="fixed right-0 flex flex-col top-1/2 bg-white z-10 rounded-lg p-4 gap-y-4 w-1/2 scale-x-0 transition-transform ease-linear lg:hidden"
      >
        {headerItems.map((item) => (
          <a className="hover:underline" href={item.url}>
            {item.title}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
