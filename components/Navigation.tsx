import React from "react";
import Link from "next/link";
import http from "@/src/utils/http";
import { useRouter } from "next/router";

const Navigation: React.FC = () => {
  const router = useRouter();

  const logoutHandler = async () => {
    const res = await http.postRq("/api/v1/auth/logout", {});
    if (res.status === 200) {
      return router.push("/");
    } else {
      return window.alert("Error detected");
    }
  };

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
              <Link href="#" className="nav-link" onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
