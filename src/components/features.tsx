"use client";
import React from "react";
import { Crop, Expand, Scissors, Type, Zap } from "lucide-react";
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
    <section id="features" className="w-full py-24 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Feature Specifications
          </h2>
          <p className="text-lg text-muted-foreground">
             Professional-grade capabilities for high-volume workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 border-b border-r border-white/10 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                   <feature.icon size={20} />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
          {/* Filler div to complete the grid if odd number */}
          {features.length % 3 !== 0 && (
             <div className="hidden md:block border-b border-r border-white/10" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;