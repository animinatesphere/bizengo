"use client";
import { useState } from "react";
import Navbar2 from "../navbar/Navbar2";
import Footer from "../footer/Footer";

export default function Page() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  }

  return (
    <>
      <div className="bg-[#f1ece5] min-h-screen">
        <div className="container mx-auto px-4 pt-12">
          <Navbar2 />

          <div className="min-h-screen flex items-center justify-center  px-4 py-12">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#99895e] to-[#cfc5aa] bg-clip-text text-transparent">
                Contact Us for Updates & Suggestions
              </h1>
              <p className="text-center text-gray-700 mb-8 text-base md:text-lg">
                Want to see new features or improvements in Bizengo? Let us know
                what you need! Fill out the form below and our team will reach
                out with updates.
              </p>
              {submitted ? (
                <div className="text-center py-8">
                  <h2 className="text-xl font-semibold text-amber-600 mb-2">
                    Thank you!
                  </h2>
                  <p className="text-gray-700">
                    Your feedback has been received. We'll keep you updated on
                    new features.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-800 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-amber-600/30 rounded-lg focus:outline-none focus:border-amber-600 bg-[#f9f6ef] transition-all duration-200 focus:ring-2 focus:ring-amber-600"
                      placeholder="Your Name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-800 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-amber-600/30 rounded-lg focus:outline-none focus:border-amber-600 bg-[#f9f6ef] transition-all duration-200 focus:ring-2 focus:ring-amber-600"
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-800 mb-1"
                    >
                      What would you like to see on Bizengo?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-amber-600/30 rounded-lg focus:outline-none focus:border-amber-600 bg-[#f9f6ef] resize-none transition-all duration-200 focus:ring-2 focus:ring-amber-600"
                      placeholder="Describe your idea, feature, or update..."
                      autoComplete="off"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg shadow-lg hover:from-amber-700 hover:to-amber-600 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  >
                    Send Feedback
                  </button>
                </form>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
