/* eslint-disable react/prop-types */
import NavList from "../../Elements/NavList";

const NavBar = ({ handleIsOpen, handleActive, active }) => {
  return (
    <ul className="nav-list">
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
      <NavList
        onClick={handleIsOpen}
        style={{ color: "white", cursor: "pointer" }}
      >
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
          className="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </NavList>
    </ul>
  );
};

export default NavBar;
