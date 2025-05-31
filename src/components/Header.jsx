import { Link } from "react-router-dom";
export function Header() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2 header">
          <div className="container">
            <Link to="/" className="brand-logo">
              SPA React Project
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="https://github.com/Stanislave0">Repository</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }