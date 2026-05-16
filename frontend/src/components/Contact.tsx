"use client";

export default function Contact() {
  return (
    <div id="contact" className="container-fluid bg-light overflow-hidden px-lg-0">
      <div className="container contact px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-8 contact-text py-5 wow fadeIn" data-wow-delay="0.3s">
            <div className="p-lg-5 ps-lg-0">
              <p className="fs-4 font-dancing-script text-primary mb-0">Contact</p>
              <h1 className="display-4 mb-4">Get in Touch Today Test Tech</h1>
              <p className="fs-4">
                Receive messages instantly with our PHP and Ajax contact form - available in the{" "}
                <a href="https://htmlcodex.com/downloading/?item=3928">Pro Version</a> only.
              </p>
              <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
                <div className="col-sm-6 control-group">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-sm-6 control-group">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-sm-6 control-group">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="mobile" placeholder="Mobile" />
                    <label htmlFor="mobile">Mobile</label>
                  </div>
                </div>
                <div className="col-sm-6 control-group">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12 control-group">
                  <div className="form-floating">
                    <textarea style={{ height: "165px" }} className="form-control" id="message" placeholder="Message"></textarea>
                    <label htmlFor="message">Leave a message here</label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary py-3 px-5">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 pe-lg-0" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <iframe
                className="position-absolute w-100 h-100"
                style={{ objectFit: "cover" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
