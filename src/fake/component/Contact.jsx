import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import  { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const formData = new FormData(e.target);
  
  toast.loading("Sending message...", { id: "sendToast" });
  
  try {
    const response = await fetch("https://formsubmit.co/ajax/abaytefera29@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();

    if (data.success === "true" || data.success === true) {
      toast.success("Message sent successfully!", { id: "sendToast" });
      e.target.reset();
    } else {
      toast.error(data.message || "Failed to send message.", { id: "sendToast" });
    }
  } catch (error) {
    toast.error("An error occurred. Please try again.", { id: "sendToast" });
  }
  
  setLoading(false);
};


  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-white px-4 py-20">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 md:p-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Me</h2>
        
        <form
          action="https://formsubmit.co/ajax/abaytefera29@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Prevent captcha, set redirect */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
          <input type="hidden" name="_template" value="box" />

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Your Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-500 hover:bg-gray-800"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-600 text-lg">Or find me on:</p>
          <div className="flex justify-center space-x-6 text-gray-700 text-2xl">
            <a href="mailto:abaytefera@gmail.com" title="Email" className="hover:text-yellow-500">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </a>
            <a href="https://github.com/abayteferagi" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-yellow-500">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
