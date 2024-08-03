import * as React from "react";

// TODO: add social media
const socialMedia = [];

const Intro = () => {
  return (
    <section className="container flex flex-col items-center lg:flex-row  my-[120px]">
      <img src="/avatar.webp" alt="avatar" width={173} className="lg:w-[250px]"/>
      <div className="text-center mt-10 lg:mt-0 lg:text-left lg:ml-[120px]">
        <div className="mb-2 lg:mb-4">Hello, I'm</div>
        <h1 className="mb-4 text-[42px] lg:text-[64px] font-crete">Wing Tung Shek</h1>
        <div>
          A writer based in Toronto, Canada. I am interested in psychology,
          finance and growth hack.
        </div>
        <div className="mt-auto"></div>
      </div>
    </section>
  );
};

export default Intro;
