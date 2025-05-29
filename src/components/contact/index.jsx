import React, { useState, useRef, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import Title from "../Title";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ error: "", success: "" });
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      return "Please enter a valid email";
    }
    if (!formData.message.trim()) return "Message is required";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setStatus({ error, success: "" });
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus({ 
        error: "", 
        success: "Message sent successfully!" 
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      setStatus({ 
        error: "Failed to send message. Please try again.", 
        success: "" 
      });
    }
  };

  return (
    <section
      id="contact"
      className={`w-full py-20 border-b-[1px] ${
        theme === 'dark' ? 'border-b-bodyColor-dark/50' : 'border-b-bodyColor-light/50'
      } scroll-mt-[100px]`}
    >
      <div className="flex justify-center items-center text-center">
        <Title title="GET IN TOUCH" des="Let's Connect" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto mt-8"
      >
        <div className={`p-6 rounded-2xl ${
          theme === 'dark'
            ? 'bg-bodyColor-dark/80 shadow-lg'
            : 'bg-bodyColor-light/80 shadow-md'
        } border-2 ${
          theme === 'dark'
            ? 'border-designColor-dark/20 hover:border-designColor-dark/40'
            : 'border-designColor-light/20 hover:border-designColor-light/40'
        } transition-all duration-300`}>
          
          <div className="text-center mb-6">
            <h3 className={`text-xl font-semibold ${
              theme === 'dark' ? 'text-designColor-dark' : 'text-designColor-light'
            }`}>Say Hello!</h3>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-fontColor-dark/70' : 'text-fontColor-light/70'
            }`}>Drop me a message below</p>
          </div>

          {status.error && (
            <div className="mb-4 p-2 text-sm rounded-lg bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300">
              {status.error}
            </div>
          )}
          {status.success && (
            <div className="mb-4 p-2 text-sm rounded-lg bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-300">
              {status.success}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className={`w-full px-3 py-2 text-sm rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-bodyColor-dark/70 border-designColor-dark/30 placeholder-fontColor-dark/50'
                    : 'bg-bodyColor-light/70 border-designColor-light/30 placeholder-fontColor-light/50'
                } focus:outline-none focus:ring-1 ${
                  theme === 'dark'
                    ? 'focus:ring-designColor-dark/50'
                    : 'focus:ring-designColor-light/50'
                } transition-all`}
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className={`w-full px-3 py-2 text-sm rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-bodyColor-dark/70 border-designColor-dark/30 placeholder-fontColor-dark/50'
                    : 'bg-bodyColor-light/70 border-designColor-light/30 placeholder-fontColor-light/50'
                } focus:outline-none focus:ring-1 ${
                  theme === 'dark'
                    ? 'focus:ring-designColor-dark/50'
                    : 'focus:ring-designColor-light/50'
                } transition-all`}
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (optional)"
                className={`w-full px-3 py-2 text-sm rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-bodyColor-dark/70 border-designColor-dark/30 placeholder-fontColor-dark/50'
                    : 'bg-bodyColor-light/70 border-designColor-light/30 placeholder-fontColor-light/50'
                } focus:outline-none focus:ring-1 ${
                  theme === 'dark'
                    ? 'focus:ring-designColor-dark/50'
                    : 'focus:ring-designColor-light/50'
                } transition-all`}
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject (optional)"
                className={`w-full px-3 py-2 text-sm rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-bodyColor-dark/70 border-designColor-dark/30 placeholder-fontColor-dark/50'
                    : 'bg-bodyColor-light/70 border-designColor-light/30 placeholder-fontColor-light/50'
                } focus:outline-none focus:ring-1 ${
                  theme === 'dark'
                    ? 'focus:ring-designColor-dark/50'
                    : 'focus:ring-designColor-light/50'
                } transition-all`}
              />
            </div>

            <div>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                className={`w-full px-3 py-2 text-sm rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-bodyColor-dark/70 border-designColor-dark/30 placeholder-fontColor-dark/50'
                    : 'bg-bodyColor-light/70 border-designColor-light/30 placeholder-fontColor-light/50'
                } focus:outline-none focus:ring-1 ${
                  theme === 'dark'
                    ? 'focus:ring-designColor-dark/50'
                    : 'focus:ring-designColor-light/50'
                } transition-all`}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-lg text-sm font-medium ${
                theme === 'dark'
                  ? 'bg-designColor-dark text-white hover:bg-designColor-dark/80'
                  : 'bg-designColor-light text-white hover:bg-designColor-light/80'
              } transition-all active:scale-95`}
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
