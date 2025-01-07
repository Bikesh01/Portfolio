import React from "react";
import qr from "../assets/notes/image.png";
import youtube from "../assets/notes/youtube.png";
import playlist from "../assets/notes/playlist.png";
import coffee from "../assets/notes/coffee.png";
import error from "../assets/notes/error.png";
export default function Notes() {
  return (
    <>
      <div className="container mx-auto mt-28 pl-14">
        <h1 className="text-4xl  text-gray-300">
          <i>Bsc Csit Notes By Bikesh Kc</i>
        </h1>
        <div className="flex justify-center items-center mt-16">
          <div className="grid lg:grid-cols-8 md:grid-cols-3 sm:grid-cols-2 mm:grid-cols-1 gap-4 ">
            <div className="flex flex-col items-center justify-between  col-span-2">
           <h1 className="text-gray-300"> <span className="text-green-500 text-3xl ">*</span> = <span>Frequently Used Channel</span></h1>
              <img className="w-64" src={qr} />
              <h1 className="text-green-400">
                {" "}
                <i>You Tube Channel for BSc. Csit</i>
              </h1>
              <div className=" flex flex-col gap-3 items-center justify-center">
                <img className="w-32" src={youtube} />
                <h1 className="text-purple-400 text-sm">
                  {" "}
                  <i>
                    This are The You Tube Channel Form where I learned Every
                    Topic Related to Syllabus{" "}
                  </i>
                </h1>
              </div>
              <h1 className="text-yellow-400 text-xl">
                <i>Play list That May be helpful to you</i>
              </h1>
              <img className="w-52" src={playlist} />
            </div>
            <div className="col-span-6 ">
              <div className="grid grid-cols-3 gap-4">
                <div className="">
                  <h1 className="text-orange-400  text-xl">
                    <i>If my Notes was helpful</i>{" "}
                  </h1>
                  <span className="text-orange-500">
                    <i>then by me Coffee</i>
                  </span>
                  <div className="flex justify-center mt-11">
                    <img className="w-20 flex " src={coffee} />
                  </div>
                </div>

                <div className="">
                  <h1 className="text-violet-400  text-base">
                    <i>
                      If any Notes Related problem, please let me know my
                      Profile detail is written bellow.
                    </i>{" "}
                  </h1>
                  <div className="flex justify-center mt-6">
                    <img className="w-20 flex " src={error} />
                  </div>
                </div>
                <div className="">
                  <h1 className="text-orange-400  text-xl">
                    <i>All Notes are handwritten.</i>{" "}
                  </h1>
                  <ul className="flex flex-col gap-5 text-xs mt-5">
                    <i>
                      <li className="text-orange-400">
                        {" "}
                        1. Notes are made upon YouTube, Internet, college notes
                        and other handwritten notes
                      </li>
                    </i>
                    <i>
                      <li className="text-green-400">
                        2. I did My Best to Add More information in one single
                        sentence
                      </li>
                    </i>
                    <i>
                      <li className="text-purple-400">
                        {" "}
                        3. You will find more concise and better Note After
                        5-6th Semester. Which is written in A4 size paper
                      </li>
                    </i>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-16">
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-center items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/channel/UCJihyK0A38SZ6SdJirEdIOw",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">Gate Smasher <span className="text-green-500 text-lg ">*</span></h5>
                      <h5 className="text-gray-400 text-[8px]">
                        Gate Smasher is India's number 1 Free education platform
                        for
                      </h5>
                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmADOF_VyCd_ns2dqS_7WDzNOTJ3ThqkJObw&s"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-center items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/channel/UCJihyK0A38SZ6SdJirEdIOw",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">Nesco Academy <span className="text-green-500 text-lg ">*</span></h5>
                      <h5 className="text-gray-400 text-[8px]">
                        #RedefinginEducation E,barking on a mission to make
                        education for
                      </h5>
                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4V8IOBMXUB7kdoxa0_a90isEXhkjs3Q1K-w41t5QApjL8dwOfYdRcoPfyFx255Q7tT-4&usqp=CAU"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-center items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@Lastmomenttuitions",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">
                        Last Moments Tuition
                      </h5>
                      <h5 className="text-gray-400 text-[8px]">
                        Last Moment Tuition is an Edtech Platform that teaches
                        you for
                      </h5>
                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl"
                        src="https://play-lh.googleusercontent.com/APeEZa4FLR80Q2huR4dQmpElLaBz_jw7kkkpFF38Kjm6Y_ehZjg3XIqH_8Vvo0WZBg"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-center items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@5MinutesEngineering",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">
                        5 minutes Engineerign <span className="text-green-500 text-lg ">*</span>
                      </h5>
                      <h5 className="text-gray-400 text-[8px]">
                        Myself Shirdha Rajendra Mankar an
                        Engineer|youtube|Education
                      </h5>
                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl"
                        src="https://yt3.googleusercontent.com/ytc/AIdro_kwjOJ6-8S_Hl0Awwn_OA43X8pnFAAjDgFrPGDzZHzmDw=s900-c-k-c0x00ffffff-no-rj"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-center items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@education4uofficial",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">Educaion 4u</h5>
                      <h5 className="text-gray-400 text-[8px]">
                        we are trying to cover all UG courses(Engineering, BCA,
                        MBA, BSc)
                      </h5>
                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl"
                        src="https://yt3.googleusercontent.com/ytc/AIdro_lEKsxW4yRo5Y9J5jK9ZJ6kj5sBbpQTiU2pNsTw4OuPESA=s900-c-k-c0x00ffffff-no-rj"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-center items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@SudhakarAtchala",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">
                        Sudhakar Atchala
                      </h5>
                      <h5 className="text-gray-400 text-[8px]">
                        This channel contains educational viedos which helps the
                        students for their self learning.
                      </h5>
                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl"
                        src="https://yt3.googleusercontent.com/ytc/AIdro_my0_ZKr9LesvJFsIy1SFOJO_FiipmLjjbz-3wQlVOb7Q=s900-c-k-c0x00ffffff-no-rj"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-center items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@EasyEngineeringClasses",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">
                        Easy Engineering Classes
                      </h5>
                      <h5 className="text-gray-400 text-[8px]">
                        Contact for Bunsiness Enquiry- achin.mails@gmail.com
                        Easy Engineering classes Channel is a one-stop
                      </h5>
                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl"
                        src="https://yt3.googleusercontent.com/ytc/AIdro_mzEuKuW1Vo6Bg0uJ156YJcTTnAZZ1MgQbdChRhrFcFTxo=s900-c-k-c0x00ffffff-no-rj"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-center items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@WellAcademy",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">Well Academy</h5>
                      <h5 className="text-gray-400 text-[8px]">
                        Wellcome to Well Academy Youtube Channel, Here you will
                        get live viedos which will be usefull for competitive
                      </h5>
                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl"
                        src="https://d3ji8ucjnn8r7h.cloudfront.net/store/assets/img/login_logo_img.webp"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-center items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@ShanuKuttanCSEClasses",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">
                        Shanu Kuttan CSE classes
                      </h5>
                      <h5 className="text-gray-400 text-[8px]">
                        The Shanu Kuttan CSE Classes is a technical education
                        channel for computer Science and
                      </h5>
                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGscUfOjdbxRqXAqebolWMHQ5DdeVSrfg2w&s"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-between items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@JennyslecturesCSIT",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3  w-3/4">
                      <h5 className="text-gray-200 text-xs">Jenny's lecture Cs IT <span className="text-green-500 text-2xl">*</span></h5>
                      <h5 className="text-gray-400 text-[8px]">
                      Warm Welcome to Jenny's Lectures. On This Channel we are focusing on creating tutorials for  engineers, software developers, programmers, Coders, undergraduates, graduates. We cover topics for all different skill levels, so whether you are a beginner or have some years of experience, this channel will have something for you.


                      </h5>
                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                        https://www.youtube.com/@JennyslecturesCSIT
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl w-32"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY439EAItuiel9QLjSwkMR8NgOC0MCUYEDhg&s"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-between items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/channel/UCJihyK0A38SZ6SdJirEdIOw",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">
                        Artificial Intelligence
                      </h5>

                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl w-24"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmADOF_VyCd_ns2dqS_7WDzNOTJ3ThqkJObw&s"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-between items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/channel/UCJihyK0A38SZ6SdJirEdIOw",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">
                        Computer Architecture
                      </h5>

                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl w-24"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4V8IOBMXUB7kdoxa0_a90isEXhkjs3Q1K-w41t5QApjL8dwOfYdRcoPfyFx255Q7tT-4&usqp=CAU"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-between items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/channel/UCJihyK0A38SZ6SdJirEdIOw",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">
                        Digital Logic
                      </h5>

                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl w-24"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4V8IOBMXUB7kdoxa0_a90isEXhkjs3Q1K-w41t5QApjL8dwOfYdRcoPfyFx255Q7tT-4&usqp=CAU"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 mt-2">
                  <div
                    className="flex justify-between items-center gap-1 px-2 py-1 rounded-xl border border-gray-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/channel/UCJihyK0A38SZ6SdJirEdIOw",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex flex-col gap-3">
                      <h5 className="text-gray-200 text-xs">
                        Theory of Computation
                      </h5>

                      <div className="flex  items-center gap-1">
                        <i className="ri-youtube-fill text-2xl text-red-700"></i>
                        <span className="text-[9px] text-gray-300">
                          https://www.youtube.com...
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-xl w-24"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4V8IOBMXUB7kdoxa0_a90isEXhkjs3Q1K-w41t5QApjL8dwOfYdRcoPfyFx255Q7tT-4&usqp=CAU"
                        alt="Gate Smasher Thumbnail"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
