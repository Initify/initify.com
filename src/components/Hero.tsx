"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <div className="absolute w-full h-full bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 sm:pt-24 lg:pt-32 pb-20">
        {/* Customer social proof */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-white py-2 px-6 rounded-full shadow-sm flex items-center">
            <div className="flex -space-x-2 mr-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                >
                  {/* Replace with actual images */}
                  <div className="w-full h-full bg-gradient-to-r from-pink-200 to-pink-300"></div>
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-medium">
              <span className="text-pink-600 font-bold">30K+</span> satisfied
              customers
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-slate-800">Enhance team </span>
            <span className="text-pink-600">performance</span>
            <br />
            <span className="text-slate-800">with seamless integration</span>
          </motion.h1>

          <motion.p
            className="text-slate-600 text-lg md:text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Work smarter, not harder, with our innovative platform
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="#get-started"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Get started for free
            </Link>
          </motion.div>
        </div>

        {/* App screenshot */}
        <motion.div
          className="mt-16 relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative z-10 overflow-hidden rounded-xl border border-gray-200 shadow-2xl bg-white">
            {/* Browser-like top bar */}
            <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>

            {/* App interface mockup */}
            <div className="grid grid-cols-12 bg-white">
              {/* Left sidebar */}
              <div className="col-span-1 border-r border-gray-200 py-4 flex flex-col items-center space-y-6">
                <div className="w-6 h-6 rounded-md bg-gray-200"></div>
                <div className="w-6 h-6 rounded-md bg-gray-200"></div>
                <div className="w-6 h-6 rounded-md bg-gray-200"></div>
                <div className="w-6 h-6 rounded-md bg-gray-200"></div>
              </div>

              {/* Main content area */}
              <div className="col-span-11 p-4">
                {/* Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-md bg-gray-200"></div>
                    <div className="w-24 h-4 rounded-md bg-gray-200"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-200"></div>
                  </div>
                </div>

                {/* Calendar view */}
                <div className="grid grid-cols-7 gap-4">
                  {/* Calendar header */}
                  <div className="col-span-7 grid grid-cols-4 gap-4 mb-4">
                    <div className="p-4 text-center">
                      <div className="text-xs text-gray-500 mb-1">MON</div>
                      <div className="text-lg font-bold">11</div>
                    </div>
                    <div className="p-4 text-center">
                      <div className="text-xs text-gray-500 mb-1">TUE</div>
                      <div className="text-lg font-bold">12</div>
                    </div>
                    <div className="p-4 text-center">
                      <div className="text-xs text-gray-500 mb-1">WED</div>
                      <div className="text-lg font-bold">13</div>
                    </div>
                    <div className="p-4 text-center">
                      <div className="text-xs text-gray-500 mb-1">THU</div>
                      <div className="text-lg font-bold">14</div>
                    </div>
                  </div>

                  {/* Calendar content */}
                  <div className="col-span-7 grid grid-cols-4 gap-4">
                    {/* Day 1 */}
                    <div className="h-32 relative">
                      <div className="absolute bottom-4 left-0 right-0 h-16 bg-pink-200 rounded-lg p-2">
                        <div className="w-2/3 h-3 bg-pink-300 rounded-full mb-2"></div>
                        <div className="flex -space-x-1">
                          <div className="w-6 h-6 rounded-full bg-pink-400 border-2 border-white"></div>
                        </div>
                      </div>
                    </div>

                    {/* Day 2 */}
                    <div className="h-32 relative">
                      <div className="absolute top-4 left-0 right-0 h-16 bg-blue-200 rounded-lg p-2">
                        <div className="w-2/3 h-3 bg-blue-300 rounded-full mb-2"></div>
                        <div className="flex -space-x-1">
                          <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white"></div>
                          <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white"></div>
                        </div>
                      </div>
                    </div>

                    {/* Day 3 */}
                    <div className="h-32 relative"></div>

                    {/* Day 4 */}
                    <div className="h-32 relative">
                      <div className="absolute top-4 left-0 right-0 h-16 bg-pink-200 rounded-lg p-2">
                        <div className="w-2/3 h-3 bg-pink-300 rounded-full mb-2"></div>
                        <div className="flex items-center justify-end">
                          <div className="w-10 h-4 bg-pink-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-200/50 rounded-full blur-xl"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200/50 rounded-full blur-xl"></div>
        </motion.div>
      </div>

      {/* Gradient orb decorations */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl -z-10"></div>

      {/* Add CSS for background grid pattern */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
}
