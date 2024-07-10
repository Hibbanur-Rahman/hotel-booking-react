import { useState } from "react";

import "../assets/style/home_css/main.scss";
import signature from "../assets/images/home/signture2.png";
import sliderImg1 from "../assets/images/home/slider-1.jpg";
import sliderImg2 from "../assets/images/home/slider-2.jpg";
import sliderImg3 from "../assets/images/home/slider-3.jpg";
import spaIcon from "../assets/images/home/spa-icon.png";
import knifeIcon from "../assets/images/home/crossed-knife-and-fork-svgrepo-com.svg";
import suitcaseIcon from "../assets/images/home/suitecase-icon-01-1536x1335.png";
import swimmerIcon from "../assets/images/home/swimmer.png";
import serviceGalleryImg1 from "../assets/images/home/services-gallery-1.jpg";
import serviceGalleryImg2 from "../assets/images/home/services-gallery-2.jpg";
import serviceGalleryImg3 from "../assets/images/home/services-gallery-3.jpg";
import serviceGalleryImg4 from "../assets/images/home/services-gallery-4.jpg";
import serviceRestaurantsImg1 from "../assets/images/home/services-restaurants-1.jpg";
import serviceRestaurantsImg2 from "../assets/images/home/services-restaurants-2.jpg";
import serviceRestaurantsImg3 from "../assets/images/home/services-restaurants-3.jpg";
import serviceRestaurantsImg4 from "../assets/images/home/services-restaurants-4.jpg";
import serviceSuitesImg1 from "../assets/images/home/services-suites-1.jpg";
import serviceSuitesImg2 from "../assets/images/home/services-suites-2.jpg";
import serviceSuitesImg3 from "../assets/images/home/services-suites-3.jpg";
import serviceSuitesImg4 from "../assets/images/home/services-suites-4.jpg";
import serviceSwimmingImg1 from "../assets/images/home/services-swimming-1.jpg";
import serviceSwimmingImg2 from "../assets/images/home/services-swimming-2.jpg";
import serviceSwimmingImg3 from "../assets/images/home/services-swimming-3.jpg";
import serviceSwimmingImg4 from "../assets/images/home/services-swimming-4.jpg";
import testimonialImg1 from "../assets/images/home/team01.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  const [isServiceGalleryShow, setIsServiceGalleryShow] = useState(true);
  const [isServiceRestaurantsShow, setIsServiceRestaurantsShow] =
    useState(false);
  const [isServiceSuitesShow, setIsServiceSuitesShow] = useState(false);
  const [isServiceSwimmingShow, setIsServiceSwimmingShow] = useState(false);

  const handleServiceGalleryShow = () => {
    setIsServiceGalleryShow(true);
    setIsServiceRestaurantsShow(false);
    setIsServiceSuitesShow(false);
    setIsServiceSwimmingShow(false);
  };

  const handleServiceRestaurantsShow = () => {
    setIsServiceGalleryShow(false);
    setIsServiceRestaurantsShow(true);
    setIsServiceSuitesShow(false);
    setIsServiceSwimmingShow(false);
  };

  const handleServiceSuiteShow = () => {
    setIsServiceGalleryShow(false);
    setIsServiceRestaurantsShow(false);
    setIsServiceSuitesShow(true);
    setIsServiceSwimmingShow(false);
  };

  const handleServiceSwimmingShow = () => {
    setIsServiceGalleryShow(false);
    setIsServiceRestaurantsShow(false);
    setIsServiceSuitesShow(false);
    setIsServiceSwimmingShow(true);
  };

  return (
    <div className="container-fluid p-0 m-0 bg-white">
      {/*================= Banner Section Start ==================*/}
      <div className="homeSection container p-0 rounded-4">
        <div className="row h-auto p-0 m-0">
          <div className="col-lg-6  HomeBannerLeft p-md-5 p-3">
            <p className>Welcome home</p>
            <h1 className="w-md-75 w-100">Our world is your playground.</h1>
            <p className="w-md-75 w-100 mt-4">
              Make yourself at home in our very sophisticated guest rooms.
            </p>
          </div>
          <div className="col-6 d-lg-flex d-none" />
        </div>
        <div className="HomeBannerDate row ms-0 col-8 position-relative rounded-end-5 rounded-bottom-0 overflow-hidden">
          <div className="col-3 border-end ps-5 pe-0 mt-4 mb-4">
            <div className="row  align-items-center">
              <i className="bi bi-calendar-date w-auto" />
              <p className="w-auto p-0 m-0">Check In</p>
            </div>
            <div className="row d-flex flex-row align-items-center">
              <input
                type="text"
                className="col-8"
                placeholder="DD-MM-YYYY"
                id="CheckIn"
              />
              <i className="bi bi-chevron-down w-auto p-0 m-0" />
            </div>
          </div>
          <div className="col-3 border-end ps-5 pe-0 mt-4 mb-4">
            <div className="row  align-items-center">
              <i className="bi bi-calendar-date w-auto" />
              <p className="w-auto p-0 m-0">Check In</p>
            </div>
            <div className="row d-flex flex-row align-items-center">
              <input
                type="text"
                className="col-8"
                placeholder="DD-MM-YYYY"
                id="CheckIn"
              />
              <i className="bi bi-chevron-down w-auto p-0 m-0" />
            </div>
          </div>
          <div className="col-3 border-end ps-5 pe-0 mt-4 mb-4">
            <div className="row  align-items-center">
              <i className="bi bi-calendar-date w-auto" />
              <p className="w-auto p-0 m-0">Check In</p>
            </div>
            <div className="row d-flex flex-row align-items-center">
              <input
                type="text"
                className="col-8"
                placeholder="DD-MM-YYYY"
                id="CheckIn"
              />
              <i className="bi bi-chevron-down w-auto p-0 m-0" />
            </div>
          </div>
          <div className="col-3 p-0">
            <button className="btn btn-lg h-100 w-100 border-0 position-relative rounded-0 text-light d-flex align-items-center p-0 justify-content-center">
              <p className="mb-0 w-50">Check Availability</p>
            </button>
          </div>
        </div>
      </div>
      {/*================= count Section Start ==================*/}
      <div className="container p-md-5 pt-5 mt-5">
        <div className="row m-0 p-md-5 mt-5">
          <div className="counter card col-md-4  text-center justify-content-center mb-md-0 mb-5">
            <h1>20+</h1>
            <p>VARIOUS SERVICES</p>
          </div>
          <div className="counter card col-md-4 text-center justify-content-center">
            <h1>150+</h1>
            <p>DIFFERENT ROOMS</p>
          </div>
          <div className="counter card col-md-4 text-center justify-content-center">
            <h1>15+</h1>
            <p>EXPERIENCE</p>
          </div>
        </div>
      </div>
      {/*================= Beach Section Start ==================*/}
      <div className="container Beach d-flex flex-column align-items-center justify-content-center p-md-5 p-2 rounded-4">
        <div className="upper row text-center col-md-7 align-items-center justify-content-center p-md-5 mt-5">
          <h1>Beach Hotel More than a stay</h1>
          <p>
            we have a lot of effort to bring more quality time to you and the
            people you love.you will have a chance to enjoy meaningful moments
            together and that's reason why we're here
          </p>
          <img src={signature} alt />
        </div>
        <div className="position-relative col-md-9 col-12 lower d-flex align-items-center justify-content-center rounded-4 mt-5 ">
          <i className="bi bi-play-circle-fill" />
        </div>
      </div>
      {/*================= Favourite rooms Section Start ==================*/}
      <div className="container-fluid FavouriteRooms pt-5 pb-5 mt-5">
        <div className="row m-0 justify-content-center mb-5">
          <h1 className="col-10 fs-2">OUR FAVORITE ROOMS</h1>
        </div>
        <div className="slider mb-4 position-relative mt-5 mb-5">
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
              {" "}
              <div className="slider-card m-3 rounded-2">
                <div className="d-flex justify-content-center align-items-center mb-4 rounded-4 overflow-hidden p-0">
                  <img src={sliderImg1} alt className="rounded-4 h-100 w-100" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slider-card m-3">
                <div className="d-flex justify-content-center align-items-center mb-4 rounded-4 overflow-hidden p-0">
                  <img src={sliderImg2} alt className="rounded-4 h-100 w-100" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slider-card m-3">
                <div className="d-flex justify-content-center align-items-center mb-4 rounded-4 overflow-hidden p-0">
                  <img src={sliderImg3} alt className="rounded-4 h-100 w-100" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slider-card m-3 rounded-2">
                <div className="d-flex justify-content-center align-items-center mb-4 rounded-4 overflow-hidden p-0">
                  <img src={sliderImg1} alt className="rounded-4 h-100 w-100" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/*================= Our Services Section Start ==================*/}
      <div className="services container pt-5 mt-5">
        <div className="serviceHead row justify-content-between pt-5">
          <h1 className="w-auto fs-2">OUR SERVICE</h1>
          <div className="col-2 d-md-flex d-none align-items-center">
            <p className="w-auto p-0 m-0 fs-5">See more</p>
            <i className="bi bi-arrow-right" />
          </div>
        </div>
        <div className="row pt-5">
          <div
            className={`card  ${
              isServiceGalleryShow ? "activeCst" : ""
            } col-md-3 d-flex flex-row justify-content-around p-4 border-0`}
            id="spaTab"
            onClick={handleServiceGalleryShow}
          >
            <div className="iconImage col-2">
              <img src={spaIcon} alt />
            </div>
            <div className="col-8">
              <h4 className="fs-5 p-0 m-0">SPA &amp; WELLNESS</h4>
              <p className="p-0 m-0">Open Daily</p>
            </div>
          </div>
          <div
            className={` card ${
              isServiceRestaurantsShow ? "activeCst" : ""
            } col-md-3 d-flex flex-row justify-content-around p-4 border-0`}
            id="restaurantTab"
            onClick={handleServiceRestaurantsShow}
          >
            <div className="iconImage col-2">
              <img src={knifeIcon} alt />
            </div>
            <div className="col-8">
              <h4 className="fs-5 p-0 m-0">TOP RESTAURANT</h4>
              <p className="p-0 m-0">Breakfast &amp; Dinner</p>
            </div>
          </div>
          <div
            className={`card ${
              isServiceSuitesShow ? "activeCst" : ""
            }  col-md-3 d-flex flex-row justify-content-around p-4 border-0`}
            id="suitesTab"
            onClick={handleServiceSuiteShow}
          >
            <div className="iconImage col-2">
              <img src={suitcaseIcon} alt />
            </div>
            <div className="col-8">
              <h4 className="fs-5 p-0 m-0">BEST SUITES</h4>
              <p className="p-0 m-0">Cool View</p>
            </div>
          </div>
          <div
            className={`card ${
              isServiceSwimmingShow ? "activeCst" : ""
            }  col-md-3 d-flex flex-row justify-content-around p-4 border-0`}
            id="swimmingTab"
            onClick={handleServiceSwimmingShow}
          >
            <div className="iconImage col-2">
              <img src={swimmerIcon} alt />
            </div>
            <div className="col-8">
              <h4 className="fs-5 p-0 m-0">SWIMMING POOL</h4>
              <p className="p-0 m-0">Open Daily</p>
            </div>
          </div>
        </div>
        <div
          className="Gallerylisting container-sm p-0 pt-5 pb-5"
          id="nav-tabContent"
        >
          {isServiceGalleryShow ? (
            <div
              className="active row pt-5 pb-5 justify-content-between d-flex"
              tabIndex={0}
              id="spa"
            >
              <div className="left col-sm-4 col-12 overflow-hidden rounded-4">
                <img src={serviceGalleryImg1} alt />
              </div>
              <div className="right col-sm-8 col-12">
                <div className="upper col-12 pb-2">
                  <img src={serviceGalleryImg2} alt />
                </div>
                <div className="lower row pt-3">
                  <div className="col-6">
                    <img src={serviceGalleryImg3} alt />
                  </div>
                  <div className="col-6">
                    <img src={serviceGalleryImg4} alt />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {isServiceRestaurantsShow ? (
            <div
              className="row pt-5 pb-5 justify-content-between d-flex"
              tabIndex={1}
              id="restaurant"
            >
              <div className="left col-sm-4 col-12 overflow-hidden rounded-4">
                <img src={serviceRestaurantsImg1} alt />
              </div>
              <div className="right col-sm-8 col-12">
                <div className="upper col-12 pb-2">
                  <img src={serviceRestaurantsImg2} alt />
                </div>
                <div className="lower row pt-3">
                  <div className="col-6">
                    <img src={serviceRestaurantsImg3} alt />
                  </div>
                  <div className="col-6">
                    <img src={serviceRestaurantsImg4} alt />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {isServiceSuitesShow ? (
            <div
              className="row pt-5 pb-5 justify-content-between d-flex"
              tabIndex={2}
              id="suites"
            >
              <div className="left col-sm-4 col-12 overflow-hidden rounded-4">
                <img src={serviceSuitesImg1} alt />
              </div>
              <div className="right col-sm-8 col-12">
                <div className="upper col-12 pb-2">
                  <img src={serviceSuitesImg2} alt />
                </div>
                <div className="lower row pt-3">
                  <div className="col-6">
                    <img src={serviceSuitesImg3} alt />
                  </div>
                  <div className="col-6">
                    <img src={serviceSuitesImg4} alt />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {isServiceSwimmingShow ? (
            <div
              className="row pt-5 pb-5 justify-content-between d-flex"
              tabIndex={3}
              id="swimming"
            >
              <div className="left col-sm-4 col-12 overflow-hidden rounded-4">
                <img src={serviceSwimmingImg1} alt />
              </div>
              <div className="right col-sm-8 col-12">
                <div className="upper col-12 pb-2">
                  <img src={serviceSwimmingImg2} alt />
                </div>
                <div className="lower row pt-3">
                  <div className="col-6">
                    <img src={serviceSwimmingImg3} alt />
                  </div>
                  <div className="col-6">
                    <img src={serviceSwimmingImg4} alt />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/*================= Testimonial Section Start ==================*/}
      <div className="testimonial container">
        <h1>OUR GUESTS LOVE US</h1>
        <div className="slider position-relative pt-5 mb-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            freeMode={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper pb-5 ps-3 pe-3 pt-5"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div
                className="card border border-0 p-4 pb-2 pt-2"
                style={{ marginTop: "0px" }}
              >
                <div className="item">
                  <div className="client_info">
                    <p className="evaluate">
                      "I will be pet i will be pet and then i will hiss sit in
                      box get scared by doggo also cucumerro yet the best thing
                      in the call universe is a cardboard box."
                    </p>
                    <div className="row p-0 m-0 d-flex justify-content-between">
                      <div className="info d-flex col-7">
                        <div className="client">
                          <img
                            decoding="async"
                            src={testimonialImg1}
                            alt="Ralph Edwards"
                          />
                        </div>
                        <div className="name-job ps-2">
                          <p className="name second_font m-0 p-0">
                            Ralph Edwards
                          </p>
                          <p className="job m-0 p-0">American</p>
                        </div>
                      </div>
                      <div className="icon-quote col-3">
                        <i className="bi bi-quote" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="card border border-0 p-4 pb-2 pt-2"
                style={{ marginTop: "0px" }}
              >
                <div className="item">
                  <div className="client_info">
                    <p className="evaluate">
                      "I will be pet i will be pet and then i will hiss sit in
                      box get scared by doggo also cucumerro yet the best thing
                      in the call universe is a cardboard box."
                    </p>
                    <div className="row p-0 m-0 d-flex justify-content-between">
                      <div className="info d-flex col-7">
                        <div className="client">
                          <img
                            decoding="async"
                            src={testimonialImg1}
                            alt="Ralph Edwards"
                          />
                        </div>
                        <div className="name-job ps-2">
                          <p className="name second_font m-0 p-0">
                            Ralph Edwards
                          </p>
                          <p className="job m-0 p-0">American</p>
                        </div>
                      </div>
                      <div className="icon-quote col-3">
                        <i className="bi bi-quote" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="card border border-0 p-4 pb-2 pt-2"
                style={{ marginTop: "0px" }}
              >
                <div className="item">
                  <div className="client_info">
                    <p className="evaluate">
                      "I will be pet i will be pet and then i will hiss sit in
                      box get scared by doggo also cucumerro yet the best thing
                      in the call universe is a cardboard box."
                    </p>
                    <div className="row p-0 m-0 d-flex justify-content-between">
                      <div className="info d-flex col-7">
                        <div className="client">
                          <img
                            decoding="async"
                            src={testimonialImg1}
                            alt="Ralph Edwards"
                          />
                        </div>
                        <div className="name-job ps-2">
                          <p className="name second_font m-0 p-0">
                            Ralph Edwards
                          </p>
                          <p className="job m-0 p-0">American</p>
                        </div>
                      </div>
                      <div className="icon-quote col-3">
                        <i className="bi bi-quote" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="card border border-0 p-4 pb-2 pt-2"
                style={{ marginTop: "0px" }}
              >
                <div className="item">
                  <div className="client_info">
                    <p className="evaluate">
                      "I will be pet i will be pet and then i will hiss sit in
                      box get scared by doggo also cucumerro yet the best thing
                      in the call universe is a cardboard box."
                    </p>
                    <div className="row p-0 m-0 d-flex justify-content-between">
                      <div className="info d-flex col-7">
                        <div className="client">
                          <img
                            decoding="async"
                            src={testimonialImg1}
                            alt="Ralph Edwards"
                          />
                        </div>
                        <div className="name-job ps-2">
                          <p className="name second_font m-0 p-0">
                            Ralph Edwards
                          </p>
                          <p className="job m-0 p-0">American</p>
                        </div>
                      </div>
                      <div className="icon-quote col-3">
                        <i className="bi bi-quote" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Home;
