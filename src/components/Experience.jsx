import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { experiencePageDescription } from "../data/data";

const Experience = () => {
  return (
    <div
      name="Experience"
      className="w-full min-h-screen bg-[#0a192f] flex flex-col justify-center pt-[80px]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto h-full flex flex-col justify-center px-8">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Professional Experience
        </h1>
        {/* Experience Section */}
        <div className="my-8">
          <h2 className="text-2xl text-pink-600 font-semibold">Experience</h2>

          <div className="my-4">
            <h3 className="text-xl text-[#ccd6f6] font-bold">
              Software Engineer
            </h3>
            <p className="text-[#8892b0]">
              Film Never Die | Aug 2024 - Feb 2025 | Melbourne, VIC 3000
            </p>
            <ul className="text-[#8892b0] list-disc pl-6 py-2">
              <li>
                Worked on a SAAS product helping clients save up to $30,000
                annually.
              </li>
              <li>
                Developed a Mobile app using Flutter for fast, user-friendly
                image access, replacing Dropbox. Enabled users to download,
                favorite, print, and share images.
              </li>
              <li>
                Hosted images ranging from 5MB to 50MB on CloudFront CDN for
                faster access and efficient delivery.
              </li>
              <li>
                Built a User gallery site using NextJS and integrated with
                Shopify using OAuth for seamless redirection under the same
                domain.
              </li>
            </ul>
          </div>

          <div className="my-4">
            <h3 className="text-xl text-[#ccd6f6] font-bold">
              Software Developer
            </h3>
            <p className="text-[#8892b0]">
              Fresh Prints | June 2023 – Aug 2023 | Remote
            </p>
            <ul className="text-[#8892b0] list-disc pl-6 py-2">
              <li>
                Developed features for the Customer Portal, allowing direct
                client orders.
              </li>
              <li>Implemented a feedback system for product reviews.</li>
            </ul>
          </div>

          <div className="my-4">
            <h3 className="text-xl text-[#ccd6f6] font-bold">
              Full Stack Web Developer Intern
            </h3>
            <p className="text-[#8892b0]">
              Fresh Prints | Jan 2023 – Apr 2023 | Remote
            </p>
            <ul className="text-[#8892b0] list-disc pl-6 py-2">
              <li>
                Developed a PDF-image-parser API to extract specific images from
                a PDF file.
              </li>
              <li>
                Focused on making the API serverless and deploying it on AWS
                Lambda for improved scalability and cost-efficiency by 96%.
              </li>
              <li>
                Used Docker to improve scalability and reduce OS dependencies.
              </li>
              <li>
                Utilized JIRA as a project management tool, providing clear and
                effective project oversight.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
