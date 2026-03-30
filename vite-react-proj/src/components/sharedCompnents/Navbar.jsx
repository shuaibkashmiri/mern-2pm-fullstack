import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <div className="nav">
        <h3>Logo</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to={`${props.liItem}`}>{props.liItem}</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
