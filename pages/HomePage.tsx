
import React from 'react';
import { Link } from 'react-router-dom';
import { YOUR_NAME, YOUR_TITLE } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="text-center py-16 bg-white rounded-lg shadow-xl">
        <img 
          src="https://picsum.photos/seed/homepagehero/150/150" 
          alt="Profile" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-sky-500 shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
          Hi, I'm <span className="text-sky-600">{YOUR_NAME}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 mb-8">{YOUR_TITLE}</p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          I'm passionate about creating beautiful, functional, and user-friendly web applications. With a strong foundation in modern frontend technologies, I strive to build experiences that delight users and solve real-world problems.
        </p>
        <div className="space-x-4">
          <Link
            to="/projects"
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="bg-transparent hover:bg-sky-100 text-sky-600 font-semibold py-3 px-8 rounded-lg border-2 border-sky-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">About Me</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-slate-700 leading-relaxed mb-4">
            Hello! I'm {YOUR_NAME}, a dedicated {YOUR_TITLE} with a knack for turning complex problems into elegant digital solutions. My journey in web development started with a fascination for how interactive elements could bring ideas to life on the screen. Since then, I've honed my skills in React, TypeScript, and the broader JavaScript ecosystem, always eager to learn and adapt to new technologies.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            I believe that the best applications are not only technically sound but also intuitive and accessible. My approach to development is user-centric, focusing on creating responsive and performant interfaces that provide a seamless experience across all devices.
          </p>
          <p className="text-slate-700 leading-relaxed">
            When I'm not coding, you might find me exploring new UI/UX design trends, contributing to open-source projects, or enjoying a good cup of coffee while planning my next creative endeavor.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
         <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Core Skills</h2>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
            {['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'REST APIs', 'Git & GitHub', 'UI/UX Principles'].map(skill => (
                <div key={skill} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <p className="font-semibold text-sky-700">{skill}</p>
                </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default HomePage;
