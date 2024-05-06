import { useState } from "react";
import NavBar from "../../Fragments/Navbar";
import SideBar from "../../Fragments/Sidebar";
import NavLogo from "../../Elements/NavLogo";

const NavBarLayOut = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  function handleActive(title) {
    setActive(title);
  }
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <NavLogo onClick={() => handleActive("")} />
      </div>
      <div className="nav-menu">
        <SideBar
          isOpen={isOpen}
          handleIsOpen={handleIsOpen}
          handleActive={handleActive}
          active={active}
        />
        <NavBar
          handleIsOpen={handleIsOpen}
          active={active}
          handleActive={handleActive}
        />
      </div>
    </nav>
  );
};

export default NavBarLayOut;
