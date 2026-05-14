"use client";

export default function Hero() {
  return (
    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src="/img/carousel-1.jpg" alt="Image" />
          <div className="carousel-caption">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-10 col-md-8">
                <h1 className="display-1 text-white animated slideInDown">Escape to Pure Paradise</h1>
                <p className="fs-3 mb-5 animated slideInDown">Luxury Villas Above Turquoise Waters</p>
                <a href="" className="btn btn-primary py-3 px-4 animated slideInDown">Explore More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />
          <div className="carousel-caption">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-10 col-md-8">
                <h1 className="display-1 text-white animated slideInDown">Stay In Island Luxury</h1>
                <p className="fs-3 mb-5 animated slideInDown">Private Villas With Stunning Views</p>
                <a href="" className="btn btn-primary py-3 px-4 animated slideInDown">Explore More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
