import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    if (!formData.name || !formData.email || !formData.message) {
      e.preventDefault();
      alert("Please fill out all fields.");
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600 text-sm">+91 9016062778</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600 text-sm">rajputvinay1212@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600 text-sm">Vadodara, Gujarat, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4 w-full">
            <form
              action="https://formspree.io/f/mnnvrklz"
              method="POST"
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-md p-6 space-y-6 border border-gray-200"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition cursor-pointer"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>

            {submitted && (
              <div className="flex items-center text-green-600 mt-4 space-x-2 text-sm">
                <CheckCircle className="w-5 h-5" />
                <span>Thanks! Your message has been sent.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
