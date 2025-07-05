import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  keySkills: string[];
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Intern',
    company: 'Sudaku CodeClause',
    duration: '01 Dec, 2024 – 01 Jan, 2025',
    location: 'Remote',
    keySkills: ['ReactJS', 'Front-End Web Development', 'Bootstrap'],
    description: [
      'Built two projects using React: an Image Gallery demonstrating state management and a Web Music Player showcasing media handling and UI design.',
      'Received a Letter of Recommendation for outstanding performance and project completion.',
    ],
  },
  {
    role: 'Intern',
    company: 'Prodigy InfoTech',
    duration: '01 Dec, 2024 – 31 Dec, 2024',
    location: 'Remote, India',
    keySkills: ['JavaScript', 'CSS', 'HTML', 'ReactJS', 'Web Development'],
    description: [
      'Developed four web apps, including a stopwatch and tic-tac-toe game; enhanced skills in responsive design and interactive UI.',
      'Awarded a Letter of Recommendation for consistent contributions and project work.',
    ],
  },
  {
    role: 'Intern',
    company: 'Intel Unnati Industrial Training',
    duration: '01 May, 2024 – 01 Jul, 2024',
    location: 'India',
    keySkills: ['Team Coordination', 'Python', 'Basics of Data Analysis'],
    description: [
      'Worked on optimizing CPU and NIC power usage through applied data analysis techniques.',
    ],
  },
  {
    role: 'Summer Intern – Node.js Developer',
    company: 'Celebal Technologies',
    duration: '02 Jun, 2025 – Present',
    location: 'Remote',
    keySkills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'Backend Development'],
    description: [
      'Currently undergoing hands-on training in backend development, focusing on building RESTful APIs, integrating MongoDB databases, and applying Node.js in real-world, industry-oriented projects.',
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.role}{' '}
                  <span className="text-indigo-600 font-normal">at {exp.company}</span>
                </h3>
                <span className="text-sm text-gray-500 mt-1 md:mt-0">{exp.duration}</span>
              </div>

              {/* Location */}
              <div className="text-sm text-gray-500 italic mb-3">{exp.location}</div>

              {/* Key Skills */}
              <p className="text-sm text-gray-700 mb-3">
                <span className="font-semibold text-gray-800">Key Skills:</span>{' '}
                {exp.keySkills.join(', ')}
              </p>

              {/* Description */}
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
