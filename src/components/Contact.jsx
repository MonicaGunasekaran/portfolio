import React from "react";
import Phone from "/assets/Phone.png";
import linkedinlogo from "/assets/linkedinlogo.png";
import github from "/assets/github.png";
import Mail from "/assets/Mail.png";
import Insta from "/assets/Insta.png";

const contactInfo = [
  { icon: Phone, text: "+91 93454 14250", link: "tel:+919345414250" },
  { icon: Mail, text: "gmonica2593@gmail.com", link: "mailto:gmonica2593@gmail.com" },
  { icon: github, text: "github.com/MonicaGunasekaran", link: "https://github.com/MonicaGunasekaran" },
  { icon: Insta, text: "instagram.com/monica_sekaran", link: "https://www.instagram.com/monica_sekaran/" },
  { icon: linkedinlogo, text: "linkedin.com/in/monicagunasekaran", link: "https://linkedin.com/in/monicagunasekaran" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-[#6A2C91] mb-10">📬 Contact Me</h2>

      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        {contactInfo.map((contact, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md w-full max-w-md transition-transform duration-300 hover:scale-105"
          >
            <img src={contact.icon} alt="Contact Icon" className="w-8 h-8" />
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-700 hover:text-[#6A2C91] transition-colors duration-300"
            >
              {contact.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
