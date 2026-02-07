"use client";
import { Crop, Expand, Scissors, Type, Zap } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Scissors,
    title: "AI Background Removal",
    description: "Instantly remove backgrounds with pixel-perfect precision.",
  },
  {
    icon: Expand,
    title: "Generative Fill",
    description: "Expand images and fill missing details seamlessly.",
  },
  {
    icon: Zap,
    title: "Upscale & Enhance",
    description: "Boost resolution up to 4x while preserving details.",
  },
  {
    icon: Crop,
    title: "Smart Crop",
    description: "Auto-detect subjects for perfect thumbnails.",
  },
  {
    icon: Type,
    title: "Text Overlay",
    description: "Add professional watermarks and text.",
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full py-24 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div className="md:col-span-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Powerful Features
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Everything you need to transform your images, available in one
              seamless workflow.
            </p>
          </div>

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-5 group"
            >
              <div className="mt-1 p-2 rounded-lg bg-secondary/50 text-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;