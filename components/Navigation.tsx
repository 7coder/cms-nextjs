import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/posts/create" className="nav-link">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
