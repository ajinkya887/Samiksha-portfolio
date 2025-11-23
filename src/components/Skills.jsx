const skills = [
  "SEO",
  "Market Research",
  "Mobile Marketing",
  "Time Management",
  "Communication",
  "Keyword Research",
  "Team Collaboration",
  "Data Collection",
  "Sales Techniques",
  "Leadership",
  "HTML & CSS Basics",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-10 
                     text-blue-700 tracking-wide"
        >
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="py-4 px-6 bg-white rounded-xl shadow-md 
                         text-center text-gray-700 font-medium 
                         border border-blue-100 
                         hover:shadow-lg hover:scale-105 
                         transition-all duration-200 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
