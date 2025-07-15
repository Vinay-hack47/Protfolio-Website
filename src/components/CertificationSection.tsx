import React from "react";
import { ExternalLink } from "lucide-react";

const CertificationSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certificate 1 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-1">
              NPTEL – Computer Networks and Internet Protocol
            </h3>
            <p className="text-xs text-gray-500 mb-2">
              Issued By: NPTEL, IIT Madras
            </p>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Completed an NPTEL course focused on fundamental and advanced
              networking concepts, protocols, and real-world applications.
            </p>

            <a
              href="https://drive.google.com/file/d/1FvhU6SOFJmA42MHvzQC6wZdyuSTo_I8w/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
            >
              View Certificate
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Certificate 2 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-1">SQL</h3>
            <p className="text-xs text-gray-500 mb-2">Issued By: LearnTube</p>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Successfully completed a certification course on SQL Databases
              covering core database concepts, data manipulation using SQL
              queries, and hands-on experience with relational database
              management systems.
            </p>

            <a
              href="https://drive.google.com/file/d/1hVMejnDr87CInyd_RzWxxSRI8XkQ4qzd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
            >
              View Certificate
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Certificate 3 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-1">
              Letter of Recommendation
            </h3>
            <p className="text-xs text-gray-500 mb-2">Issued By: CodeClause</p>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Received for outstanding performance and project completion during
              React.js internship, demonstrating exceptional technical skills.
            </p>

            <a
              href="https://drive.google.com/file/d/1SNixKXSnM8ADUajPouj5f33ds6cf3V3m/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
            >
              View Certificate
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>


          {/* Certificate 4 – Object-Oriented Programming in Python */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-1">
              Certificate of Participation
            </h3>
            <p className="text-xs text-gray-500 mb-2">
              Issued By: SkillEcted Campus Program
            </p>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Completed a comprehensive{" "}
              <strong>Object-Oriented Programming (OOP) in Python</strong>{" "}
              bootcamp covering basic-to-advanced concepts including classes,
              inheritance, polymorphism, and SOLID principles.
            </p>

            <a
              href="https://drive.google.com/file/d/1J0t9yLYueMvWgKKfIWhDvzmeGZMm1Eu5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
            >
              View Certificate
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
