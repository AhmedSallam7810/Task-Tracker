import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copy right &copy;</p>

      <Link to="/about">about</Link>
    </footer>
  );
};

export default Footer;
