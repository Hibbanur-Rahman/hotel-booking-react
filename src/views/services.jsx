import '../assets/style/services_css/main.scss'
import acIcon from '../assets/images/services/air-conditioner-svgrepo-com.svg'
import tvIcon from '../assets/images/services/television-screen-svgrepo-com.svg';
import wifiIcon from '../assets/images/services/wifi-svgrepo-com.svg';
import keyIcon from '../assets/images/services/key-square-2-svgrepo-com.svg'
import coffeeMachineIcon from '../assets/images/services/key-square-2-svgrepo-com.svg';
import tissueBoxIcon from '../assets/images/services/tissue-svgrepo-com.svg';
import hairDryerIcon from '../assets/images/services/hair-dryer-dryer-svgrepo-com.svg';
import squareParkingIcon from '../assets/images/services/square-parking-svgrepo-com.svg'

import serviceImg4 from '../assets/images/services/services-04.jpg'
import serviceImg5 from '../assets/images/services/services-05.jpg'
import serviceImg6 from '../assets/images/services/services-06.jpg'

import crossKniefImg from '../assets/images/services/crossed-knife-and-fork-svgrepo-com.svg';

const Services = () => {
  return (
    <div className="services container-fluid">
      {/*================= Banner Section Start ==================*/}
      <div className="service-banner container-fluid text-center d-flex align-items-center justify-content-center">
        <h1 className=" border-2 border-bottom border-white">SERVICES</h1>
      </div>
      {/*================= Services Icons Section Start ==================*/}
      <div className="ServicesIcons container-fluid overflow-hidden pb-5">
        <div className="row justify-content-center ">
          <div className="col-12 col-sm-6">
            <div className="row pt-5 pb-sm-5 align-items-center justify-content-center">
              <div className=" card col-10 col-sm-3 ServicesIcons-card align-items-center p-3 rounded-3">
                <img
                  src={acIcon}
                  alt
                />
                <p className="pt-3">Harmonic</p>
              </div>
              <div className=" card col-10 col-sm-3 ServicesIcons-card align-items-center p-3 rounded-3">
                <img
                  src={tvIcon}
                  alt
                />
                <p className="pt-3">Big Screen Tv</p>
              </div>
              <div className=" card col-10 col-sm-3 ServicesIcons-card align-items-center p-3 rounded-3">
                <img src={wifiIcon} alt />
                <p className="pt-3">Wifi Free</p>
              </div>
              <div className=" card col-10 col-sm-3 ServicesIcons-card align-items-center p-3 rounded-3">
                <img src={keyIcon} alt />
                <p className="pt-3">Door Key</p>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className=" card col-10 col-sm-3 ServicesIcons-card align-items-center p-3 rounded-3">
                <img
                  src={coffeeMachineIcon}
                  alt
                />
                <p className="pt-3">Cofee Maker</p>
              </div>
              <div className=" card col-10 col-sm-3 ServicesIcons-card align-items-center p-3 rounded-3">
                <img src={tissueBoxIcon} alt />
                <p className="pt-3">Tissue Box</p>
              </div>
              <div className=" card col-10 col-sm-3 ServicesIcons-card align-items-center p-3 rounded-3">
                <img
                  src={hairDryerIcon}
                  alt
                />
                <p className="pt-3">Hairdryer</p>
              </div>
              <div className=" card col-10 col-sm-3 ServicesIcons-card align-items-center p-3 rounded-3">
                <img
                  src={squareParkingIcon}
                  alt
                />
                <p className="pt-3">Free Parking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= RestaurantList Section Start ==================*/}
      <div className="restaurantsList container pt-5">
        <div className="row justify-content-between p-sm-0 p-4">
          <div className="left col-12 col-sm-6 overflow-hidden rounded-4 p-0">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={serviceImg4}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={serviceImg5}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={serviceImg6}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="right col-12 col-sm-5 p-3 pt-5">
            <div className="upper row align-items-center pb-4">
              <img
                src={crossKniefImg}
                alt
              />
              <h3 className="col-10 m-0">TOP RESTAURANTS</h3>
            </div>
            <div className="lower pt-5">
              <p>
                Our restaurant on the top floor offers dishes that celebrate the
                flavors of all the country's regions, from north to south in a
                cozy sitting with warm light.
              </p>
              <button className="btn btn-lg btn-outline-primary mt-5">
                View Detail <i className="bi bi-arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-between flex-lg-row-reverse  p-sm-0 p-4">
          <div className="left col-12 col-sm-6 overflow-hidden rounded-4 p-0">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={serviceImg4}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={serviceImg5}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={serviceImg6}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="right col-12 col-sm-5 p-3 pt-5">
            <div className="upper row align-items-center pb-4">
              <img
                src={crossKniefImg}
                alt
              />
              <h3 className="col-10 m-0">TOP RESTAURANTS</h3>
            </div>
            <div className="lower pt-5">
              <p>
                Our restaurant on the top floor offers dishes that celebrate the
                flavors of all the country's regions, from north to south in a
                cozy sitting with warm light.
              </p>
              <button className="btn btn-lg btn-outline-primary mt-5">
                View Detail <i className="bi bi-arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-between  p-sm-0 p-4">
          <div className="left col-12 col-sm-6 overflow-hidden rounded-4 p-0">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={serviceImg4}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={serviceImg5}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={serviceImg6}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="right col-12 col-sm-5 p-3 pt-5">
            <div className="upper row align-items-center pb-4">
              <img
                src={crossKniefImg}
                alt
              />
              <h3 className="col-10 m-0">TOP RESTAURANTS</h3>
            </div>
            <div className="lower pt-5">
              <p>
                Our restaurant on the top floor offers dishes that celebrate the
                flavors of all the country's regions, from north to south in a
                cozy sitting with warm light.
              </p>
              <button className="btn btn-lg btn-outline-primary mt-5">
                View Detail <i className="bi bi-arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-between flex-lg-row-reverse  p-sm-0 p-4">
          <div className="left col-12 col-sm-6 overflow-hidden rounded-4 p-0">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={serviceImg4}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={serviceImg5}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={serviceImg6}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="right col-12 col-sm-5 p-3 pt-5">
            <div className="upper row align-items-center pb-4">
              <img
                src={crossKniefImg}
                alt
              />
              <h3 className="col-10 m-0">TOP RESTAURANTS</h3>
            </div>
            <div className="lower pt-5">
              <p>
                Our restaurant on the top floor offers dishes that celebrate the
                flavors of all the country's regions, from north to south in a
                cozy sitting with warm light.
              </p>
              <button className="btn btn-lg btn-outline-primary mt-5">
                View Detail <i className="bi bi-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*================= Contact Section Start ==================*/}
      <div className="contact container-fluid overflow-hidden p-5">
        <div className="row justify-content-center p-sm-5 p-lg-5">
          <div className="col-lg-7 col-sm-7 col-12 text-center">
            <h2 className="mb-0">Leave your Message</h2>
            <p className="fs-6 pb-5">
              Contact us today using this form and we will reach you asap
            </p>
            <form action>
              <div className="row pb-sm-2 pt-sm-2">
                <div className="col-sm-6 col-lg-6 p-0 pe-sm-3 pb-sm-0 pt-sm-0 pb-2 pt-2">
                  <input
                    type="text"
                    className="form-control btn-outline-light"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-sm-6 col-lg-6 p-0 ps-sm-3  pb-sm-0 pt-sm-0 pb-2 pt-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="row pb-sm-2 pt-sm-2">
                <div className="col-sm-6 col-lg-6 p-0  pe-sm-3  pb-sm-0 pt-sm-0 pb-2 pt-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-sm-6 col-lg-6 p-0 ps-sm-3  pb-sm-0 pt-sm-0 pb-2 pt-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="row pb-2 pt-2">
                <textarea
                  name
                  id
                  cols={30}
                  rows={3}
                  className=" form-control col-12"
                  placeholder="Write your message...."
                  defaultValue={""}
                />
              </div>
              <div className="row pb-2 pt-2">
                <button type="submit" className="btn btn-primary col-12">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
