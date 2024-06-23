import React from 'react';
import { Element } from 'react-scroll';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        { name: "Front-End", icon: <FaHtml5 className="text-6xl text-red-500" /> },
        { name: "Back-End", icon: <FaNodeJs className="text-6xl text-green-500" /> },
        { name: "Communication", icon: <FaReact className="text-6xl text-blue-500" /> },
        { name: "Deployment", icon: <FaCss3Alt className="text-6xl text-blue-700" /> },
        { name: "Version Control", icon: <FaGitAlt className="text-6xl text-orange-500" /> },
        { name: "Tool", icon: <FaJs className="text-6xl text-yellow-500" /> }
    ];

    return (
        <Element name="skills" className="container mx-auto p-4">
            <h1 className="text-center text-4xl font-bold mb-4">SKILLS</h1>
            <p className="text-lg mb-4">여기에 자신의 기술 내용을 작성하세요.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="mb-4">
                            {skill.icon}
                        </div>
                        <div className="text-xl font-semibold">
                            {skill.name}
                        </div>
                    </div>
                ))}
            </div>
        </Element>
    );
};

export default Skills;
