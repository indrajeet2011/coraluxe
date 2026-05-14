export default function Rooms() {
  const rooms = [
    {
      title: "Honeymoon Villa",
      price: "$100",
      img: "/img/room-1.jpg",
      size: "20 X 25 Sqft",
      bed: 1,
      bath: 1,
      ac: true,
      wifi: true,
      delay: "0.1s",
    },
    {
      title: "Deluxe Suite",
      price: "$100",
      img: "/img/room-2.jpg",
      size: "20 X 25 Sqft",
      bed: 1,
      bath: 1,
      ac: true,
      wifi: true,
      delay: "0.3s",
    },
    {
      title: "Sea View Room",
      price: "$100",
      img: "/img/room-3.jpg",
      size: "20 X 25 Sqft",
      bed: 1,
      bath: 1,
      ac: true,
      wifi: true,
      delay: "0.5s",
    },
  ];

  return (
    <div className="container-fluid py-6">
      <div className="container">
        <div className="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <p className="fs-4 font-dancing-script text-primary mb-0">Our Rooms</p>
          <h1 className="display-4 mb-5">Private Villas With Ocean Views</h1>
        </div>
        <div className="row g-4">
          {rooms.map((room, index) => (
            <div key={index} className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay={room.delay}>
              <div className="room-item bg-white rounded d-flex h-100 p-4">
                <div className="bg-light rounded overflow-hidden flex-shrink-0 d-flex flex-column justify-content-between text-center pb-4 me-3" style={{ width: "80px" }}>
                  <div className="bg-primary text-white py-3">
                    <h5 className="text-white mb-0">{room.price}</h5>
                    <small>Per Night</small>
                  </div>
                  <div className="text-center mx-auto">
                    <i className="fa fa-bed text-primary"></i>
                    <p className="small mb-0">{room.bed} Bed</p>
                  </div>
                  <div className="text-center mx-auto">
                    <i className="fa fa-bath text-primary"></i>
                    <p className="small mb-0">{room.bath} Bath</p>
                  </div>
                  <div className="text-center mx-auto">
                    <i className="fa fa-fan text-primary"></i>
                    <p className="small mb-0">AC</p>
                  </div>
                  <div className="text-center mx-auto">
                    <i className="fa fa-wifi text-primary"></i>
                    <p className="small mb-0">Wifi</p>
                  </div>
                </div>
                <div className="room-detail">
                  <div className="position-relative rounded overflow-hidden mb-3">
                    <img className="img-fluid w-100" src={room.img} alt="" />
                    <div className="position-absolute top-0 start-0 text-white small py-1 px-3">{room.size}</div>
                  </div>
                  <a href="#" className="h5 d-inline-block">{room.title}</a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla sed mollis non.</p>
                  <a href="#" className="btn btn-primary w-100 py-2">Check Availability</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
