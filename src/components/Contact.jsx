import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Contact
        </h2>

        {/* Contact Card */}
        <div
          className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg 
                     border border-blue-100 hover:shadow-xl 
                     hover:scale-[1.02] transition-all duration-300"
        >
          {/* Phone */}
          <div className="flex items-center gap-4 mb-6">
            <FiPhone className="text-blue-600 text-3xl" />
            <p className="text-gray-700 text-lg">
              <strong>Phone:</strong> +91-7776819952
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 mb-6">
            <FiMail className="text-blue-600 text-3xl" />
            <p className="text-gray-700 text-lg">
              <strong>Email:</strong> samiksha.jamdade0@gmail.com
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <FiMapPin className="text-blue-600 text-3xl" />
            <p className="text-gray-700 text-lg">
              <strong>Location:</strong> Pune, Maharashtra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
