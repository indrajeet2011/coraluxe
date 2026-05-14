export default function About() {
  return (
    <div className="container-fluid py-6">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <img className="img-fluid rounded position-absolute w-100 h-100" src="/img/about.jpg" style={{ objectFit: "cover" }} alt="" />
            </div>
          </div>
          <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
            <p className="fs-4 font-dancing-script text-primary mb-0">Welcome</p>
            <h1 className="display-4 mb-0">Coral Crown Resort</h1>
            <h3>Baa Atoll, Maldives</h3>
            <h6 className="mb-4">One of the most beautiful coral beaches in the world</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla, vestibulum sed mollis non, efficitur in mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vitae tempor justo. Curabitur vehicula est vitae tincidunt venenatis.</p>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla, vestibulum sed mollis non, efficitur in mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vitae tempor justo. Curabitur vehicula est vitae tincidunt venenatis.</p>
            <img className="img-fluid mb-2" src="/img/signature.jpg" alt="" />
            <p className="mb-0">Hotel Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
