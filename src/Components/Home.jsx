import React from "react";

export default function Home() {
  return (
    <section className="text-gray-600 body-font mt-10">
      <div className="container mx-auto flex px-1 py-8 md:flex-row flex-col items-stretch">
        <div className="lg:flex-grow md:w-1/2 lg:pr-32 lg:p-10 md:pr-16  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap- ">
          <span className="text-gray-300">Public Speaker</span>
          <h1 className="title-font sm:text-4xl lg:text-6xl mb-4 font-semibold text-white lg:leading-snug">
            Hello I'm
            <br className="hidden lg:inline-block " />
            <span className="text-[#1BF7A8]"> Bikesh k.c.</span>
          </h1>
          <p className="mb-24 leading-relaxed mt-6  text-gray-400">
            Join me in Bellow Social media and Lets Grow Together
          </p>
          <div className="flex justify-center items-center gap-8">
            <button className="relative inline-flex text-[#1BF7A8] border border-[#1BF7A8] py-2 px-6 focus:outline-none rounded-3xl text-lg gap-6 group overflow-hidden">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-out">
                Download CV
              </span>
              <i className="ri-download-2-line relative z-10 group-hover:text-black transition-colors duration-500 ease-out"></i>
              <div className="absolute inset-0 bg-[#1BF7A8] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </button>

            <div className="socialmedia flex gap-9">
              <i class="border-2 p-1 border-green-300 rounded-full text-green-400 ri-github-fill"></i>
              <i class="border-2 p-1 border-green-300 rounded-full text-green-400 ri-linkedin-line"></i>
              <i class="border-2 p-1 border-green-300 rounded-full text-green-400 ri-youtube-fill"></i>
              <i class="border-2 p-1 border-green-300 rounded-full text-green-400 ri-facebook-circle-fill"></i>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center">
          <img
            className="object-cover object-center rounded h-full w-full"
            alt="hero" 
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-7 pl-4">
        <div className=" flex justify-center items-center gap-4"><span className="text-white  font-bold  text-6xl">4</span> <p className="text-gray-400">Years of <br /> Experience</p></div>
        <div className=" flex justify-center items-center gap-4"><span className="text-white font-bold  text-6xl">2</span> <p className="text-gray-400">Project <br /> Completed</p></div>
        <div className=" flex justify-center items-center gap-4"><span className="text-white font-bold  text-6xl">5</span> <p className="text-gray-400">Technology <br /> Mastered</p></div>
        <div className=" flex justify-center items-center gap-4"><span className="text-white font-bold  text-6xl">300</span> <p className="text-gray-400">code<br /> Commit</p></div>
      </div>
    </section>
  );
}
