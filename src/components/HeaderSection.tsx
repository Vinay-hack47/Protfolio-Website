import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const HeaderSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Name */}
        <h1 className="text-xl font-bold text-gray-800">Vinay Rajput</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons (Desktop only) */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="https://github.com/Vinay-hack47"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/vinay-rajput-9aaa96281"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:rajputvinay1212@gmail.com"
            className="text-gray-600 hover:text-red-600 transition"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* Social Links for Mobile */}
            <div className="flex space-x-4 pt-4 border-t border-gray-200">
              <a
                href="https://github.com/Vinay-hack47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vinay-rajput-9aaa96281"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rajputvinay1212@gmail.com"
                className="text-gray-600 hover:text-red-600 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;
