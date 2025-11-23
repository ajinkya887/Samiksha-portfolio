const projects = [
  "SEO Audit using SEO Quake (College Project)",
  "Consumer Buying Behavior – Honda Bikes (Survey Based)",
  "Buying Behavior for Open Land Investment – SIP Project",
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg border border-blue-100 
                         hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Simple Icon */}
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <span className="text-white text-2xl font-bold">📘</span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">{project}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
