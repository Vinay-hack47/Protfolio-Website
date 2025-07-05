import React from 'react';
import { Trophy } from 'lucide-react';

const ExtracurricularSection: React.FC = () => {
  return (
    <section id="extracurricular" className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Extracurricular Activities
        </h2>

        <div className="bg-white shadow-sm hover:shadow-md transition border border-gray-200 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
            <h3 className="text-xl font-semibold text-indigo-700">Hackathons & Coding Competitions</h3>
          </div>

          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold text-gray-800">Role:</span> Participant
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-semibold text-gray-800">Locations:</span> Various (Online & In-Person)
          </p>

          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>Participated in multiple hackathons and coding competitions hosted by institutions and platforms.</li>
            <li>Demonstrated strong problem-solving, team collaboration, and rapid prototyping skills.</li>
            <li>Received participation certificates and recognition for innovative technical solutions.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
