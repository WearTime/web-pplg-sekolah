import Header from "../../Elements/Header";
import { ComputersCanvas } from "../../canvas";

const Hero = () => {
  return (
    <div className="hero-content">
      <Header classname="hero-title hero-h4">JURUSAN</Header>
      <Header classname="hero-h2">PERKEMBANGAN</Header>
      <Header classname="hero-h1">PERANGKAT LUNAK DAN GIM</Header>
      <ComputersCanvas />

      {/* <h4 className="hero-title hero-h4">JURUSAN</h4>
      <h2 className="hero-h2">PERKEMBANGAN</h2>
      <h1 className="hero-h1">PERANGKAT LUNAK DAN GIM</h1> */}
    </div>
  );
};

export default Hero;
