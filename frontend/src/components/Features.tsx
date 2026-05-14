export default function Features() {
  const features = [
    { icon: "fa-car", title: "Pick & Drop Facility", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla." },
    { icon: "fa-hamburger", title: "Breakfast Included", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla." },
    { icon: "fa-wifi", title: "High Speed Wifi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla." },
    { icon: "fa-swimmer", title: "Swimming Pool", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla." },
  ];

  return (
    <div className="container-fluid bg-light overflow-hidden px-lg-0">
      <div className="container feature px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-8 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="p-lg-5 ps-lg-0">
              <p className="fs-4 font-dancing-script text-primary mb-0">Feature</p>
              <h1 className="display-4 mb-4">Relax. Refresh. Renew.</h1>
              <p className="mb-4 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla, vestibulum sed mollis non, efficitur in mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vitae tempor justo. Curabitur vehicula est vitae tincidunt venenatis.</p>
              <div className="row g-4">
                {features.map((f, i) => (
                  <div key={i} className="col-md-6">
                    <div className="d-flex">
                      <i className={`fas ${f.icon} fa-3x text-primary`}></i>
                      <div className="ms-3">
                        <h5 className="mb-1">{f.title}</h5>
                        <span>{f.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <img className="position-absolute img-fluid w-100 h-100" src="/img/feature.jpg" style={{ objectFit: "cover" }} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
