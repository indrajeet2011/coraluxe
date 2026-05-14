export default function Blog() {
  const posts = [
    {
      day: "01", month: "Jan", img: "/img/blog-1.jpg",
      title: "How to book a resort in Maldives at the best price",
      delay: "0.1s",
    },
    {
      day: "01", month: "Jan", img: "/img/blog-2.jpg",
      title: "Top seven hotel trends to watch in 2045",
      delay: "0.3s",
    },
    {
      day: "01", month: "Jan", img: "/img/blog-3.jpg",
      title: "Five best things to do in Baa Atoll, Maldives",
      delay: "0.5s",
    },
  ];

  return (
    <div className="container-fluid py-6">
      <div className="container">
        <div className="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <p className="fs-4 font-dancing-script text-primary mb-0">Blog Post</p>
          <h1 className="display-4 mb-5">Discover Hidden Island Beauty</h1>
        </div>
        <div className="row g-4">
          {posts.map((post, i) => (
            <div key={i} className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay={post.delay}>
              <div className="blog-item rounded h-100 p-4">
                <div className="blog-img position-relative">
                  <img className="img-fluid w-100 rounded-top" src={post.img} alt="" />
                  <div className="blog-meta d-flex rounded-bottom overflow-hidden">
                    <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary px-4">
                      <h5 className="text-white mb-n1">{post.day}</h5>
                      <p className="text-white mb-0">{post.month}</p>
                    </div>
                    <div className="bg-light w-100 h-50 d-flex align-items-center align-self-end">
                      <small className="ms-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                      <small className="ms-3"><i className="fa fa-folder text-primary me-2"></i>Travel</small>
                    </div>
                  </div>
                </div>
                <a href="#" className="h5 d-inline-block">{post.title}</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla, vestibulum sed mollis non, efficitur in mauris.</p>
                <a href="" className="btn btn-primary px-4">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
