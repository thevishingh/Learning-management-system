import Header from "@/components/Header";
import Banner from "../components/Banner";
import FooterSection from "@/components/footer";
import Courses from "../components/courses";
import FeaturesSectionDemo from "@/components/features-section-demo-1";
import Teams from "../components/Teams";
import CircularGallery from "@/Reactbits/CircularGallery/CircularGallery";
import BestCourses from "../components/BestCourses";
import FAQ from "../components/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <FeaturesSectionDemo />
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#000000"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
      <BestCourses />
      <Courses />
      <Teams />
      <FAQ/>
      <FooterSection />
    </>
  );
}
1;
