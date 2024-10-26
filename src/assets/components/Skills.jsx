import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <div>
      <h2 className=" w-fit leading-snug bg-[#272626] mx-auto text-4xl text-center font-bold text-yellow-400 border-b-[2px] md:border-b-0 md:border-t-[2px] border-yellow-400">
        Skills
      </h2>
      <div className="flex justify-center items-center flex-wrap w-3/4 mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-2/5 bg-zinc-800 border border-yellow-400 rounded-md shadow-md shadow-yellow-400 m-4 p-4"
          >
            <img className="w-20 object-contain" src={skill.img} alt="" />
            <h3 className="text-3xl font-bold">{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
