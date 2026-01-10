import { Button } from "@/components/ui/button";
import { Coffee, Mic, Sparkles } from "lucide-react";

const Speech  = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <Mic className="text-primary text-center border h-16 w-16 mx-auto mb-6 p-4 rounded-full bg-primary/10 animate-pulse
      "/>
      <p className="text-center text-xs ">Partagez <br />vos réflexions et vos idées <br />avec nous
</p>
    </section>
  );
};

export default Speech
