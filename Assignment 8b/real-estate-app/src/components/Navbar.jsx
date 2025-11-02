import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Real Estate</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
