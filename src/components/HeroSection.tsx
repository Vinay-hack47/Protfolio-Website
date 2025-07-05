
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-gray-100"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        Hi, I'm <span className="text-blue-600">Vinay Rajput</span>
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 max-w-xl mb-6">
        Full Stack Web Developer with a passion for building modern, fast, and user-friendly web applications.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </a>

        <a
          href="https://drive.google.com/file/d/1TmqhAjRyyfsxXjWEr6QH35R5fybqDPvf/view" // Update path to your actual CV file
          download
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
