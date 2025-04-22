import React from "react";
import { Outlet } from "react-router";

const Sidebar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Shahariar Sumon</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/476903493_2967002480134041_8445231915497603981_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=3dMjzWWXdU0Q7kNvwEY9zOM&_nc_oc=Adl0iLyf27f9ssnspnW-H_N_FqZp8o4L1Y092ruDYILA7Z50m-NIwVVHyN_4Lv8mG6U&_nc_zt=23&_nc_ht=scontent.fdac31-2.fna&_nc_gid=ir12i72dz2r_N3mE0U9FgQ&oh=00_AfFpUaaOjY7CN80H12xY34xRL_Y7Spl6ac8NudrTF8ZFRQ&oe=68070110"
              alt="..."
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/hire">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Sidebar;
