import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 mt-30">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="py-6 w-[720px]">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button className="btn bg-[#244D3F] text-white">+ Add a Friend</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
