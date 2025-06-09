
import React from 'react';
import DownloadIcon from '../components/icons/DownloadIcon';
import { YOUR_NAME, YOUR_TITLE } from '../constants';

const ResumePage: React.FC = () => {
  // Replace with the actual path to your resume PDF in the public folder or hosted URL
  const resumePdfUrl = './resume.pdf'; 

  return (
    <div className="animate-fadeIn bg-white p-6 sm:p-8 rounded-lg shadow-xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-4 border-b border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 sm:mb-0">My Resume</h1>
        <a
          href={resumePdfUrl}
          download={`${YOUR_NAME.replace(/\s+/g, '_')}_Resume.pdf`}
          className="inline-flex items-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <DownloadIcon className="w-5 h-5 mr-2" />
          Download PDF
        </a>
      </div>

      <div className="space-y-10 text-slate-700">
        <section>
          <h2 className="text-2xl font-semibold text-sky-700 mb-3">{YOUR_NAME}</h2>
          <p className="text-lg text-slate-800">{YOUR_TITLE}</p>
          <p className="text-sm">your.email@example.com | (555) 123-4567 | yourlinkedinprofile.com</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-sky-600 border-b-2 border-sky-200 pb-2 mb-4">Summary</h3>
          <p className="leading-relaxed">
            Highly motivated and results-oriented Senior Frontend React Engineer with X years of experience in designing, developing, and deploying user-centric web applications. Proficient in modern JavaScript frameworks (React, Next.js), TypeScript, state management (Redux, Zustand), and UI/UX principles. Proven ability to lead projects, mentor junior developers, and collaborate effectively in agile environments. Seeking to leverage expertise in creating innovative and impactful digital experiences.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-sky-600 border-b-2 border-sky-200 pb-2 mb-4">Experience</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-slate-800">Senior Frontend Engineer</h4>
            <p className="text-sm text-slate-600">Awesome Tech Company | City, State | Jan 2021 - Present</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Led the development of a new customer-facing portal using React, TypeScript, and Tailwind CSS, resulting in a 20% increase in user engagement.</li>
              <li>Architected and implemented a scalable component library, improving development efficiency by 30%.</li>
              <li>Mentored 3 junior developers, fostering their growth and improving team productivity.</li>
              <li>Collaborated with UX/UI designers and backend teams to deliver high-quality features on time.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-800">Frontend Developer</h4>
            <p className="text-sm text-slate-600">Another Cool Firm | City, State | Jun 2018 - Dec 2020</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Developed and maintained responsive web applications using React and Redux.</li>
              <li>Contributed to the migration of a legacy AngularJS application to React.</li>
              <li>Improved application performance by optimizing rendering and API calls.</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-sky-600 border-b-2 border-sky-200 pb-2 mb-4">Education</h3>
          <div>
            <h4 className="text-lg font-semibold text-slate-800">Bachelor of Science in Computer Science</h4>
            <p className="text-sm text-slate-600">University of Technology | City, State | Graduated May 2018</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-sky-600 border-b-2 border-sky-200 pb-2 mb-4">Skills</h3>
          <p className="leading-relaxed">
            <strong>Languages:</strong> TypeScript, JavaScript (ESNext), HTML5, CSS3, Python
            <br />
            <strong>Frameworks/Libraries:</strong> React, Next.js, Redux, Zustand, Tailwind CSS, Material-UI, Node.js, Express.js
            <br />
            <strong>Tools:</strong> Git, GitHub, Webpack, Babel, Jest, React Testing Library, Docker, Figma
            <br />
            <strong>Methodologies:</strong> Agile, Scrum, CI/CD, Responsive Design, Accessibility (WCAG)
          </p>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
