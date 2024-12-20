import React from "react";

export default function Work() {
  return (
    <>
      <div className="container mx-auto mt-24 p-20">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-7xl text-gray-700 font-extrabold">01</h1>
            <h1 className="text-6xl text-gray-100 mt-10">Frontend Project</h1>
            <p className="text-sm text-gray-500 mt-6 mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, quasi et vero, commodi aliquam</p>
            <span className="text-[#1bf7a8] text-xl"> Html 5, Css 3, JavaScript</span>
            <div className="border-b border-gray-600 mt-11"></div>
            <div className="mt-5 flex gap-4">
            <i class="text-4xl p-4 text-white bg-[#28272C] rounded-full ri-arrow-right-up-line"></i>
            <i class="text-4xl p-4 text-white bg-[#28272C] rounded-full ri-github-fill"></i>
            </div>
          </div>

          <div>09</div>
        </div>
      </div>
    </>
  );
}
