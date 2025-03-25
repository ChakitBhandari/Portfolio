import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import { GITHUB_USERNAME } from "../data/data";
import { projects } from "../utils/projects";

const Work = () => {
  //   const [projects, setProjects] = useState([]);

  return (
    <div
      name="Work"
      className="w-full min-h-screen text-gray-300 bg-[#0a192f] pt-[80px] flex flex-col justify-center"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out my Projects</p>
        </div>

        {/* Projects container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.length === 0 ? (
            <>
              {[...Array(6)].map((repo, index) => (
                <div
                  key={index}
                  className="container rounded-md flex justify-center text-center 
                        items-center mx-auto"
                >
                  <Skeleton
                    variant="rounded"
                    sx={{ bgcolor: "grey.600", minHeight: "250px" }}
                    className="sm:w-80 w-full"
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              {projects.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${item?.image})` }}
                  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center 
                            items-center mx-auto w-full content-div"
                >
                  {!item.image && (
                    <div className="text-2xl group-hover:hidden">
                      {item?.name}
                    </div>
                  )}

                  {/* Hover effect for images */}
                  <div className="hidden group-hover:block group-hover:opacity-100">
                    <span className="text-2xl font bold text-white tracking-wider ">
                      {item?.name}
                    </span>
                    <div className="pt-8 text-center ">
                      <a href={item?.github} target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Code
                        </button>
                      </a>
                      {item?.demo && (
                        <a href={item?.demo} target="_blank">
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            Demo
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
