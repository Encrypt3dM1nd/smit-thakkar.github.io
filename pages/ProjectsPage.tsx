
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: 'A complete overhaul of an online retail platform, focusing on UX and performance.',
    longDescription: 'Led the frontend development for a major e-commerce client. Implemented a new design system, optimized for mobile, and integrated with a new GraphQL API. Technologies: React, Next.js, TypeScript, Tailwind CSS, Apollo Client.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
    liveUrl: '#', // Replace with actual URL
    repoUrl: '#', // Replace with actual URL
    year: 2023,
  },
  {
    id: '2',
    title: 'Interactive Data Dashboard',
    description: 'A web application for visualizing complex datasets with interactive charts and filters.',
    longDescription: 'Developed a dashboard for a financial analytics firm. Used D3.js and Recharts for dynamic data visualization, and Zustand for state management. Focused on real-time data updates and user customization.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['React', 'TypeScript', 'D3.js', 'Recharts', 'Zustand'],
    liveUrl: '#',
    repoUrl: '#',
    year: 2022,
  },
  {
    id: '3',
    title: 'Collaborative Project Management Tool',
    description: 'A SaaS application enabling teams to manage tasks, track progress, and communicate effectively.',
    longDescription: 'Built key features for a project management tool, including real-time updates with WebSockets, drag-and-drop task boards, and user authentication. Technologies: React, Node.js, Express, MongoDB, Socket.io.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'SaaS'],
    // liveUrl: '#', // No live URL for this example
    repoUrl: '#',
    year: 2021,
  },
   {
    id: '4',
    title: 'Personal Portfolio Website (This one!)',
    description: 'My personal space on the web to showcase my skills and projects.',
    longDescription: 'Designed and developed my portfolio website using React, TypeScript, and Tailwind CSS. Focused on a clean, modern aesthetic and responsive design. Hosted on GitHub Pages.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
    repoUrl: 'https://github.com/yourusername/your-portfolio-repo', // Replace with your actual repo
    year: new Date().getFullYear(),
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold text-slate-900 mb-10 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
       <p className="text-center text-slate-600 mt-12">
        More projects and details available on my <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-semibold">GitHub profile</a>.
      </p>
    </div>
  );
};

export default ProjectsPage;
