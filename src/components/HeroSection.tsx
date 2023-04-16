import { heroData } from "../pages/Home";
import "./HeroSection.css";

interface Props {
  data: heroData;
}
const HeroSection = ({ data }: Props) => {
  return (
    <div className="hero-container">
      <video src={data.video} autoPlay loop muted />
      <h1>{data.heading && data.heading}</h1>
      {data.para && <p>{data.para}</p>}
    </div>
  );
};

export default HeroSection;
