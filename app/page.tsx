import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ActionCards from "@/components/ActionCards";
import ServicesSlider from "@/components/ServicesSlider";
import NewsUpdates from "@/components/NewsUpdates";
import PatientStories from "@/components/PatientStories";
import AppDonate from "@/components/AppDonate";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen pt-[116px]">
      <Navbar />
      <HeroSlider />
      <ActionCards />
      <ServicesSlider />
      <NewsUpdates />
      <PatientStories />
      <AppDonate />
      <Footer />
    </main>
  );
}
