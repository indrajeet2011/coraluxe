export default function Services() {
  const services = [
    { icon: "fa-hamburger", title: "Food & Restaurant", delay: "0.1s" },
    { icon: "fa-heartbeat", title: "Beauty & Health", delay: "0.2s" },
    { icon: "fa-dumbbell", title: "Fitness Center", delay: "0.3s" },
    { icon: "fa-birthday-cake", title: "Event Rooms", delay: "0.4s" },
  ];

  return (
    <div className="container-fluid py-6">
      <div className="container">
        <div className="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <p className="fs-4 font-dancing-script text-primary mb-0">Activities</p>
          <h1 className="display-4 mb-5">Dive Into Island Adventures</h1>
        </div>
        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-md-6 col-lg-4 col-xl-3 wow fadeIn" data-wow-delay={s.delay}>
              <div className="service-item rounded text-center h-100 px-4 py-5">
                <i className={`fas ${s.icon} fa-3x text-primary mb-3`}></i>
                <h5>{s.title}</h5>
                <hr className="w-25 mx-auto text-primary" style={{ height: "2px" }} />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla, vestibulum sed.</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
