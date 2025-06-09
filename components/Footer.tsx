
import React from 'react';
import { SOCIAL_LINKS, YOUR_NAME } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import EmailIcon from './icons/EmailIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a href={SOCIAL_LINKS.email} className="hover:text-sky-400 transition-colors">
            <EmailIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} {YOUR_NAME}. All rights reserved.</p>
        <p className="text-xs mt-1">Built with React, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
