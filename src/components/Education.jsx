const education = [
  {
    degree: "MBA – Marketing",
    college: "SMT. Hiraben Nanavati Institute of Management, Pune",
    year: "2024–2026",
  },
  {
    degree: "B.Sc. CS & IT – GPA 74.56%",
    college: "MGM College of CS & IT, Nanded",
    year: "2020–2023",
  },
  {
    degree: "HSC – GPA 65.38%",
    college: "Blue Bell's Jr. College, Nanded",
    year: "2017–2019",
  },
  {
    degree: "SSC – GPA 78.40%",
    college: "Nutan Vidhyalay High School, Umri",
    year: "2016–2017",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Education
        </h2>

        {/* Timeline container */}
        <div className="relative border-l-4 border-blue-200 pl-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-10 ml-4 p-6 bg-white rounded-xl shadow-lg border border-blue-100
                         hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow"></div>

              <h3 className="text-xl font-semibold text-gray-800">
                {edu.degree}
              </h3>
              <p className="text-gray-600">{edu.college}</p>
              <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
