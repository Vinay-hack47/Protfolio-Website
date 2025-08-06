import React from 'react';
import { Code, Coffee, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                  <img
                    src="https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?q=80&w=1195&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Vinay Rajput"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Summary / Objective */}
           <div>
  <h3 className="text-2xl font-bold text-gray-800 mb-4">
    Hi, I'm <span className="text-blue-600">Vinay Rajput</span>
  </h3>
  <p className="text-lg text-gray-600 leading-relaxed mb-4">
    A tech enthusiast and self-driven <span className="font-semibold text-gray-800">Full Stack Web Developer</span> who loves solving real-world problems through clean, efficient code and intuitive user experiences.
  </p>
  <p className="text-lg text-gray-600 leading-relaxed mb-4">
    With hands-on experience in React, Node.js, Express, and MongoDB, I enjoy building scalable web applications that combine functionality, performance, and aesthetics.
  </p>
  <p className="text-lg text-gray-600 leading-relaxed mb-4">
    I regularly participate in hackathons and coding competitions to refine my problem-solving skills and stay sharp in an ever-evolving tech landscape. I’m passionate about leveraging technology to drive innovation and collaborating on projects that make a real impact.
  </p>
  <p className="text-lg text-gray-600 leading-relaxed">
    In addition to full stack development, I have a growing interest in <span className="font-semibold text-gray-800">Cybersecurity</span>, where I actively explore core concepts and stay updated on industry trends to broaden my technical perspective.
  </p>
</div>


              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Code className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="font-semibold text-gray-800">Clean Code</p>
                    <p className="text-sm text-gray-600">Readable, maintainable</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Coffee className="w-6 h-6 text-purple-500" />
                  <div>
                    <p className="font-semibold text-gray-800">Always Learning</p>
                    <p className="text-sm text-gray-600">Curiosity-driven growth</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Heart className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="font-semibold text-gray-800">Passionate</p>
                    <p className="text-sm text-gray-600">Code with heart</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
