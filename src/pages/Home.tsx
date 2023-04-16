import Navbar from "../components/Navbar";
import "../App.css";
import Cards from "../components/Cards";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
export interface heroData {
  heading: string;
  para: string;
  video: string;
}

const heroData = {
  heading: "قناة مسجد الموسوي الكبير",
  para: "من مسجد الموسوي الكبير والى العالم لأحياء شعائر آل الرسول الأعظم تبث قناة مسجد الموسوي الكبير بالبصرة لنشر علوم اهل البيت واحياء امرهم ,مجالس التعزية الحسينية ومجالس الوفايات ومراسم الأعياد والمواليد وكل امور احياء ذكر اهل البيت عليهم السلام",
  video: "/assets/videos/head.mp4",
};

const Home = () => {
  return (
    <div id="nayaRoot">
      <Navbar />
      <HeroSection data={heroData} />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
