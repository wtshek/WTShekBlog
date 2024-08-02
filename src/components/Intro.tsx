import * as React from "react";

// TODO: add social media
const socialMedia = [];

const Intro = () => {
  return (
    <section className="container flex my-[120px]">
      <img src="/avatar.webp" alt="avatar" width={250} />
      <div className="ml-[120px]">
        <div className="mb-4">Hello, I'm</div>
        <h1 className="mb-4 text-[64px] font-crete">Wing Tung Shek</h1>
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
