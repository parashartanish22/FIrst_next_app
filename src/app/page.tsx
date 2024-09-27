import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/featuredcourses";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialCard from "./components/TestimonialCard";
import UpcomingWebinar from "./components/UpcomingWebinar";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.02]">
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <TestimonialCard />
        <UpcomingWebinar></UpcomingWebinar>
        <Instructors />
        <Footer />
      </main>
    </>
  );
}
