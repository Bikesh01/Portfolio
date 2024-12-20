import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto mt-22  ">
        <div className="mt-24">
          <div class="grid grid-cols-2 gap-9">
            <div class="px-8 py-20 bg-[#28272C] max-w-2xl mx-auto rounded-3xl">
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-4xl text-[#1BF7A8]">Let's Work Together</h1>
                <p className="text-sm text-gray-500 mt-8 mb-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  class="w-full pl-4 py-3  bg-[#1C1B22] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1BF7A8]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  class="w-full pl-4 py-3  bg-[#1C1B22] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1BF7A8]"
                />
              </div>

              <div class="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full pl-4 py-3  bg-[#1C1B22] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1BF7A8]"
                />
              </div>

              <div class="mb-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  class="w-full pl-4 py-3  bg-[#1C1B22] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1BF7A8]"
                />
              </div>

              <div class="mb-4">
                <select class="w-full pl-4 py-3  bg-[#1C1B22] text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1BF7A8]">
                  <option value="" disabled selected>
                    Select a Service
                  </option>
                  <option value="web-development">Web Development</option>
                  <option value="uiux-designer">UI/UX Designer</option>
                  <option value="photo-ediing">Photo Editing</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  class="w-full pl-4 py-3  bg-[#1C1B22] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1BF7A8]"
                ></textarea>
              </div>
            </div>

            <div className="flex flex-col justify-center items-start gap-6">
              <div className="flex items-center gap-4">
                <i className="text-4xl p-4 text-[#1BF7A8] bg-[#28272C] rounded-sm ri-phone-fill"></i>
                <p className="text-gray-600">
                  Phone <br />
                  <span className="text-gray-300 text-xl">
                    (+977-9825007072)
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <i className="text-4xl p-4 text-[#1BF7A8] bg-[#28272C] rounded-sm ri-mail-fill"></i>
                <p className="text-gray-600">
                  Email <br />
                  <span className="text-gray-300 text-xl">
                    bikeshkc501@gmail.com
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <i className="text-4xl p-4 text-[#1BF7A8] bg-[#28272C] rounded-sm ri-map-pin-fill"></i>
                <p className="text-gray-600">
                  Address <br />
                  <span className="text-gray-300 text-xl">
                    Itahari-20, Sunsari
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
