import React, { useState, useEffect } from "react";
import profile from "../assets/profile/profile.png";

export default function Home() {
  const counters = [
    { label: "Years of Experience", value: 4 },
    { label: "Project Completed", value: 2 },
    { label: "Technology Mastered", value: 5 },
    { label: "Code Commits", value: 300 }
  ];

  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    technologies: 0,
    commits: 0
  });

  const countUp = (target, key) => {
    let count = 0;
    const increment = target / 100; // Adjust the speed here (smaller is faster)
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        clearInterval(interval);
        setCounts((prevState) => ({
          ...prevState,
          [key]: target
        }));
      } else {
        setCounts((prevState) => ({
          ...prevState,
          [key]: Math.floor(count)
        }));
      }
    }, 10);
  };

  useEffect(() => {
    countUp(counters[0].value, 'experience');
    countUp(counters[1].value, 'projects');
    countUp(counters[2].value, 'technologies');
    countUp(counters[3].value, 'commits');
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font mt-10">
        <div className="container mx-auto flex px-1 py-8 md:flex-row flex-col items-stretch">
          <div className="lg:flex-grow md:w-1/2 lg:pr-32 lg:p-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-">
            <span className="text-gray-300">Public Speaker</span>
            <h1 className="title-font sm:text-4xl lg:text-6xl mb-4 font-semibold text-white lg:leading-snug">
              Hello I'm
              <br className="hidden lg:inline-block" />
              <span className="text-[#1BF7A8]"> Bikesh k.c.</span>
            </h1>
            <p className="mb-24 leading-relaxed mt-6 text-gray-400">
              Join me in Below Social media and Let's Grow Together
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
                <i className="border-2 p-1 border-green-300 rounded-full text-green-400 ri-github-fill"></i>
                <i className="border-2 p-1 border-green-300 rounded-full text-green-400 ri-linkedin-line"></i>
                <i className="border-2 p-1 border-green-300 rounded-full text-green-400 ri-youtube-fill"></i>
                <i className="border-2 p-1 border-green-300 rounded-full text-green-400 ri-facebook-circle-fill"></i>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center">
            <div className="">
              <img
                className="object-cover profile-img border-2   border-dashed border-[#1BF7A8] object-center p-6 rounded-full"
                alt="hero"
                src={profile}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto flex justify-between items-center mt-20 pl-4">
          <div className="flex justify-center items-center gap-4">
            <span className="text-white font-bold text-6xl">+{counts.experience}</span>
            <p className="text-gray-400">Years of <br /> Experience</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <span className="text-white font-bold text-6xl">{counts.projects}</span>
            <p className="text-gray-400">Project <br /> Completed</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <span className="text-white font-bold text-6xl">{counts.technologies}</span>
            <p className="text-gray-400">Technology <br /> Mastered</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <span className="text-white font-bold text-6xl">{counts.commits}</span>
            <p className="text-gray-400">Code <br /> Commits</p>
          </div>
        </div>
      </section>
    </>
  );
}
