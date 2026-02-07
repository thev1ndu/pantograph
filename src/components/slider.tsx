"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";

const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Add global event listeners for smoother dragging outside the component
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove as any);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove as any);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove as any);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Real before/after images
  const beforeImage =
    "https://ik.imagekit.io/sjbr5usgh/pixora-uploads/Roadster_Hero_W0sp0doWK.webp";
  const afterImage =
    "https://ik.imagekit.io/sjbr5usgh/pixora-uploads/Roadster_Hero_W0sp0doWK.webp?tr=e-changebg-prompt-Change%20scene%20to%20snowy%20alpine%20road%2C%20cold%20blue%20tones%2C%20clean%20snowbanks%3B%20keep%20car%20untouched";

  return (
    <motion.div
      className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/50"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div
        ref={containerRef}
        className="relative w-full aspect-16/10 select-none cursor-ew-resize group"
        onMouseDown={handleMouseDown}
      >
        {/* Before Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={beforeImage}
            alt="Original"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white/90 border border-white/10 uppercase tracking-wider">
            Original
          </div>
        </div>

        {/* After Image (Foreground, clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={afterImage}
            alt="Processed"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/20 uppercase tracking-wider">
            Processed
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <div className="w-8 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center">
                <GripVertical className="h-4 w-4 text-black/50" />
             </div>
          </div>
        </div>
      </div>
      
      {/* Footer / Description */}
      <div className="px-6 py-4 bg-black/40 backdrop-blur-sm flex justify-between items-center border-t border-white/5">
        <div className="text-sm font-medium text-gray-300">
           Generative Background Replacement
        </div>
        <div className="text-xs text-muted-foreground uppercase tracking-widest">
           Drag to compare
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;
