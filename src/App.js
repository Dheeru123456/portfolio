import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = "Dheeraj Joshi | Portfolio";
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.message) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const projects = [
    {
      title: "AIW",
      description: "Implemented Video KYC, Video Calling, and SAMD document modules.",
      image: "/images/aiwImg.png",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Digital Onboarding Portal",
      description: "Independent loan process app with onboarding and document features.",
      image: "/images/digitalImg.png",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Delvium",
      description: "Due diligence platform built with Vue.js for M&A evaluations.",
      image: "/images/delviumImg.png",
      color: "from-pink-500 to-orange-500"
    },
    {
      title: "Emiza",
      description: "Logistics and warehousing system for inventory and shipping.",
      image: "/images/emizaImg.png",
      color: "from-yellow-400 to-red-500"
    },
    {
      title: "HRMS – CollectivWork",
      description: "Worked on Leave, Attendance, Offboarding, PMS and more.",
      image: "/images/hrmsImg.jpg",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "CRM System",
      description: "Client relationships and lead management with full activity tracking.",
      image: "/images/crmImg.jpg",
      color: "from-emerald-400 to-teal-500"
    },
  ];

  const skills = [
    "NEXT.js", "React.js", "Vue.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS",
    "SCSS/SASS", "Material-UI (MUI)", "NEUTRALINO.js", "Redux", "Confluence", "Jira", "Babel",
    "Ant Design", "AG Grid", "Apex Chart", "Figma", "Webpack", "RESTful APIs", "Axios", "Fetch API",
    "ES6", "Data Structures", "System Design", "Git"
  ];

  return (
    <main className={`${darkMode ? "bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white" : "bg-gradient-to-tr from-white via-gray-100 to-gray-200 text-black"} min-h-screen font-sans`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <section className="flex flex-col items-center justify-center h-screen text-center">
        <img src='/images/dheerajImg.jpg' alt="Dheeraj Joshi" className="w-32 h-32 rounded-full mb-6 border-4 border-white shadow-lg object-cover" />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Dheeraj Joshi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl md:text-2xl text-gray-400"
        >
          Frontend Developer | UI/UX Enthusiast | Trainer at Tech Superior
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="text-md md:text-lg text-gray-400 mt-2"
        >
          2.5 Years of Industry Experience
        </motion.p>
        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-500"
        >
          Download Resume
        </a>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 border-b pb-2 border-gray-700">
            About Me
          </h2>
          <p className="text-lg text-gray-300">
            I am a passionate frontend developer with 2.5 years of experience. I specialize in building scalable, responsive, and accessible UIs using React and Vue.js. Besides development, I actively train freshers and teams in frontend technologies and UI/UX design.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 border-b pb-2 border-gray-600 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-white">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-16 px-6 bg-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 border-b pb-2 border-gray-600 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-lg transform hover:scale-105 transition-transform duration-300`}
              >
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover object-top rounded mb-4" />
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b pb-2 border-gray-700">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white"
              rows={4}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm bg-gray-900">
        © 2025 Dheeraj Joshi. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
