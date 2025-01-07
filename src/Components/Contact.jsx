import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const maxMessageLength = 200;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for the current field on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (formData.phone && !/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be between 7 and 15 digits.";
    }
    if (formData.message.length > maxMessageLength) {
      newErrors.message = `Message must be less than ${maxMessageLength} characters.`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="mt-10 flex justify-end items-end">
          <div className="grid sm:grid-cols-2 gap-9">
            <div className="px-8 py-20 bg-[#28272C] max-w-2xl mx-auto rounded-3xl">
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-4xl text-[#1BF7A8]">Let's Work Together</h1>
                <p className="text-sm text-gray-500 mt-8 mb-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full pl-4 py-3 bg-[#1C1B22] rounded-2xl focus:outline-none focus:ring-2 ${
                        errors.firstName ? "ring-red-500" : "focus:ring-[#1BF7A8]"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full pl-4 py-3 bg-[#1C1B22] rounded-2xl focus:outline-none focus:ring-2 ${
                        errors.lastName ? "ring-red-500" : "focus:ring-[#1BF7A8]"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-4 py-3 bg-[#1C1B22] rounded-2xl focus:outline-none focus:ring-2 ${
                      errors.email ? "ring-red-500" : "focus:ring-[#1BF7A8]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-4 py-3 bg-[#1C1B22] rounded-2xl focus:outline-none focus:ring-2 ${
                      errors.phone ? "ring-red-500" : "focus:ring-[#1BF7A8]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>

                {/* Select Service */}
                <div className="mb-4">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-4 py-3 bg-[#1C1B22] text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1BF7A8]"
                  >
                    <option value="" disabled>
                      Select a Service
                    </option>
                    <option value="web-development">Web Development</option>
                    <option value="uiux-designer">UI/UX Designer</option>
                    <option value="photo-editing">Photo Editing</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={maxMessageLength}
                    className="w-full pl-4 py-3 bg-[#1C1B22] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1BF7A8]"
                  ></textarea>
                  <p className="text-gray-500 text-sm">
                    {formData.message.length}/{maxMessageLength} characters
                  </p>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
              
                <div className="flex justify-center items-center mt-4">
             <button type="submit" className="relative inline-flex text-[#1BF7A8] border border-[#1BF7A8] py-2 px-6 focus:outline-none rounded-3xl text-lg gap-6 group overflow-hidden">
                <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-out">
                  Submit
                </span>
                <i class="ri-mail-line  relative z-10 group-hover:text-black transition-colors duration-500 ease-out"></i>
                <div className="absolute inset-0 bg-[#1BF7A8] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              </button>
             </div>
              </form>
            </div>
            <div className="flex flex-col justify-center items-start gap-6">
            <div className="flex items-center gap-4">
              <i className="text-4xl p-4 text-[#1BF7A8] bg-[#28272C] rounded-sm ri-phone-fill"></i>
              <p className="text-gray-600">
                Phone <br />
                <span className="text-gray-300 text-xl">(+977-9825007072)</span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <i className="text-4xl p-4 text-[#1BF7A8] bg-[#28272C] rounded-sm ri-mail-fill"></i>
              <p className="text-gray-600">
                Email <br />
                <span className="text-gray-300 text-xl">bikeshkc501@gmail.com</span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <i className="text-4xl p-4 text-[#1BF7A8] bg-[#28272C] rounded-sm ri-map-pin-fill"></i>
              <p className="text-gray-600">
                Address <br />
                <span className="text-gray-300 text-xl">Itahari-20, Sunsari</span>
              </p>
            </div>
          </div>
          </div>
          
          
        </div>
      </div>
    </>
  );
}
