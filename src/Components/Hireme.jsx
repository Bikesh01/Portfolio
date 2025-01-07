import React from 'react'

export default function Hireme() {
  const [activeSection, setActiveSection] = useState("Education");

  return (
   

    <>

<div className="grid grid-cols-8">
      {/* Sidebar */}
      <div className="grid col-span-2">
        <ul>
          <li onClick={() => setActiveSection("Education")} className="cursor-pointer">
            Education
          </li>
          <li onClick={() => setActiveSection("Skill")} className="cursor-pointer">
            Skill
          </li>
          <li onClick={() => setActiveSection("About")} className="cursor-pointer">
            About
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="grid col-span-6">
        {activeSection === "Education" && (
          <div className="">Education Detail Div</div>
        )}
        {activeSection === "Skill" && (
          <div className="">Skills Detail Div</div>
        )}
        {activeSection === "About" && (
          <div className="">About Detail Div</div>
        )}
      </div>
    </div>
    </>
  )
}
