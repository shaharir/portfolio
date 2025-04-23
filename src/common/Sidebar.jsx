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
              src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/475697611_2958404180993871_2333587337553012716_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=o9qjgHV0pjgQ7kNvwHBRsUP&_nc_oc=AdlxI8MsVMO1eJaYji5NDP-2o1mTCUzUg5vzsZQYYKfAQVX_2trcGqOlY2R8mgfw7Kw&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=UzIx4JVfmHbalRoPpdHang&oh=00_AfGhTkiTkHBd04hVWPgVuYVhBDBiOFfRPKtHQa3OktEQKA&oe=680E5348"
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
