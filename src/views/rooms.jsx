import '../assets/style/rooms_css/main.scss'
import roomImg1 from '../assets/images/rooms/room-01.jpg'
import roomImg2 from '../assets/images/rooms/room-02.jpg'
import roomImg3 from '../assets/images/rooms/room-03.jpg'
import roomImg4 from '../assets/images/rooms/room-04.jpg'
const Rooms = () => {
  return (
    <div className="rooms container-fluid">
      {/*================= Banner Section Start ==================*/}
      <div className="rooms-banner container-fluid text-center d-flex align-items-center justify-content-center">
        <h1 className="  border-2 border-bottom border-white">ROOMS</h1>
        <div className="room-banner-availability position-absolute bg-white border rounded-4 col-lg-7 col-11 justify-content-center align-items-center d-flex p-4 h-auto">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="row flex-wrap">
              <div className="check-in d-flex col-lg-4  align-items-center ps-0 mb-lg-0 mb-3">
                <i className="bi bi-calendar-date position-absolute z-2 ps-3" />
                <input
                  type="text"
                  className="ps-5 rounded-4 col-12"
                  placeholder="Check in"
                  id="CheckIn"
                />
              </div>
              <div className="check-in d-flex col-lg-4  align-items-center ps-0 mb-lg-0 mb-3">
                <i className="bi bi-calendar-date position-absolute z-2 ms-3 " />
                <input
                  type="text"
                  className="ps-5 rounded-4 col-12"
                  placeholder="Check out"
                  id="CheckOut"
                />
              </div>
              <div className=" mcounter adultCount d-flex col-lg-4   align-items-center justify-content-evenly  rounded-4 ps-0 pe-0 pt-3 pb-3 mb-lg-0 mb-3">
                <p>Adults</p>
                <div className="decrement">
                  <i className="fa fa-minus AdultMinus" />
                </div>
                <div className="adult-value">
                  <p id="AdultCount">0</p>
                </div>
                <div className="increment">
                  <i className="fa fa-plus AdultPlus" />
                </div>
              </div>
            </div>
            <div className="row pt-lg-4 pt-0 flex-wrap column-gap-2">
              <div className="mcounter childCount d-flex col-lg-4   align-items-center justify-content-evenly rounded-4 ps-0 pe-0 pt-3 pb-3 mb-lg-0 mb-3">
                <p>Children</p>
                <div className="decrement">
                  <i className="fa fa-minus ChildMinus" />
                </div>
                <div className="child-value">
                  <p id="ChildCount">0</p>
                </div>
                <div className="increment">
                  <i className="fa fa-plus ChildPlus" />
                </div>
              </div>
              <div className="mcounter bedCount d-flex col-lg-4   align-items-center justify-content-evenly rounded-4 ps-0 pe-0 pt-3 pb-3 mb-lg-0 mb-3">
                <p>Beds</p>
                <div className="decrement">
                  <i className="fa fa-minus BedMinus" />
                </div>
                <div className="bed-value">
                  <p id="BedCount">0</p>
                </div>
                <div className="increment">
                  <i className="fa fa-plus BedPlus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="roomListing container overflow-hidden">
        <h1 className="text-center">DISCOVER OUR ROOMS</h1>
        <div className="roomsList row justify-content-center">
          <div className="card overflow-hidden p-0 mt-5 mb-5 rounded-4  col-lg-12 col-11 ">
            <div className="row">
              <div className="roomImage col-12 col-lg-6  overflow-hidden p-0">
                <img
                  src={roomImg4}
                  alt
                  className="img-fluid"
                />
              </div>
              <div className="roomInfo col-12 col-lg-6  p-5">
                <div className="upper row pe-5 border-bottom border-2 pb-5">
                  <div className="right col-lg-9">
                    <h1 className="pb-4">Vip Room</h1>
                    <div className="bottomList row justify-content-around">
                      <div className="col-3 d-flex align-items-center justify-content-around p-2 rounded-2  w-auto gap-2 ">
                        <i className="fa fa-user" />
                        <p className="mb-0">5 Adults</p>
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-around p-2 rounded-2 w-auto gap-2">
                        <i className="fa fa-handshake-o" />
                        <p className="mb-0">3 Children</p>
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-around p-2 rounded-2  w-auto gap-2">
                        <i className="fa fa-user" />
                        <p className="mb-0">
                          250 ft<sup>2</sup>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="left col-lg-3   rounded-1 text-center price p-2">
                    <h3 className="p-0 m-0 fs-5 fw-bold">$300.00</h3>
                    <p className="p-0 m-0 fs-6">Per night</p>
                  </div>
                </div>
                <div className="lower row pt-4">
                  <p className="pb-3">
                    You can enjoy access to your own private balcony, the room
                    is equipped with modern and most luxurious equipment to
                    bring you the most wonderful time.
                  </p>
                  <button className="btn btn-lg col-lg-3 col-6">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden p-0 mt-5 mb-5 rounded-4 col-lg-12 col-11 ">
            <div className="row">
              <div className="roomImage col-lg-6  overflow-hidden p-0">
                <img
                  src={roomImg2}
                  alt
                  className="img-fluid"
                />
              </div>
              <div className="roomInfo col-lg-6  p-5">
                <div className="upper row pe-5 border-bottom border-2 pb-5">
                  <div className="right col-lg-9">
                    <h1 className="pb-4">Love Room</h1>
                    <div className="bottomList row justify-content-around">
                      <div className="col-3 d-flex align-items-center justify-content-around p-2 rounded-2  w-auto gap-2 ">
                        <i className="fa fa-user" />
                        <p className="mb-0">5 Adults</p>
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-around p-2 rounded-2 w-auto gap-2">
                        <i className="fa fa-handshake-o" />
                        <p className="mb-0">3 Children</p>
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-around p-2 rounded-2  w-auto gap-2">
                        <i className="fa fa-user" />
                        <p className="mb-0">
                          250 ft<sup>2</sup>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="left col-lg-3   rounded-1 text-center price p-2">
                    <h3 className="p-0 m-0 fs-5 fw-bold">$300.00</h3>
                    <p className="p-0 m-0 fs-6">Per night</p>
                  </div>
                </div>
                <div className="lower row pt-4">
                  <p className="pb-3">
                    With one plush King bed , this room has been designed and
                    decorated to make you an comfort in a cozy space and help
                    you to refresh in mind and body.
                  </p>
                  <button className="btn btn-lg col-lg-3 col-6">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden p-0 mt-5 mb-5 rounded-4 col-lg-12 col-11 ">
            <div className="row">
              <div className="roomImage col-lg-6  overflow-hidden p-0">
                <img
                  src={roomImg3}
                  alt
                  className="img-fluid"
                />
              </div>
              <div className="roomInfo col-lg-6  p-5">
                <div className="upper row pe-5 border-bottom border-2 pb-5">
                  <div className="right col-lg-9">
                    <h1 className="pb-4">Asia Room</h1>
                    <div className="bottomList row justify-content-around">
                      <div className="col-3 d-flex align-items-center justify-content-around p-2 rounded-2  w-auto gap-2 ">
                        <i className="fa fa-user" />
                        <p className="mb-0">5 Adults</p>
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-around p-2 rounded-2 w-auto gap-2">
                        <i className="fa fa-handshake-o" />
                        <p className="mb-0">3 Children</p>
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-around p-2 rounded-2  w-auto gap-2">
                        <i className="fa fa-user" />
                        <p className="mb-0">
                          250 ft<sup>2</sup>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="left col-lg-3   rounded-1 text-center price p-2">
                    <h3 className="p-0 m-0 fs-5 fw-bold">$300.00</h3>
                    <p className="p-0 m-0 fs-6">Per night</p>
                  </div>
                </div>
                <div className="lower row pt-4">
                  <p className="pb-3">
                    Asia Rooms showcase lofty, bright interiors with elegantly
                    finished timber floors. With open-plan design, this room
                    offers an ideal space for relaxation.
                  </p>
                  <button className="btn btn-lg col-lg-3 col-6">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden p-0 mt-5 mb-5 rounded-4 col-lg-12 col-11 ">
            <div className="row">
              <div className="roomImage col-lg-6  overflow-hidden p-0">
                <img
                  src={roomImg1}
                  alt
                  className="img-fluid"
                />
              </div>
              <div className="roomInfo col-lg-6  p-5">
                <div className="upper row pe-5 border-bottom border-2 pb-5">
                  <div className="right col-lg-9">
                    <h1 className="pb-4">Vintage Room</h1>
                    <div className="bottomList row justify-content-around">
                      <div className="col-3 d-flex align-items-center justify-content-around p-2 rounded-2  w-auto gap-2 ">
                        <i className="fa fa-user" />
                        <p className="mb-0">5 Adults</p>
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-around p-2 rounded-2 w-auto gap-2">
                        <i className="fa fa-handshake-o" />
                        <p className="mb-0">3 Children</p>
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-around p-2 rounded-2  w-auto gap-2">
                        <i className="fa fa-user" />
                        <p className="mb-0">
                          250 ft<sup>2</sup>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="left col-lg-3   rounded-1 text-center price p-2">
                    <h3 className="p-0 m-0 fs-5 fw-bold">$300.00</h3>
                    <p className="p-0 m-0 fs-6">Per night</p>
                  </div>
                </div>
                <div className="lower row pt-4">
                  <p className="pb-3">
                    You can enjoy access to your own private balcony, the room
                    is equipped with modern and most luxurious equipment to
                    bring you the most wonderful time.
                  </p>
                  <button className="btn btn-lg col-lg-3 col-6">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};
export default Rooms;
