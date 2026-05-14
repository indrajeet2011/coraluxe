"use client";

export default function Footer() {
  const gallery = [
    "/img/gallery-sm-1.jpg",
    "/img/gallery-sm-2.jpg",
    "/img/gallery-sm-3.jpg",
    "/img/gallery-sm-4.jpg",
    "/img/gallery-sm-5.jpg",
    "/img/gallery-sm-6.jpg",
  ];

  return (
    <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Get in Touch</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-primary me-2" href=""><i className="bi bi-twitter-x"></i></a>
              <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Quick Links</h4>
            <a className="btn btn-link" href="">About Us</a>
            <a className="btn btn-link" href="">Contact Us</a>
            <a className="btn btn-link" href="">Our Services</a>
            <a className="btn btn-link" href="">Terms & Condition</a>
            <a className="btn btn-link" href="">Support</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Gallery</h4>
            <div className="row g-2">
              {gallery.map((src, i) => (
                <div key={i} className="col-4">
                  <img className="img-fluid rounded border p-1 w-100" src={src} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <form className="position-relative" onSubmit={(e) => e.preventDefault()}>
              <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="email" placeholder="Your email" required />
              <button type="submit" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">Your Site Name</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a href="https://htmlcodex.com">HTML Codex</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
