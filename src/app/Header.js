import React from 'react';
import Link from 'next/link';



const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="flex flex-row items-center w-full">
            <div className="lg:w-1/4 flex justify-between items-center">
              <div className="main-menu-logo">
                <Link legacyBehavior href="/">
                  <a className="navbar-brand">
                    <img src="/assets/img/v1/logo/logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img src="/assets/img/v1/icon/bars.png" alt="navbar toggler" />
              </button>
            </div>
            <div className="lg:w-2/4">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="main-menu">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <Link legacyBehavior href="#hero">
                        <a className="nav-link active">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link legacyBehavior href="#about">
                        <a className="nav-link">About</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link legacyBehavior href="#services">
                        <a className="nav-link">Services</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link legacyBehavior href="#project">
                        <a className="nav-link">Project</a>
                      </Link>
                    </li>
                    <li legacyBehavior className="nav-item">
                      <Link legacyBehavior href="#blog">
                        <a className="nav-link">Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 text-right hidden lg:block">
              <Link legacyBehavior href="#Lets-talk">
                <a className="lets-talk-btn">
                  <img src="/assets/img/v1/icon/phone.png" alt="phone" />
                  <span>Let's Talk</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
