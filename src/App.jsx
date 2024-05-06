import { BrowserRouter } from "react-router-dom";
import NavBarLayOut from "./components/Layouts/Navbar";
import HeroLayOut from "./components/Layouts/HeroLayout";
import AboutLayOut from "./components/Layouts/AboutLayout";
import CardLayOut from "./components/Layouts/CardLayout";

const App = () => {
  return (
    <BrowserRouter>
      <NavBarLayOut />
      <HeroLayOut />
      <AboutLayOut />
      <CardLayOut />
    </BrowserRouter>
  );
};

export default App;
