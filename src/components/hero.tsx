"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Slider from "@/components/slider";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* <div className="inline-flex items-center space-x-2 border border-orange-500/20 bg-orange-500/10 rounded-full px-3 py-1 mb-8">
            <Sparkles className="h-3.5 w-3.5 text-orange-500" />
            <span className="text-sm font-medium text-orange-200">
              AI-Powered Editor
            </span>
          </div> */}

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
            Redefine your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">
              Visual Reality
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Transform photos instantly with Pantograph. 
            Background removal, generative fill, and quality enhancement—all in one seamless workflow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("editor")}
              className="bg-orange-600 hover:bg-orange-500 text-white rounded-full px-8 h-12 text-base"
            >
              Start Editing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("features")}
              className="rounded-full px-8 h-12 text-base border-white/10 hover:bg-white/5"
            >
              Explore Features
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
              Free Plan Available
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
              No Credit Card Required
            </div>
          </div>
        </motion.div>

        {/* Right Content - Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 blur-2xl opacity-50" />
            <Slider />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
