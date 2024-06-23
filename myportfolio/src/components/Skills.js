import React from 'react';
import { Element } from 'react-scroll';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma } from 'react-icons/fa';

const Skills = () => {
    const frontEndSkills = [
        { name: "HTML", icon: <FaHtml5 className="text-5xl text-red-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-700" /> },
        { name: "JS", icon: <FaJs className="text-5xl text-yellow-500" /> },
    ];

    const frontEndAdvancedSkills = [
        { name: "React", icon: <FaReact className="text-6xl text-blue-500" /> },
        { name: "TailwindCSS", icon: <FaCss3Alt className="text-6xl text-teal-500" /> },
        { name: "Next.js", icon: <img src="/nextjs.svg" alt="Next.js" className="h-16 w-16 mx-auto" /> },
    ];

    const backEndSkills = [
        { name: "Node.js", icon: <img src="/nodejs.png" alt="Node.js" className="h-16 w-16 mx-auto" /> },
    ];

    const communicationSkills = [
        { name: "Figma", icon: <FaFigma className="text-6xl text-purple-500" /> },
    ];

    const certificationSkills = [
        { name: "정보처리기사", icon: <FaGitAlt className="text-6xl text-gray-500" /> },
        { name: "무선설비기사", icon: <FaGitAlt className="text-6xl text-gray-500" /> },
    ];

    return (
        <Element name="skills" className="container mx-auto p-8 px-40">
            <h1 className="text-center text-4xl font-bold mb-4">SKILLS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h2 className="text-2xl font-bold mb-4 border-b">Front-End</h2>
                    <div className="flex flex-wrap justify-center">
                        {frontEndSkills.map((skill, index) => (
                            <div key={index} className="m-2">
                                {skill.icon}
                                <div className="text-xl font-semibold">
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {frontEndAdvancedSkills.map((skill, index) => (
                            <div key={index} className="m-2">
                                {skill.icon}
                                <div className="text-xl font-semibold">
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h2 className="text-2xl font-bold mb-4 border-b">Back-End</h2>
                    {backEndSkills.map((skill, index) => (
                        <div key={index} className="m-2">
                            {skill.icon}
                            <div className="text-xl font-semibold">
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h2 className="text-2xl font-bold mb-4 border-b">Communication</h2>
                    {communicationSkills.map((skill, index) => (
                        <div key={index} className="m-2">
                            {skill.icon}
                            <div className="text-xl font-semibold">
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h2 className="text-2xl font-bold mb-4 border-b">Certification</h2>
                    {certificationSkills.map((skill, index) => (
                        <div key={index} className="m-2">
                            {skill.icon}
                            <div className="text-xl font-semibold">
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Element>
    );
};

export default Skills;
