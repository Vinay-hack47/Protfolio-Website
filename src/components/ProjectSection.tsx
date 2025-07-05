
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

interface Project {
  title: string;
  techStack: string[];
  description: string[];
  image: string;
  codeUrl:string;
  liveUrl: string;
}
const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    techStack: ["ReactJS", "MongoDB", "Node.js", "Express", "Tailwind CSS", "JWT", "Cloudinary"],
    description: [
      "Developed a full-featured e-commerce web application with user/admin roles.",
      "Implemented JWT-based authentication, product/category management, and a dynamic shopping cart.",
      "Integrated Cloudinary for image uploads and used MongoDB for data storage.",
      "Built responsive UI with React, Tailwind CSS, and React Router.",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    codeUrl: "https://github.com/Vinay-hack47/E-Commerce-Platform",
    liveUrl: "https://e-commerce-platform-hbbx.onrender.com/"
  },
  {
    title: "ScheduleMail App (Gmail Clone)",
    techStack: ["ReactJS", "MongoDB", "Node.js", "Express", "Nodemailer", "Multer", "Node-Cron"],
    description: [
      "Built a Gmail-like email system with sending, scheduling (Node-Cron), and deleting emails.",
      "Used JWT for secure authentication and Nodemailer for email delivery.",
      "Enabled file attachments with Multer and secure post-send cleanup.",
      "Designed a modern UI with React and Tailwind CSS.",
    ],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=300&fit=crop",
    codeUrl: "https://github.com/Vinay-hack47/Gmail-Clone--MERN-STACK",
    liveUrl: "https://scheduled-mail-app-gmail-clone.onrender.com"
  },
  {
    title: "Expense Tracker",
    techStack: ["MongoDB", "Express", "ReactJS", "Node.js", "Redux Toolkit", "Redux Persist"],
    description: [
      "Built a responsive expense app with categorization, filtering, and real-time currency conversion.",
      "Implemented JWT-based authentication and persistent state with Redux Persist.",
      "UI built with Tailwind CSS and backend with Express and MongoDB.",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
    codeUrl: "https://github.com/Vinay-hack47/Expense-Tracker-MEARN-STACK",
    liveUrl: "https://expense.vinay.live"
  },
  {
    title: "LinkedIn Clone",
    techStack: ["Next.js", "ReactJS", "MongoDB", "TypeScript", "Clerk.js", "Cloudinary"],
    description: [
      "Developed a LinkedIn-style platform with post creation, likes, comments, and profile management.",
      "Used Clerk.js for auth and Cloudinary for images.",
      "Next.js API routes handled backend logic.",
      "UI is fully responsive and real-time interaction enabled.",
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    codeUrl: "https://github.com/Vinay-hack47/linkedin-clone",
    liveUrl: "https://linkedin.vinay.live"
  },
  {
    title: "Job Portal",
    techStack: ["ReactJS", "Node.js", "MongoDB", "Express.js", "Redux", "Cloudinary"],
    description: [
      "Full-stack job portal with JWT auth and role-based features for recruiters and applicants.",
      "Implemented job posting, tracking, and profile management.",
      "Used Redux Toolkit for state management and deployed for production.",
    ],
    image: "https://www.webmediatricks.com/uploaded_files/product/1703848338.jpg",
    codeUrl: "https://github.com/Vinay-hack47/Job-Portal-MERN-STACK-",
    liveUrl: "https://career-path-hqsu.onrender.com"
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium text-gray-700">Tech Stack:</span>{" "}
                  {project.techStack.join(", ")}
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-4">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                    onClick={() => window.open(project.codeUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
