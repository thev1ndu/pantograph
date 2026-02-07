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
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* <div className="inline-flex items-center space-x-2 border border-primary/20 bg-primary/10 rounded-full px-3 py-1 mb-8 backdrop-blur-md">
             <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
             <span className="text-sm font-medium text-primary-foreground">
               Next-Gen AI Editor
             </span>
           </div> */}

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
            Redefine your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-600 animate-shine bg-size-[200%_auto]">
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
              className="bg-primary hover:bg-primary/90 text-background rounded-full px-8 h-12 text-base shadow-[0_0_20px_-5px_hsl(200_100%_50%/0.5)] hover:shadow-[0_0_30px_-5px_hsl(200_100%_50%/0.6)] transition-all duration-300"
            >
              Start Editing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("features")}
              className="rounded-full px-8 h-12 text-base border-white/10 hover:bg-white/5 hover:border-primary/50 transition-all duration-300"
            >
              Explore Features
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 shadow-[0_0_10px_hsl(142_76%_36%)]" />
              Free Plan Available
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 shadow-[0_0_10px_hsl(217_91%_60%)]" />
              No Credit Card Required
            </div>
          </div>
        </motion.div>

        {/* Right Content - Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group perspective-1000"
        >
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-cyan-500/30 to-blue-600/30 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative transform group-hover:rotate-y-2 transition-transform duration-500 will-change-transform">
                <Slider />
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
