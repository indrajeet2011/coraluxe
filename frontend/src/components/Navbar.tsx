"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-lg-5">
      <Link href="/" className="navbar-brand ms-4 ms-lg-0">
        <h1 className="mb-0 text-primary">Coraluxe</h1>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto p-4 p-lg-0">
          <Link href="/" className="nav-item nav-link active">Home</Link>
          <a href="#" className="nav-item nav-link" onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}>About</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Rooms</a>
            <div className="dropdown-menu m-0">
              <a href="#" className="dropdown-item">Rooms Grid</a>
              <a href="#" className="dropdown-item">Room Details</a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
            <div className="dropdown-menu m-0">
              <a href="#" className="dropdown-item">Blog Grid</a>
              <a href="#" className="dropdown-item">Blog Details</a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu m-0">
              <a href="#" className="dropdown-item">FAQs</a>
              <a href="#" className="dropdown-item">Gallery</a>
              <a href="#" className="dropdown-item">Services</a>
              <a href="#" className="dropdown-item">Our Staff</a>
              <a href="#" className="dropdown-item">Offers/Packages</a>
              <a href="#" className="dropdown-item">Reservation</a>
              <a href="#" className="dropdown-item">Testimonial</a>
              <a href="#" className="dropdown-item">404 Page</a>
            </div>
          </div>
          <a href="#" className="nav-item nav-link" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>Contact</a>
        </div>
        <a
          className="btn btn-primary d-none d-lg-flex"
          href="https://htmlcodex.com/downloading/?item=3928"
        >
          Buy Pro Version
        </a>
      </div>
    </nav>
  );
}
