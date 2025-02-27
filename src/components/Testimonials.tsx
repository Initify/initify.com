/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechVision",
    content:
      "Initify transformed our digital presence completely. Their team's expertise in Next.js and modern web technologies helped us achieve a 40% increase in user engagement.",
    image: "/api/placeholder/64/64",
  },
  {
    name: "Michael Chen",
    role: "Founder at StartupX",
    content:
      "Working with Initify was a game-changer for our startup. They delivered an exceptional product that exceeded our expectations, and their ongoing support has been invaluable.",
    image: "/api/placeholder/64/64",
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Director at InnovateCorp",
    content:
      "The AI-powered solution Initify developed for our marketing team has streamlined our workflows and provided valuable insights. I highly recommend their services.",
    image: "/api/placeholder/64/64",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Don{`'`}t just take our word for it—hear from our satisfied clients
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`bg-white p-8 rounded-xl shadow-sm ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </motion.div>
            ))}

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
