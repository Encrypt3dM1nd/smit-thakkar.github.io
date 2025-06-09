
import React from 'react';
import { Project } from '../types';
import GitHubIcon from './icons/GitHubIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title} ({project.year})</h3>
        <p className="text-slate-700 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm"
            >
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-700 hover:text-sky-600 font-medium py-2 px-4 rounded-md border border-slate-300 hover:border-sky-500 transition-colors duration-200 text-sm"
            >
              <GitHubIcon className="w-4 h-4 mr-2" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
