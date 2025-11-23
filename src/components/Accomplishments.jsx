const accomplishments = [
  "2nd Runner-up in Tech Expo (Graduation)",
  "1st Prize in Idea Generation Competition (MBA)",
];

const Accomplishments = () => {
  return (
    <section
      id="accomplishments"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Accomplishments
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {accomplishments.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg border border-blue-100
                         hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-start gap-4"
            >
              {/* Icon */}
              <div className="text-3xl">🏆</div>

              <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
