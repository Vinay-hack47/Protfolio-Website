import React from "react";

const certifications = [
  {
    title: "Full Stack Web Development",
    issuedBy: "30DaysCoding",
  },
  {
    title: "SQL",
    issuedBy: "LearnTube",
  },
  {
    title: "Letter of Recommendation (Web Development)",
    issuedBy: "CodeClause, Prodigy Infotech",
  },
  {
    title: "Cyber Security and Ethical Hacking",
    issuedBy: "Coincent",
  },
  {
    title: "Intel Unnati Industrial Training",
    issuedBy: "Intel",
  },
  {
    title: "Certificate of Participation – OOP in Python",
    issuedBy: "SkillEcted Campus Program",
  },
  {
    title: "Introduction to Cyber Security",
    issuedBy: "Cisco",
  },
  {
    title: "NPTEL – Computer Networks and Internet Protocol",
    issuedBy: "NPTEL, IIT Madras",
  },
  {
    title: "Cloud Computing with AWS",
    issuedBy: "Tutedude",
  },
];

const CertificationSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col gap-2"
            >
              <h3 className="text-lg font-semibold text-indigo-700">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500">
                Issued by: {cert.issuedBy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
