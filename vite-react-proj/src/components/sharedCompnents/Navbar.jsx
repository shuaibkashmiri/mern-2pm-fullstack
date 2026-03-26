const Navbar = (props) => {
  return (
    <>
      <div className="nav">
        <h3>Logo</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href={`${props.liItem}`}>{props.liItem}</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
