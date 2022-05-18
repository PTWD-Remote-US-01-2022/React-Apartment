import { NavLink } from 'react-router-dom';

const styles = {
  display: 'flex',
  justifyContent: 'space-around',
};

const activeStyle = ({ isActive }) => {
  return { color: isActive ? 'Red' : 'Green' };
};

const NavBar = () => {
  return (
    <>
      <div style={styles}>
        <NavLink to="/" style={activeStyle}>
          Home
        </NavLink>
        <NavLink to="apartments" style={activeStyle}>
          Apartments
        </NavLink>
        <NavLink to="addaparment" style={activeStyle}>
          Add an apartment
        </NavLink>
      </div>
      <hr />
    </>
  );
};
export default NavBar;
