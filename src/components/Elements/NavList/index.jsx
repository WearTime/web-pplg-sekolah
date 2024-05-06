/* eslint-disable react/prop-types */
const NavList = ({ href, onClick, children, style }) => {
  return (
    <li onClick={onClick}>
      <a href={href} style={style}>
        {children}
      </a>
    </li>
  );
};

export default NavList;
