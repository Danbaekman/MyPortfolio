import React from 'react';
import { Element } from 'react-scroll';

const Projects = () => {
    return (
        <Element name="projects" className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-lg mb-4">여기에 자신의 프로젝트 내용을 작성하세요.</p>
        </Element>
    );
};

export default Projects;
