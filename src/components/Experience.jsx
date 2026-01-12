import React from "react";

const experiences = [
  {
    title: "AI Engineer",
    company: "Heya Voice AI",
    period: "Aug 2025 - Present",
    location: "Melbourne, VIC 3000",
    highlights: [
      "Designed and deployed AI-powered voice agents for 10+ small-scale businesses, enabling 24/7 customer engagement and reducing human call handling by up to 80%.",
      "Built an internal CLI tool for a proprietary voice platform using GitOps architecture, reducing deployment and configuration errors by 60%.",
      "Developed and maintained complex n8n workflows, enabling end-to-end automation.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Digital Asset Custody Solutions Pty Ltd.",
    period: "Jul 2025 - Oct 2025",
    location: "Melbourne, VIC 3000",
    highlights: [
      "Designed and built the end-to-end architecture for a crypto pricing engine on AWS, supporting real-time pricing for 20+ digital assets.",
      "Integrated 5+ external market data providers to deliver reliable, low-latency pricing data with 99.9% availability.",
      "Developed serverless pipelines using API Gateway, AWS Lambda, and RDS, reducing infrastructure overhead by 45% while maintaining secure and scalable data flows.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Film Never Die",
    period: "Aug 2024 - Feb 2025",
    location: "Melbourne, VIC 3000",
    highlights: [
      "Worked on a groundbreaking SaaS product helping clients save up to $30,000 annually.",
      "Developed a Mobile app using Flutter for fast, user-friendly image access, replacing Dropbox.",
      "Hosted images ranging from 5MB to 50MB on CloudFront CDN for faster access and efficient delivery.",
    ],
  },
  {
    title: "Software Developer",
    company: "Fresh Prints",
    period: "Jan 2023 – Aug 2023",
    location: "Remote",
    highlights: [
      "Developed Customer Portal features enabling direct client ordering.",
      "Built a PDF image extraction API and migrated it to a serverless AWS Lambda architecture, reducing costs by 96%.",
      "Containerized services using Docker to improve scalability and reduce OS dependencies.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      name="Experience"
      className="w-full min-h-screen bg-[#0a192f] flex flex-col justify-center pt-[80px]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto h-full flex flex-col justify-center px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6] border-b-4 border-pink-600 inline-block pb-2 mb-8">
          Professional Experience
        </h1>
        
        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-pink-600/30" />
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row mb-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-600 rounded-full border-4 border-[#0a192f] z-10" />
              
              {/* Content card */}
              <div
                className={`ml-6 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                }`}
              >
                <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-pink-600/10 transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl text-pink-600 font-bold">
                      {exp.title}
                    </h3>
                    <span className="text-[#64ffda] text-sm font-mono mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#ccd6f6] font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-[#8892b0] text-sm mb-3">{exp.location}</p>
                  <ul className="text-[#8892b0] space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start">
                        <span className="text-pink-600 mr-2 mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
