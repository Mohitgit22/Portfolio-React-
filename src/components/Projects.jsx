import React from "react";
import skyguide from '../assets/portfolio/ecommerce.jpg';
import chatgpt from '../assets/portfolio/voiceassistgpt-4.jpg';
import code_snippet from '../assets/portfolio/airlinemanagement.jpg';
import { VscGithub } from "react-icons/vsc";



const Projects = () => {
  const projects = [
    {
      id: 1,
      src: skyguide,
      title: "SkyGuide - Weather Application",
      href: "https://github.com/Mohitgit22/SkyGuide",
      description: "A React-based weather app providing real-time updates, 5-day forecasts, and hourly weather details. Built with ReactJS, OpenWeatherMap API, Luxon, and Tailwind CSS, it features city-based search and a temperature toggle between Celsius and Fahrenheit."
    },
    {
      id: 2,
      src: chatgpt,
      title: "Voice-Assist ChatGpt",
      href: "https://github.com/Mohitgit22/Voice-Assist-GPT",
      description: "A voice-assistant powered by OpenAI's GPT model.This assistant allows users to interact with their devices through voice commands i.e. Speech to text Recognition using Javascript Web Speech Recognition API"
    },
    {
      id: 3,
      src: code_snippet,
      title: "Code Snippet Storing Application",
      href: "https://github.com/Mohitgit22/Snippets",
      description: "A Next.js-based platform for storing and managing code snippets with CRUD operations. It uses Prisma with PostgreSQL for data handling, CodeMirror for editing, and integrates Google Generative AI for AI-powered code suggestions."
    } 
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-8
      ">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className='pb-2'>
          <p className="text-6xl font-bold inline border-b-4 border-gray-500 ">
            Projects
          </p>
          <p className="py-16">Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0">
            {projects.map(({ id, src, title, href, description }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg relative">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />

                <a 
                href={href}
                target='_blank'
                rel="noreferrer"
                className="absolute top-2 right-2 p-2 text-black bg-white shadow-md cursor-pointer hover:shadow-lg rounded-full">
                  <VscGithub size={32} />
                </a>
                <p className="mt-4 flex items-center justify-center font-bold text-2xl">{title}</p>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center text-1xl px-1 py-2 m-4 text-gray-500 ">
                    {description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     </div>
  );
};

export default Projects;