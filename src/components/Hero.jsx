import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-800 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Samiksha Jamdade
            </span>
          </h2>

          <h3 className="text-2xl text-gray-700 mb-6 font-semibold">
            Marketing Manager • SEO Enthusiast • Sales Executive
          </h3>

          <p className="text-gray-600 max-w-lg text-lg leading-relaxed">
            Proactive and adaptable MBA Marketing fresher with strong
            problem-solving and communication skills. Passionate about SEO,
            consumer research, and driving customer engagement with modern
            marketing strategies.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white text-lg font-medium 
                       rounded-xl shadow-lg hover:bg-blue-700 transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <motion.img
            src={profile}
            alt="Samiksha Jamdade"
            className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white"
            animate={{
              y: [0, -12, 0], // Floating animation
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
