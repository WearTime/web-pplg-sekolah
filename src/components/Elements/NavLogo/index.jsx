/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { logo } from "../../../assets";

const NavLogo = ({ onClick }) => {
  return (
    <Link to="/" onClick={onClick}>
      <img src={logo} alt="" className="logo" />
    </Link>
  );
};

export default NavLogo;
