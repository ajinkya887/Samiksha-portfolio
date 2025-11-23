const experience = [
  {
    role: "Digital Marketing Intern",
    company: "Digital Solution Tech",
    duration: "03/2025 – 05/2025",
    tasks: [
      "Hands-on SEO and content optimization experience",
      "Performed keyword research & secondary data analysis",
      "Optimized multimedia assets for SEO",
      "Improved communication between departments",
      "Maintained a marketing database",
    ],
  },
  {
    role: "Sales & Marketing Executive",
    company: "Infratech Realty Pvt. Ltd, Pune",
    duration: "05/2025 – 08/2025",
    tasks: [
      "Assisted in client meetings & property viewings",
      "Follow-ups and sales admin tasks",
      "Handled customer inquiries",
      "Cold calling and networking",
      "Identified customer needs",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Experience
        </h2>

        <div className="relative border-l-4 border-blue-200 pl-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="mb-10 ml-4 p-6 bg-white rounded-xl shadow-lg border border-blue-100 
                         hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow"></div>

              <h3 className="text-xl font-semibold text-gray-800">
                {exp.role}
              </h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>

              <ul className="text-gray-700 list-disc ml-5 space-y-1">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
