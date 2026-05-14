export default function Facts() {
  return (
    <div className="container-fluid fact-counter py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
            <div className="btn-lg-square bg-primary rounded mx-auto mb-3">
              <i className="fas fa-door-open text-white"></i>
            </div>
            <h1 className="display-5 text-white">1234</h1>
            <h5 className="text-white mb-0">Total Rooms</h5>
          </div>
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
            <div className="btn-lg-square bg-primary rounded mx-auto mb-3">
              <i className="fas fa-user-check text-white"></i>
            </div>
            <h1 className="display-5 text-white">1234</h1>
            <h5 className="text-white mb-0">Happy Guests</h5>
          </div>
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
            <div className="btn-lg-square bg-primary rounded mx-auto mb-3">
              <i className="fas fa-user-friends text-white"></i>
            </div>
            <h1 className="display-5 text-white">1234</h1>
            <h5 className="text-white mb-0">Team Members</h5>
          </div>
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
            <div className="btn-lg-square bg-primary rounded mx-auto mb-3">
              <i className="fas fa-trophy text-white"></i>
            </div>
            <h1 className="display-5 text-white">1234</h1>
            <h5 className="text-white mb-0">Award Won</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
