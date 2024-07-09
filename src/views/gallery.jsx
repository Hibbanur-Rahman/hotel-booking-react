import '../assets/style/gallery_css/main.scss'
const Gallery = () => {
  return (
    <div classname="container-fluid">
      {/*================= Banner Section Start ==================*/}
      <div className="banner container-fluid text-center d-flex align-items-center justify-content-center">
        <h1 className=" border-2 border-bottom border-white">GALLERY</h1>
      </div>
      {/*================= gallery section start Section Start ==================*/}
      <div className="gallery-nav" />
      <div className="Gallerylisting container-sm pt-5 pb-5">
        <div className="row pt-5 pb-5 justify-content-between">
          <div className="left col-sm-7 col-12 overflow-hidden rounded-4">
            <div className="hoverSlide row position-absolute">
              <i className="bi bi-plus-lg border border-2 border-white text-white p-0 d-flex justify-content-center align-items-center" />
            </div>
            <img src="./images/gallery/gallery-font-exterior-01.jpg" alt />
          </div>
          <div className="right col-sm-5 col-12">
            <div className="upper col-12 pb-2">
              <img src="./images/gallery/gallery-font-exterior-02.jpg" alt />
            </div>
            <div className="lower col-12 pt-3">
              <img src="./images/gallery/gallery-font-exterior-03.jpg" alt />
            </div>
          </div>
        </div>
        <div className="row pb-5 justify-content-between ">
          <div className="left col-sm-6  col-12 overflow-hidden rounded-4">
            <div className="hoverSlide row position-absolute">
              <i className="bi bi-plus-lg border border-2 border-white text-white p-0 d-flex justify-content-center align-items-center" />
            </div>
            <img
              src="./images/gallery/gallery-font-exterior-05.jpg"
              alt
              style={{ height: "auto" }}
            />
          </div>
          <div className="right col-sm-6  col-12">
            <div className="upper col-12 pb-2">
              <img src="./images/gallery/gallery-font-exterior-04.jpg" alt />
            </div>
            <div className="lower col-12 pt-3">
              <img src="./images/gallery/gallery-font-exterior-06.jpg" alt />
            </div>
          </div>
        </div>
        <div className="row overflow-hidden">
          <div className="col-12 col-sm-4">
            <img src="./images/gallery/gallery-font-exterior-07.jpg" alt />
          </div>
          <div className="col-12 col-sm-4">
            <img src="./images/gallery/gallery-font-exterior-08.jpg" alt />
          </div>
          <div className="col-12 col-sm-4">
            <img src="./images/gallery/gallery-font-exterior-09.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
