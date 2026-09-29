import {
  CalendarDays,
  Search,
  Menu,
  Sparkles,
  ChevronDown,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <a href="/" className="logo">
          <div className="logo-icon">
            <CalendarDays size={22} />
          </div>

          <span>
            Event<span>Ease</span>
          </span>
        </a>

        {/* NAVIGATION LINKS */}
        <div className="nav-links">

          <a href="/" className="active">
            Home
          </a>

          <a href="/#events">
            Events
          </a>

          <a href="/#categories">
            Categories
            <ChevronDown size={14} />
          </a>

          <a href="/#about">
            About
          </a>

        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="nav-actions">

          {/* SEARCH */}
          <button className="nav-search">
            <Search size={19} />
          </button>

          {/* LOGIN */}
          <button className="login-btn">
            Login
          </button>

          {/* CREATE EVENT */}
          <a
            href="/create-event"
            className="create-btn"
          >
            <Sparkles size={17} />
            Create Event
          </a>

        </div>

        {/* MOBILE MENU */}
        <button className="mobile-menu">
          <Menu size={25} />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;