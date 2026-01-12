import React from "react";
import { achievements, education } from "../data/data";
import { FaTrophy, FaGraduationCap, FaCode, FaMedal } from "react-icons/fa";

const achievementIcons = [FaTrophy, FaMedal, FaCode, FaCode];

const Achievements = () => {
  return (
    <div
      name="Achievements"
      className="w-full min-h-screen bg-[#0a192f] flex flex-col justify-center pt-[80px]"
    >
      <div className="max-w-[1000px] mx-auto h-full flex flex-col justify-center px-8">
        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#ccd6f6] border-b-4 border-pink-600 inline-block pb-2 mb-8">
            Education
          </h2>
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-pink-600/10 transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-pink-600/20 p-3 rounded-lg">
                <FaGraduationCap className="text-pink-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl text-[#ccd6f6] font-bold">
                  {education.degree}
                </h3>
                <p className="text-pink-600 font-semibold">
                  {education.institution}
                </p>
                <p className="text-[#64ffda] font-mono text-sm">
                  {education.period}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h2 className="text-4xl font-bold text-[#ccd6f6] border-b-4 border-pink-600 inline-block pb-2 mb-8">
            Achievements
          </h2>
          <div className="grid gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievementIcons[index] || FaTrophy;
              return (
                <div
                  key={index}
                  className="bg-[#112240] p-5 rounded-lg shadow-lg hover:shadow-pink-600/10 hover:translate-x-2 transition-all duration-300 flex items-center gap-4"
                >
                  <div className="bg-pink-600/20 p-3 rounded-lg flex-shrink-0">
                    <Icon className="text-pink-600 text-xl" />
                  </div>
                  <p className="text-[#8892b0]">{achievement}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
