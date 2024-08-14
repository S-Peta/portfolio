import logo from "../../public/images/s-logo.png";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="navbar">
        <img src={logo} alt="Logo" className="header-logo" />
          {/* <a href="#contact">Contact</a> */}
        </div>

        <div className="header-content">
          <h1>I'm <span>Stefany Peta</span></h1>
          <h3>Junior Software Developer</h3>
          <div className="btn-header">
            <a href="https://github.com/S-Peta">
              <button>GitHub</button>
            </a>
            <a href="https://www.linkedin.com/feed/">
              <button>Linkedin</button>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
