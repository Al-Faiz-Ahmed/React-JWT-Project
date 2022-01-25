import React from "react";
import "../css/homeNavbar.css";
import { Link } from "react-router-dom";
export default function HomeNavbar() {
  return (
    <>
      <header>
        <nav>
          <div className="brand">
            <h4>
              <Link to="/" className="brandName defaultLink">
                amazona
              </Link>
            </h4>
          </div>
          <div>
            <ul className="ctasBtn">
              <li>
                <Link to='/' className="defaultLink">Cart</Link>
              </li>
              <li>
                <Link to='/' className="defaultLink">Sign up</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
