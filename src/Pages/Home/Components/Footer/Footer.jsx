import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Context";
import "./Footer.css";

const Footer = () => {
  const {
    authState: { token }
  } = useAuth();

  return (
    <footer className="lp-footer">
      <div className="lp-footer-text">
        <h4>About US</h4>
        <p>
          Discover the joy of reading and unlock the magic that lies within the
          pages of a book at Bookshelf. Start your literary journey with us
          today!
        </p>
      </div>
      <ul className="footer-nav-links">
        <li>
          <Link to="https://www.linkedin.com/in/drishya-thekkumbad-26101424b/">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/products">Trending</Link>
        </li>
        <li>
          <Link to="/products">New Releases</Link>
        </li>
      </ul>
      <ul className="footer-nav-links">
        <li>
          <Link to={token ? "/cart" : "/"}>My Cart</Link>
        </li>
        <li>
          <Link to={token ? "/user" : "/signup"}>Sign up</Link>
        </li>
        <li>
          <Link to={token ? "/user" : "/login"}>Login</Link>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
