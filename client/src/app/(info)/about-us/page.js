

"use client";

import { useEffect, useState } from "react";
import { Lightbulb, Handshake, TrendingUp, ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aboutSections = [
    {
      title: "Our Company",
      icon: <Lightbulb className="text-primary text-3xl" />,
      description:
        "AAS International Private Limited is a dynamic, multi-sector company excelling in mining, IT, hospitality, and agriculture. Committed to innovation and growth, we focus on creating job opportunities and fostering skilled labor development.",
      listItems: [
        "Diverse Expertise",
        "Tailored Solutions",
        "Commitment to Excellence",
        "Innovation-Driven",
        "Collaborative Approach",
        "Proven Track Record",
      ],
      image: "assets/about01.jpg",
    },
    {
      title: "Our Mission",
      icon: <Handshake className="text-primary text-3xl" />,
      description:
        "Our mission is to empower businesses by providing innovative and AI-driven solutions that solve complex challenges and streamline operations. We are committed to unlocking the full potential of your data, enabling smarter decisions and driving growth through cutting-edge technology.",
      image: "assets/about02.jpg",
      reverseLayout: true,
    },
    {
      title: "Our Vision",
      icon: <TrendingUp className="text-primary text-3xl" />,
      description:
        "We envision a future where businesses thrive through seamless automation, data intelligence, and transformative technology. Our goal is to lead the way in delivering solutions that not only meet today's needs but also prepare companies for the challenges of tomorrow.",
      image: "assets/about03.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-background to-background/95 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-0 h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5"
      >
        <div className="absolute inset-0 bg-[url('/assets/about02.jpg')] opacity-10" />
        <div className="container mx-auto text-left z-10 px-4">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Innovating Tomorrow's Solutions Today
          </motion.p>
        </div>
      </motion.section>

      {/* About Sections */}
      <section className="py-16 space-y-16">
        {aboutSections.map((section, index) => (
          <div key={index} className="container mx-auto px-4">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                section.reverseLayout ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image Section */}
              <motion.div
                className={`relative ${section.reverseLayout ? "lg:col-start-2" : ""}`}
                initial={{ x: section.reverseLayout ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={`/${section.image}`}
                    alt={`about-img-${index}`}
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
              </motion.div>

              {/* Text Section */}
              <motion.div
                initial={{ x: section.reverseLayout ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  {section.icon}
                  <h2 className="text-3xl font-bold">{section.title}</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{section.description}</p>

                {section.listItems && (
                  <ul className="grid grid-cols-2 gap-4">
                    {section.listItems.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <ArrowRight className="text-primary text-sm" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}




