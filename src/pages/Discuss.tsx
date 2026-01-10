import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import Speech from "@/components/Speech";

const Discuss = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Speech />
      </main>
      <Footer />
    </div>
  );
};

export default Discuss;
