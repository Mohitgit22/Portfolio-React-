import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import cplus from '../assets/c++.jpg';
import git from '../assets/git.jpg';
import mongodb from '../assets/mongodb.png';
import node from '../assets/node.png';
import python from '../assets/python.jpg';
import postgresql from '../assets/postgresql.png';
import nextjs from '../assets/nextjs.png';
import prisma from '../assets/prisma.png';
import shadcn_ui from '../assets/shadcn_ui.png';
import c from '../assets/c.jpg';


const TechStacks = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
        id: 8,
        src: c,
        title: "C",
        style: "shadow-violet-900",
      },
    {
        id: 9,
        src: cplus,
        title: "C++",
        style: "shadow-blue-400",
      },
      {
        id: 10,
        src: node,
        title: "NodeJS",
        style: "shadow-green-400",
      },
      {
        id: 11,
        src: mongodb,
        title: "mongodb",
        style: "shadow-green-700",
      },
      {
        id: 12,
        src: python,
        title: "Python",
        style: "shadow-yellow-400",
      },
      {
        id: 13,
        src: nextjs,
        title: "NextJs",
        style: "shadow-violet-900",
      },
      {
        id: 14,
        src: postgresql,
        title: "PostgreSQL",
        style: "shadow-blue-400",
      },
      {
        id: 15,
        src: prisma,
        title: "Prisma",
        style: "shadow-yellow-400",
      },
      {
        id: 16,
        src: shadcn_ui,
        title: "ShadCN UI",
        style: "shadow-orange-500",
      },
  ];

  return (
    <div
      name="tech stacks"
      // className="bg-gradient-to-b from-gray-800 to-black w-full py-8"
      className=" w-full py-8"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full  text-white  ">
        <div className="pt-2">
          <p className="text-6xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tech Stacks
          </p>
          <p className="py-10">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStacks;