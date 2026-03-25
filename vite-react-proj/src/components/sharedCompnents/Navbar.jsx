const Navbar = (props) => {
  return (
    <>
      <div className="nav">
        <h3>Logo</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>{props.liItem}</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
