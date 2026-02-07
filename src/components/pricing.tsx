"use client";
import { Check, Crown, Star, Zap } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    description: "For personal use",
    features: [
      "3 edits / day",
      "720p export",
      "Basic tools",
    ],
    cta: "Start Free",
    popular: false,
    icon: Star,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "For creators",
    features: [
      "Unlimited edits",
      "4K export",
      "Magic tools",
      "Commercial use",
    ],
    cta: "Upgrade",
    popular: true,
    icon: Crown,
  },
];

const Pricing = () => {
  const scrollToEditor = () => {
    const element = document.getElementById("editor");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-12 border-t border-white/5 relative bg-black/20">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Header (Left) */}
          <div className="md:w-1/3 text-left">
            <h2 className="text-2xl font-bold mb-3 text-foreground">
              Pricing
            </h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Start for free. Upgrade for professional power. <br className="hidden md:block"/>
              Cancel usage anytime.
            </p>
            <div className="flex gap-2">
                 <div className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground">
                    No hidden fees
                 </div>
                 <div className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground">
                    Cancel anytime
                 </div>
            </div>
          </div>

          {/* Cards (Right) */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-5 rounded-none border transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary/5 border-primary/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            {plan.name}
                            {plan.popular && <span className="text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-1.5 py-0.5 rounded">Pro</span>}
                        </h3>
                        <p className="text-xs text-muted-foreground">{plan.description}</p>
                    </div>
                    <div className="text-right">
                         <span className="text-xl font-bold text-foreground">{plan.price}</span>
                         <span className="text-xs text-muted-foreground">{plan.period}</span>
                    </div>
                </div>

                <div className="space-y-2 mb-5">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  size="sm"
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full h-8 text-xs rounded-full ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-white/10 hover:bg-white/5"}`}
                  onClick={scrollToEditor}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;