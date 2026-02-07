import Features from "@/components/features";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
};

export default Page;
