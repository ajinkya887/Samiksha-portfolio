const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-center mb-10 
                       text-blue-700 tracking-wide"
        >
          About Me
        </h2>

        {/* Card */}
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-white shadow-lg">
          <p className="text-gray-700 text-lg leading-relaxed">
            I am an MBA Marketing student (2024–2026) based in Pune with
            hands-on experience in Digital Marketing and Sales. I enjoy market
            research, SEO, and planning marketing strategies backed by data.
            Strong team collaboration skills with experience in communicating
            with clients and internal teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
