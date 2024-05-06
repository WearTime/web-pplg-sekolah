/* eslint-disable react/prop-types */
import NavList from "../../Elements/NavList";
import NavLogo from "../../Elements/NavLogo";

const SideBar = ({ isOpen, handleIsOpen, handleActive, active }) => {
  return (
    <div className={`nav-sidebar ${isOpen ? "active" : ""}`}>
      <div className="nav-sidebar-logo">
        <NavLogo />
        <button className="close-btn" onClick={handleIsOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <ul className="nav-sidebar-list">
        <NavList
          href="#home"
          onClick={() => handleActive("Home")}
          style={
            active == "Home"
              ? { color: "white" }
              : { color: "rgb(211, 206, 206)" }
          }
        >
          Home
        </NavList>
        <NavList
          href="#about"
          onClick={() => handleActive("About")}
          style={
            active == "About"
              ? { color: "white" }
              : { color: "rgb(211, 206, 206)" }
          }
        >
          About PPLG
        </NavList>
        <NavList
          href="#language"
          onClick={() => handleActive("Language")}
          style={
            active == "Language"
              ? { color: "white" }
              : { color: "rgb(211, 206, 206)" }
          }
        >
          Programming Language
        </NavList>
      </ul>
    </div>
  );
};

export default SideBar;
