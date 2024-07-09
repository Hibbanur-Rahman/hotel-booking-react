import "../assets/style/aboutUs_css/style.css";
import crousalImg1 from "../assets/images/aboutUs/aboutUs-carousel-01.jpg";
import crousalImg2 from "../assets/images/aboutUs/aboutUs-carousel-02.jpg";
import crousalImg3 from "../assets/images/aboutUs/aboutUs-carousel-03.jpg";
import awardsImg1 from '../assets/images/aboutUs/awards-01.png';
import awardsImg2 from '../assets/images/aboutUs/awards-02.png';
import awardsImg3 from '../assets/images/aboutUs/awards-03.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const AboutUs = () => {
  return (
    <div className="aboutUS" style={{top:'40px',position:'relative'}}>
      <header className="aboutUs-header container-fluid ">
        <h1 className="about m-0 ">
          <p>ABOUT US</p>
        </h1>
      </header>
      <section className="section-1 container ">
        <div className="row m-0 ">
          <div className="col-md-6 ">
            <span>OUR STORY</span>
            <h1>
              <p>A BRIEF HISTORY OF HMZ HOTEL.</p>
            </h1>
          </div>
          <div className="col-md-6 text-secondary ">
            <p>
              We started building our hotel in 1995. Since then, we've grown
              into the hotel with the best client service in our country. From
              2010, we have offered many new services to meet client's demand
              better such as Spa, wellness, Airport shuttle.
            </p>
          </div>
        </div>
      </section>
      <div className="container-fluid p-0">
        <div className="slider mb-4 position-relative row m-0 p-0">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            freeMode={true}
            autoplay
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider-card m-3">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <img src={crousalImg1} alt />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-card m-3">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <img src={crousalImg2} alt />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-card m-3">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <img src={crousalImg3} alt />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-card m-3">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <img src={crousalImg3} alt />
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
      <section className="section-2 container ">
        <h1 className="text-center m-0 mb-5 ">
          <p>WHY CHOOSE US</p>
        </h1>
        <div className="row m-2">
          <div className="col-md-4 custom-card p-3 rounded">
            <i className="bi bi-gem " />
            <h4>Luxury Amenities</h4>
            <p className=" text-secondary fs-6 fw-light ">
              We have chosen luxury facilities for our hotel from reliable
              reputable brands
            </p>
          </div>
          <div className="col-md-4 custom-card p-3 rounded">
            <i className="bi bi-airplane-engines " />
            <h4>Free Airport Pickup</h4>
            <p className=" text-secondary fs-6 fw-light ">
              The hotel provides complimentary airport pickup and drop
              facilities at no extra cost anytime you require our service
            </p>
          </div>
          <div className="col-md-4 custom-card p-3 rounded">
            <i className="bi bi-percent " />
            <h4>Special Offers</h4>
            <p className=" text-secondary fs-6 fw-light ">
              We have chosen luxury facilities for our hotel from reliable
              reputable brands
            </p>
          </div>
        </div>
        <div className="row m-0 ">
          <div className="col-md-4 custom-card p-3 rounded">
            <i className="bi bi-credit-card " />
            <h4>Online Payment</h4>
            <p className=" text-secondary fs-6 fw-light ">
              Stay at home and take an online payment without the use of checks
              or card
            </p>
          </div>
          <div className="col-md-4 custom-card p-3 rounded">
            <i className="bi bi-geo-alt " />
            <h4>Best Location</h4>
            <p className=" text-secondary fs-6 fw-light ">
              The location of FT is perfect and very central, so it's convinient
              for moving.
            </p>
          </div>
          <div className="col-md-4 custom-card p-3 rounded">
            <i className="bi bi-people " />
            <h4>Friendly Staff</h4>
            <p className=" text-secondary fs-6 fw-light ">
              Our staff are helpful. They respond all questions of clients in a
              happy way.
            </p>
          </div>
        </div>
      </section>
      <section className="section-3 container ">
        <h1 className="text-center m-0 mb-5 ">
          <p>AWARDS</p>
        </h1>
        <div className="row m-2">
          <div className="col-md-4 p-2">
            <div className=" award-card p-4 text-center ">
              <img src={awardsImg1} alt=" " />
              <h4 className="text-center ">TOP CHOICE</h4>
              <p className="text-center text-secondary fs-6 fw-light ">
                The Award was presented by the national hospitality association
                in 1998.
              </p>
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className="award-card p-4 text-center ">
              <img src={awardsImg2} alt=" " />
              <h4 className="text-center ">TOP CHOICE</h4>
              <p className="text-center text-secondary fs-6 fw-light ">
                The Award was presented by the national hospitality association
                in 1998.
              </p>
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className="award-card p-4 text-center ">
              <img src={awardsImg3} alt=" " />
              <h4 className="text-center ">TOP CHOICE</h4>
              <p className="text-center text-secondary fs-6 fw-light ">
                The Award was presented by the national hospitality association
                in 1998.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
