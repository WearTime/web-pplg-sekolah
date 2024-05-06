import { aboutThumb } from "../../../assets";
import Header from "../../Elements/Header";
import Image from "../../Elements/Image";
import Paragraph from "../../Elements/Paragraph";
import { CirclePurpleCanvas } from "../../canvas";

const About = () => {
  return (
    <>
      <CirclePurpleCanvas />
      <Header classname="about-title">ABOUT PPLG</Header>
      <Paragraph classname="about">
        PPLG ( Pengembangan Perangkat Lunak dan GIM ) merupakan jurusan yang
        sebelumnya bernama RPL ( Rekayasa Perangkat Lunak ). Perubahan ini
        dikarenakan ditunjuknya SMK Negeri 4 Bandar Lampung menjadi sekolah
        Pusat Keunggulan sehingga Kurikulum kelas X mengikuti peraturan yang
        ada.
      </Paragraph>
      <Image src={aboutThumb} alt="About Image" classname="about-img" />
    </>
  );
};

export default About;
