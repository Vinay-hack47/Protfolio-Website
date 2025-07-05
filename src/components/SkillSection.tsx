import React from 'react';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        {/* Education Info */}
        <div className="text-center text-gray-700 mb-10">
          <p className="text-md">
            <span className="font-semibold">B.Tech in Computer Science</span> • Vadodara, Gujarat
          </p>
          <p className="text-sm">Sep 2022 – May 2026</p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          {[
            {
              title: 'Languages',
              skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'Java','SQL'],
            },
            {
              title: 'Frameworks & Libraries',
              skills: ['MERN Stack', 'Next.js'],
            },
            {
              title: 'Databases',
              skills: ['MongoDB', 'MYSQL'],
            },
            {
              title: 'Tools',
              skills: ['Docker', 'GenAI (ChatGPT / OpenAI API)', 'Prisma'],
            },
            {
              title: 'Other Skills',
              skills: ['Competitive Coding', 'Version Control (Git/GitHub)'],
            },
          ].map((group, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{group.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {group.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
