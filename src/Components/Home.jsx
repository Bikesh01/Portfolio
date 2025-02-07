import React, { useState, useEffect } from "react";
import profile from "../assets/profile/profile.png";
import gallery from "../assets/gallery/7.jpeg";
import aibootcamp from "../assets/expericence_image/aibootcamp.jpg";

export default function Home() {
  const counters = [
    { label: "Years of Experience", value: 4 },
    { label: "Project Completed", value: 2 },
    { label: "Technology Mastered", value: 5 },
    { label: "Code Commits", value: 300 },
  ];

  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    technologies: 0,
    commits: 0,
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
          [key]: target,
        }));
      } else {
        setCounts((prevState) => ({
          ...prevState,
          [key]: Math.floor(count),
        }));
      }
    }, 10);
  };

  useEffect(() => {
    countUp(counters[0].value, "experience");
    countUp(counters[1].value, "projects");
    countUp(counters[2].value, "technologies");
    countUp(counters[3].value, "commits");
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font mt-10">
        <div className="container mx-auto flex px-1 py-8 md:flex-row flex-col items-stretch">
          <div className="lg:flex-grow md:w-1/2 lg:pr-32 lg:p-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <span className="text-gray-300">Public Speaker</span>
            <h1 className="title-font sm:text-4xl lg:text-6xl mb-4 font-semibold text-white lg:leading-snug">
              Hello I'm
              <br className="hidden lg:inline-block" />
              <span className="text-[#1BF7A8]"> Bikesh k.c.</span>
            </h1>
            <p className="mb-24 leading-relaxed mt-6 text-gray-400">
              Join me in Below Social media and Let's Grow Together
            </p>
            <div className="lg:flex lg:justify-center lg:items-center gap-8 ">
              <button className="relative inline-flex text-[#1BF7A8] border border-[#1BF7A8] py-2 px-6 focus:outline-none rounded-3xl text-lg gap-6 group overflow-hidden">
                <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-out">
                  Download CV
                </span>
                <i className="ri-download-2-line relative z-10 group-hover:text-black transition-colors duration-500 ease-out"></i>
                <div className="absolute inset-0 bg-[#1BF7A8] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              </button>

              <div className="socialmedia flex gap-9 mm:mt-10 lg:mt-0">
                <a
                  href="https://github.com/Bikesh01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 p-1 border-green-300 rounded-full text-green-400"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <i className="border-2 p-1 border-green-300 rounded-full text-green-400 ri-linkedin-line"></i>
                <i className="border-2 p-1 border-green-300 rounded-full text-green-400 ri-youtube-fill"></i>
                <a
                  href="https://www.facebook.com/bikesh.kc.90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 p-1 border-green-300 rounded-full text-green-400"
                >
                  <i className="ri-facebook-circle-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center">
            <div className="imgani ">
              <img
                className="object-cover profile-img border-2   border-dashed border-[#1BF7A8] object-center p-6 rounded-full"
                alt="hero"
                src={profile}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 mm:grid-cols-1   gap-4  mt-20 pl-4   ">
          <div className="flex justify-center items-center gap-4">
            <span className="text-white font-bold text-6xl">
              +{counts.experience}
            </span>
            <p className="text-gray-400">
              Years of <br /> Experience
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <span className="text-white font-bold text-6xl">
              {counts.projects}
            </span>
            <p className="text-gray-400">
              Project <br /> Completed
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <span className="text-white font-bold text-6xl">
              {counts.technologies}
            </span>
            <p className="text-gray-400">
              Technology <br /> Mastered
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <span className="text-white font-bold text-6xl">
              {counts.commits}
            </span>
            <p className="text-gray-400">
              Code <br /> Commits
            </p>
          </div>
        </div>

        <div className="container mx-auto  gap-4  mt-32 pl-4 ">
          <h1 className="text-4xl mb-8 text-[#1BF7A8] text-center">
            What I learned In College
          </h1>

          <div className="grid grid-cols-2 gap-9 p-24">
            <div className=" flex justify-center items-center">
              <img className="rounded-3xl" src={gallery} alt="" srcset="" />
            </div>
            <div className="">
              <h1 className="text-3xl text-[#1BF7A8]">Godawari College</h1>
              <h2 className="text-xl mt-4 mb-8 text-gray-300">
                Itahari-9, Sunsari, Nepal
              </h2>
              <ul className="flex flex-col gap-7 text-sm text-gray-500">
                <li>
                  <strong className="text-[#1BF7A8]">
                    Comprehensive Coursework:
                  </strong>{" "}
                  Gained a strong foundation in Computer Science and Information
                  Technology, including programming, data structures, and
                  algorithms.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">
                    Software Development:
                  </strong>{" "}
                  Learned modern software development methodologies and
                  implemented practical projects using Javascript, vite + react and web
                  technologies.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">
                    Database Management:
                  </strong>{" "}
                  Acquired expertise in designing, managing, and optimizing
                  relational databases using MySQL.
                </li>

                <li>
                  <strong className="text-[#1BF7A8]">Networking:</strong> Gained
                  practical knowledge of computer networks, protocols, and
                  configurations.
                </li>

                <li>
                  <strong className="text-[#1BF7A8]">Web Development:</strong>{" "}
                  Built dynamic and responsive websites, mastering HTML, CSS,
                  JavaScript.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">Research Skills:</strong>{" "}
                  Conducted in-depth academic research and presented findings on
                  emerging IT topics and technologies.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">
                    Practical Projects:
                  </strong>{" "}
                  Developed several individual and group projects, focusing on
                  real-world applications of IT concepts.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">Internships:</strong>{" "}
                  Completed internships and practical training to enhance
                  industry exposure and gain hands-on experience.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">
                    Event Participation:
                  </strong>{" "}
                  Actively participated in college events, seminars, and
                  hackathons to enhance teamwork and problem-solving skills.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">
                    Leadership & Teamwork:
                  </strong>{" "}
                  Demonstrated leadership by managing group projects and
                  collaborating effectively with peers.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto  gap-4  mt-8 pl-4  ">
          <h1 className="text-4xl mb-14 text-[#1BF7A8] text-center">
            {" "}
            Praticipated in Hacathons
          </h1>

          <div className="grid grid-cols-2 gap-9 p-24">
            <div className="">
              <h1 className="text-3xl text-[#1BF7A8]">
                Purwanchal Engineering Campus(ERC)
              </h1>
              <h2 className="text-xl mt-4 mb-8 text-gray-300">
                Gangalal Marg Tinkune, Dharan 56700
              </h2>
              <ul className="flex flex-col gap-7 text-sm text-gray-500 ">
                <li>
                  <strong className="text-[#1BF7A8]">
                    Hackathon Participation:
                  </strong>{" "}
                  Participated in Hackathon 5.0 organized by Purwanchal
                  Engineering Campus.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">Challenge Theme:</strong>{" "}
                  Tasked with building a website, app, or solution to assist
                  physically disabled individuals within 3 days.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">Project Focus:</strong>{" "}
                  Developed a fundraising website aimed at supporting
                  initiatives for physically disabled people.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">
                    Role and Contribution:
                  </strong>{" "}
                  Contributed as the frontend developer, designing and
                  implementing the user interface of the website.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">
                    Team Collaboration:
                  </strong>{" "}
                  Worked closely with a team of four members, fostering
                  effective communication and teamwork to achieve the goal.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">Skill Application:</strong>{" "}
                  Utilized HTML, CSS, and JavaScript to create an intuitive and
                  visually appealing user experience.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">Time Management:</strong>{" "}
                  Completed the project within the given timeframe of 3 days,
                  showcasing effective time management and problem-solving
                  skills.
                </li>
                <li>
                  <strong className="text-[#1BF7A8]">Outcome:</strong>{" "}
                  Successfully delivered a functional and user-friendly website
                  to address the hackathon's theme.
                </li>
                <li className="text-2xl mt-14 text-gray-300">
                  <strong className="text-[#1BF7A8] ">Team Name:</strong>{" "}
                  Laggilator
                </li>
              </ul>
            </div>
            <div className=" flex justify-center items-center">
              <img className="rounded-3xl" src={gallery} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="container mx-auto  gap-4  mt-8 pl-4  ">
          <h1 className="text-4xl mb-14 text-[#1BF7A8] text-center">
            {" "}
            Worked As Volunteer In AI Bootcamp - I
          </h1>

          <div className="grid grid-cols-2 gap-9 p-24">
            <div className=" flex justify-center items-center">
              <img className="rounded-3xl" src={aibootcamp} alt="" srcset="" />
            </div>
            <div className="">
              <h1 className="text-3xl text-[#1BF7A8]">
                Sushma Godawari College
              </h1>
              <h2 className="text-xl mt-4 mb-8 text-gray-300">
                Itahari-9, Sunsari
              </h2>
              <ul className="flex flex-col gap-7 text-sm text-gray-500 ">
                <li>
                  <strong className="text-[#1BF7A8]">
                    Led a Group of 40-50 Students:
                  </strong>{" "}
                  Successfully coordinated and guided a group of 40-50 students
                  from different institutions to Sushma Godawari College for the
                  AI Bootcamp.
                </li>

                <li>
                  <strong className="text-[#1BF7A8]">
                    Managed Event Invitations:
                  </strong>{" "}
                  Took the initiative to distribute event invitations by
                  creating and distributing marketing pamphlets across local
                  institutions.
                </li>

                <li>
                  <strong className="text-[#1BF7A8]">
                    Hands-on Project Demonstrations:
                  </strong>{" "}
                  Assisted in showcasing AI-based projects such as face
                  detection apps, hand gesture detection systems, and programmed
                  games.
                </li>

                <li>
                  <strong className="text-[#1BF7A8]">
                    Event Coordination:
                  </strong>{" "}
                  Played a key role in managing the smooth execution of
                  activities during the bootcamp.
                </li>

                <li>
                  <strong className="text-[#1BF7A8]">Public Engagement:</strong>{" "}
                  Interacted with participants, answered their queries, and
                  motivated them to explore AI and related technologies.
                </li>

                <li>
                  <strong className="text-[#1BF7A8]">
                    Snack Distribution:
                  </strong>{" "}
                  Helped in organizing and distributing snacks to participants,
                  ensuring everyone was well taken care of.
                </li>

                <li>
                  <strong className="text-[#1BF7A8]">
                    Team Collaboration:
                  </strong>{" "}
                  Collaborated with other volunteers and event organizers to
                  manage logistics and maintain discipline throughout the event.
                </li>

                <li>
                  <strong className="text-[#1BF7A8]">
                    Promoted AI Awareness:
                  </strong>{" "}
                  Contributed to spreading awareness about AI technologies and
                  their applications among students.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
