
import React from 'react';
import { SOCIAL_LINKS, YOUR_NAME } from '../constants';
import GitHubIcon from '../components/icons/GitHubIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import EmailIcon from '../components/icons/EmailIcon';

const ContactPage: React.FC = () => {
  return (
    <div className="animate-fadeIn max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 text-center">Get In Touch</h1>
      <p className="text-slate-700 mb-8 text-center leading-relaxed">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out if you'd like to connect!
      </p>

      <div className="space-y-6">
        <div className="flex items-center p-4 bg-slate-50 rounded-lg hover:shadow-md transition-shadow duration-300">
          <EmailIcon className="w-8 h-8 text-sky-600 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Email</h3>
            <a href={SOCIAL_LINKS.email} className="text-sky-600 hover:text-sky-700 hover:underline break-all">
              {SOCIAL_LINKS.email.replace('mailto:', '')}
            </a>
          </div>
        </div>

        <div className="flex items-center p-4 bg-slate-50 rounded-lg hover:shadow-md transition-shadow duration-300">
          <LinkedInIcon className="w-8 h-8 text-sky-600 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-slate-800">LinkedIn</h3>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 hover:underline">
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="flex items-center p-4 bg-slate-50 rounded-lg hover:shadow-md transition-shadow duration-300">
          <GitHubIcon className="w-8 h-8 text-sky-600 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-slate-800">GitHub</h3>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 hover:underline">
              View My Profile
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-slate-600 mt-12">
        Looking forward to hearing from you!
      </p>
    </div>
  );
};

export default ContactPage;
