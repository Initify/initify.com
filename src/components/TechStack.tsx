"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", icon: "/next-js.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "Tailwind CSS", icon: "/tailwind.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "GraphQL", icon: "/graphql.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "PostgreSQL", icon: "/postgresql.svg" },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Our <span className="gradient-text">Tech Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We use cutting-edge technologies to create fast, scalable, and
            maintainable solutions
          </motion.p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>
                <span className="text-gray-700 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
