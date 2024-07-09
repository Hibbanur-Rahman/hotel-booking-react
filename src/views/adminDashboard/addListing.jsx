const AddListing = () => {
  return (
    <div>
      &lt;&gt;
      <div className="main container-fluid d-flex m-0 p-0 ">
        <div
          className="contents container-fluid m-0 p-0"
          style={{ marginLeft: "300px !important" }}
        >
          <div className="addListingMain row m-0 p-5">
            {/* ========================= listingInfo ================================= */}
            <div className="listingInfo card m-0 p-0 border-0">
              <div className="row m-0 p-3 align-items-center border border-start-0 border-bottom-1 border-top-0 border-end-0">
                <i className="bi bi-file-earmark-fill text-primary w-auto m-0 p-0 pe-2" />
                <h4 className="fw-bold fs-6 w-auto m-0 p-0">Listing Info</h4>
              </div>
              <form
                action="/adminRoutes/Controller/addHotel"
                method="post"
                className="m-0 p-3"
              >
                <p className="text-secondary m-0">Listing Title</p>
                <input
                  type="text"
                  id="listingTitle"
                  className="input-group rounded-2 border border-1 p-3 mt-2"
                  placeholder="Decathlon Sport House"
                  name="name"
                />
                <div className="row m-0 p-0 pt-3">
                  <div className="col-6 m-0 p-0 pe-3">
                    <p className="m-0 p-0 pb-2 text-secondary">Categories</p>
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="categories"
                    >
                      <option selected>Hotel &amp; Spa</option>
                      <option value="Hotel & Spa">Hotel &amp; Spa</option>
                      <option value="Education">Education</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Restaurents">Restaurents</option>
                      <option value="Cafe & Bars">Cafe &amp; Bars</option>
                      <option value="Bankings">Bankings</option>
                      <option value="Services">Services</option>
                    </select>
                  </div>
                  <div className="col-6 m-0 p-0 ps-3">
                    <p className="m-0 p-0 pb-2 text-secondary">Keywords</p>
                    <input
                      type="text"
                      id="keywords"
                      className="input-group input-group rounded-2 border border-1 p-3"
                      placeholder="Type Keywords by comma's"
                      name="HotelKeyword"
                    />
                  </div>
                </div>
                <p className="text-secondary m-0 mt-3 p-0 pb-2">
                  About Listing
                </p>
                <textarea
                  id
                  cols={30}
                  rows={6}
                  className="form-control p-3"
                  placeholder="Describe your self"
                  name="description"
                  defaultValue={""}
                />
                <button type="submit" className="btn btn-primary mt-3">
                  Submit &amp; Preview
                </button>
              </form>
            </div>
            {/* ========================= location Info ================================= */}
            <div className="locationInfo card m-0 mt-5 p-0 border-0">
              <div className="row m-0 p-3 align-items-center border border-start-0 border-bottom-1 border-top-0 border-end-0">
                <i className="bi bi-geo-alt-fill text-primary w-auto m-0 p-0 pe-2" />
                <h4 className="fw-bold fs-6 w-auto m-0 p-0">Location Info</h4>
              </div>
              <form
                action="/adminRoutes/Controller/addLocality"
                method="post"
                className="m-0 p-3"
              >
                <div className="row m-0 p-0 pt-3">
                  <div className="col-6 m-0 p-0 pe-3">
                    <p className="m-0 p-0 pb-2 text-secondary">Lattitude</p>
                    <input
                      type="text"
                      id="keywords"
                      className="input-group input-group rounded-2 border border-1 p-3"
                      placeholder={8054256}
                      name="lattitude"
                    />
                  </div>
                  <div className="col-6 m-0 p-0 ps-3">
                    <p className="m-0 p-0 pb-2 text-secondary">Longitude</p>
                    <input
                      type="text"
                      id="keywords"
                      className="input-group input-group rounded-2 border border-1 p-3"
                      placeholder={-7254625}
                      name="longitude"
                    />
                  </div>
                </div>
                <div className="row m-0 p-0 pt-3">
                  <iframe
                    className="m-0 p-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.68773947089!2d78.35877297462784!3d17.426766901670543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f5ada6d80f%3A0x6d6400aee08b61a1!2sMaulana%20Azad%20National%20Urdu%20University!5e0!3m2!1sen!2sin!4v1701894706945!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="row m-0 p-0 pt-3">
                  <div className="col-6 m-0 p-0 pe-3">
                    <p className="m-0 p-0 pb-2 text-secondary">States</p>
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="state"
                    >
                      <option selected>Bihar</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Gujrat">Gujrat</option>
                      <option value="UP">UP</option>
                      <option value="Goa">Goa</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                    </select>
                  </div>
                  <div className="col-6 m-0 p-0 ps-3">
                    <p className="m-0 p-0 pb-2 text-secondary">City</p>
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="city"
                    >
                      <option selected>Darbhanga</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Patna">Patna</option>
                      <option value="Aligarh">Aligarh</option>
                      <option value="Allahabad">Allahabad</option>
                      <option value="Muzzaffarpur">Muzzaffarpur</option>
                      <option value="Agra">Agra</option>
                      <option value="Lucknow">Lucknow</option>
                    </select>
                  </div>
                </div>
                <div className="row m-0 p-0 pt-3">
                  <div className="col-6 m-0 p-0 pe-3">
                    <p className="m-0 p-0 pb-2 text-secondary">Address</p>
                    <input
                      type="text"
                      id="keywords"
                      className="input-group input-group rounded-2 border border-1 p-3"
                      placeholder="ward 05, Near Jama masjid,Hayaghat"
                      name="address"
                    />
                  </div>
                  <div className="col-6 m-0 p-0 ps-3">
                    <p className="m-0 p-0 pb-2 text-secondary">Zip Code</p>
                    <input
                      type="text"
                      id="keywords"
                      className="input-group input-group rounded-2 border border-1 p-3"
                      placeholder={847301}
                      name="pin"
                    />
                  </div>
                </div>
                <div className="row m-0 p-0 pt-3">
                  <div className="col-6 m-0 p-0 pe-3">
                    <p className="m-0 p-0 pb-2 text-secondary">Mobile</p>
                    <input
                      type="text"
                      id="keywords"
                      className="input-group input-group rounded-2 border border-1 p-3"
                      placeholder="+91 9973152523"
                      name="mobile"
                    />
                  </div>
                  <div className="col-6 m-0 p-0 ps-3">
                    <p className="m-0 p-0 pb-2 text-secondary">Email</p>
                    <input
                      type="text"
                      id="keywords"
                      className="input-group input-group rounded-2 border border-1 p-3"
                      placeholder="hibbanrahmanhyt@gmail.com"
                      name="email"
                    />
                  </div>
                </div>
                <p className="text-secondary m-0 mt-3 p-0 pb-2">Website</p>
                <input
                  type="text"
                  id="listingWebsite"
                  className="input-group rounded-2 border border-1 p-3 mt-2"
                  placeholder="https://hibbanur-rahman.me/hotel-booking.com"
                  name="website"
                />
                <button type="submit" className="btn btn-primary mt-3">
                  Submit &amp; Preview
                </button>
              </form>
            </div>
            {/* ========================= Image Gallery ================================= */}
            <div className="ImageGallery card m-0 mt-5 p-0 border-0">
              <div className="row m-0 p-3 align-items-center border border-start-0 border-bottom-1 border-top-0 border-end-0">
                <i className="bi bi-camera-fill text-primary w-auto m-0 p-0 pe-2" />
                <h4 className="fw-bold fs-6 w-auto m-0 p-0">
                  Image &amp; Gallery Option
                </h4>
              </div>
              <form
                action="/adminRoutes/Controller/addGalleryImage"
                method="post"
                className="m-0 p-3"
                encType="multipart/form-data"
              >
                <div className="row m-0 p-0">
                  <div className="col-4 uploadFile">
                    <p className="m-0 p-0 pb-2 text-secondary">Upload Logo</p>
                    <div className="imagePreviewCard card  p-0 m-0 d-flex justify-content-center align-items-center rounded-4 d-none">
                      <img
                        src="../../images/adminDashboard/car-img.png"
                        alt
                        className="img-fluid rounded-4 h-100 w-auto"
                      />
                    </div>
                    <div className="imgInputFeildCard card d-flex justify-content-center align-items-center border-0 rounded-4">
                      <div className="inputField uploadFile row p-0  m-0 h-100 w-100">
                        <input
                          type="file"
                          id="profilePhotoUpload"
                          accept=".png,.jpg,.jpeg"
                          className="profilePhotoUpload m-0 w-100 p-0 border border-0"
                          name="GalleryImage"
                        />
                      </div>
                      <img
                        src="../../images/adminDashboard/upload-icon.png"
                        alt
                        width={50}
                        height={50}
                        className="img-fluid m-0 p-0 position-absolute bottom-50"
                      />
                      <p className="m-0 p-0 text-secondary position-absolute pt-5">
                        Drag files here to upload
                      </p>
                    </div>
                    <p className="m-0 p-0 pb-2 pt-2 text-secondary">
                      Maximum file size: 2 MB.
                    </p>
                  </div>
                  <div className="col-4 uploadFile">
                    <p className="m-0 p-0 pb-2 text-secondary">
                      Featured Image
                    </p>
                    <div className="imagePreviewCard card  p-0 m-0 d-flex justify-content-center align-items-center rounded-4 d-none">
                      <img
                        src="../../images/adminDashboard/car-img.png"
                        alt
                        className="img-fluid rounded-4 h-100 w-auto"
                      />
                    </div>
                    <div className="imgInputFeildCard card d-flex justify-content-center align-items-center border-0 rounded-4">
                      <div className="inputField uploadFile row p-0  m-0 h-100 w-100">
                        <input
                          type="file"
                          id="featuredUpload"
                          accept=".png,.jpg,.jpeg"
                          className="profilePhotoUpload m-0 w-100 p-0 border border-0"
                          name="GalleryImage"
                        />
                      </div>
                      <img
                        src="../../images/adminDashboard/upload-icon.png"
                        alt
                        width={50}
                        height={50}
                        className="img-fluid m-0 p-0 position-absolute bottom-50"
                      />
                      <p className="m-0 p-0 text-secondary position-absolute pt-5">
                        Drag files here to upload
                      </p>
                    </div>
                    <p className="m-0 p-0 pb-2 pt-2 text-secondary">
                      Maximum file size: 2 MB.
                    </p>
                  </div>
                  <div className="col-4 uploadFile">
                    <p className="m-0 p-0 pb-2 text-secondary">Image Gallery</p>
                    <div className="imagePreviewCard card  p-0 m-0 d-flex justify-content-center align-items-center rounded-4 d-none">
                      <img
                        src="../../images/adminDashboard/car-img.png"
                        alt
                        className="img-fluid rounded-4 h-100 w-auto"
                      />
                    </div>
                    <div className="imgInputFeildCard card d-flex justify-content-center align-items-center border-0 rounded-4">
                      <div className="inputField uploadFile row p-0  m-0 h-100 w-100">
                        <input
                          type="file"
                          id="galleryUpload"
                          accept=".png,.jpg,.jpeg"
                          className="profilePhotoUpload m-0 w-100 p-0 border border-0"
                          name="GalleryImage"
                        />
                      </div>
                      <img
                        src="../../images/adminDashboard/upload-icon.png"
                        alt
                        width={50}
                        height={50}
                        className="img-fluid m-0 p-0 position-absolute bottom-50"
                      />
                      <p className="m-0 p-0 text-secondary position-absolute pt-5">
                        Drag files here to upload
                      </p>
                    </div>
                    <p className="m-0 p-0 pb-2 pt-2 text-secondary">
                      Maximum file size: 2 MB.
                    </p>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit &amp; Preview
                </button>
              </form>
            </div>
            {/* ========================= Menu Items ================================= */}
            <div className="menuItems card m-0 mt-5 p-0 border-0">
              <div className="row m-0 p-3 align-items-center border border-start-0 border-bottom-1 border-top-0 border-end-0">
                <i className="las la-utensils text-primary w-auto m-0 p-0 pe-2" />
                <h4 className="fw-bold fs-6 w-auto m-0 p-0">Menu Items</h4>
              </div>
              <div className="row m-0 p-0 manyForm">
                <form
                  action="/adminRoutes/Controller/addMenu"
                  method="post"
                  className="m-0 p-3 menuItemsForm"
                  id="menuItemsForm"
                >
                  <div className="row m-0 p-0 pt-3">
                    <div className="col-4 m-0 p-0 pe-3">
                      <p className="m-0 p-0 pb-2 text-secondary">Item Name</p>
                      <input
                        type="text"
                        id="keywords"
                        className="input-group input-group rounded-2 border border-1 p-3"
                        placeholder="Spicy Brunchi Burger"
                        name="ItemName"
                      />
                    </div>
                    <div className="col-4 m-0 p-0 ps-3">
                      <p className="m-0 p-0 pb-2 text-secondary">Category</p>
                      <input
                        type="text"
                        id="keywords"
                        className="input-group input-group rounded-2 border border-1 p-3"
                        placeholder="Fast Food"
                        name="ItemCategory"
                      />
                    </div>
                    <div className="col-4 m-0 p-0 ps-3">
                      <p className="m-0 p-0 pb-2 text-secondary">Price</p>
                      <input
                        type="text"
                        id="keywords"
                        className="input-group input-group rounded-2 border border-1 p-3"
                        placeholder="ex. 49 USD"
                        name="ItemPrice"
                      />
                    </div>
                  </div>
                  <p className="text-secondary m-0 mt-3 p-0 pb-2">About Item</p>
                  <textarea
                    cols={30}
                    rows={6}
                    className="form-control p-3"
                    placeholder="Describe your Item"
                    name="ItemDescription"
                    defaultValue={""}
                  />
                </form>
              </div>
              <div className="row m-0 p-3 pt-0">
                <button className="btn btn-primary mt-3 w-auto" id="addMenu">
                  Add New
                </button>
                <button
                  type="button"
                  className="btn btn-primary mt-3 w-auto ms-3"
                  id="submitMenuItems"
                >
                  submit &amp; preview
                </button>
              </div>
            </div>
            {/* ========================= Working Our ================================= */}
            <div className="WorkingHours card m-0 mt-5 p-0 border-0">
              <div className="row m-0 p-3 align-items-center border border-start-0 border-bottom-1 border-top-0 border-end-0">
                <i className="bi bi-clock-fill text-primary w-auto m-0 p-0 pe-2" />
                <h4 className="fw-bold fs-6 w-auto m-0 p-0">Working Hours</h4>
              </div>
              <form
                action="/adminRoutes/Controller/addWorkingHours"
                method="post"
                className="m-0 p-3"
              >
                <div className="row align-items-center justify-content-around pb-3 pt-3">
                  <p className="m-0 p-0 text-secondary col-1">Monday</p>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="MondayOpening"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="MondayClosing"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center justify-content-around pb-3 pt-3">
                  <p className="m-0 p-0 text-secondary col-1">Tuesday</p>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="TuesdayOpening"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="TuesdayClosing"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center justify-content-around pb-3 pt-3">
                  <p className="m-0 p-0 text-secondary col-1">Wednessday</p>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="WednessdayOpening"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="WednessdayClosing"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center justify-content-around pb-3 pt-3">
                  <p className="m-0 p-0 text-secondary col-1">Thursday</p>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="ThursdayOpening"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="ThursdayClosing"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center justify-content-around pb-3 pt-3">
                  <p className="m-0 p-0 text-secondary col-1">Friday</p>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="FridayOpening"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="FridayClosing"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center justify-content-around pb-3 pt-3">
                  <p className="m-0 p-0 text-secondary col-1">Saturday</p>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="SaturdayOpening"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="SaturdayClosing"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center justify-content-around pb-3 pt-3">
                  <p className="m-0 p-0 text-secondary col-1">Sunday</p>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="SundayOpening"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                  <div className="col-5 m-0 p-0 pe-3">
                    <select
                      className="form-select m-0 border-1 p-3"
                      aria-label="select"
                      name="SundayClosing"
                    >
                      <option selected>Opening Time</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="Closing Time">Closing Time</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-3 w-auto"
                  id="submitMenuItems"
                >
                  submit &amp; preview
                </button>
              </form>
            </div>
            {/* ========================= Amentities Info ================================= */}
            <div className="AmentiesOptions card m-0 mt-5 p-0 border-0">
              <div className="row m-0 p-3 align-items-center border border-start-0 border-bottom-1 border-top-0 border-end-0">
                <i className="bi bi-cup-hot text-primary w-auto m-0 p-0 pe-2" />
                <h4 className="fw-bold fs-6 w-auto m-0 p-0">
                  Amenties Options
                </h4>
              </div>
              <form
                action="/adminRoutes/Controller/addAmenities"
                method="post"
                className="m-0 p-3"
              >
                <div className="row m-0 p-0 mb-3">
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      id="HealthScore"
                      name="HealthScore"
                      defaultValue="Health Score 8.7/10"
                    />
                    <label
                      htmlFor="HealthScore"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Health Score 8.7/10
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="Reservations"
                      id="Reservations"
                      defaultValue="Reservations"
                    />
                    <label
                      htmlFor="Reservations"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Reservations
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="VegetarianOptions"
                      id="VegetarianOptions"
                      defaultValue="Vegetarian Options"
                    />
                    <label
                      htmlFor="VegetarianOptions"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Vegetarian Options
                    </label>
                  </div>
                </div>
                <div className="row m-0 p-0 mb-3 mt-3">
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="ModerateNoise"
                      id="ModerateNoise"
                      defaultValue="Moderate Noise"
                    />
                    <label
                      htmlFor="ModerateNoise"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Moderate Noise
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="GoodForKids"
                      id="GoodForKids"
                      defaultValue="Good For Kids"
                    />
                    <label
                      htmlFor="GoodForKids"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Good For Kids
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="PrivateLotParking"
                      id="PrivateLotParking"
                      defaultValue="Private Lot Parking"
                    />
                    <label
                      htmlFor="PrivateLotParking"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Private Lot Parking
                    </label>
                  </div>
                </div>
                <div className="row m-0 p-0 mb-3 mt-3">
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="BeerWine"
                      id="BeerWine"
                      defaultValue="Beer & Wine"
                    />
                    <label
                      htmlFor="BeerWine"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Beer &amp; Wine
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="TVServices"
                      id="TVServices"
                      defaultValue="TV Services"
                    />
                    <label
                      htmlFor="TVServices"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      TV Services
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="PetsAllow"
                      id="PetsAllow"
                      defaultValue="Pets Allow"
                    />
                    <label
                      htmlFor="PetsAllow"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Pets Allow
                    </label>
                  </div>
                </div>
                <div className="row m-0 p-0 mb-3 mt-3">
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="OffersDelivery"
                      id="OffersDelivery"
                      defaultValue="Offers Delivery"
                    />
                    <label
                      htmlFor="OffersDelivery"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Offers Delivery
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      nam="StaffWearsMasks"
                      id="StaffWearsMasks"
                      defaultValue="Staff wears masks"
                    />
                    <label
                      htmlFor="StaffWearsMasks"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Staff wears masks
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="AcceptsCreditCards"
                      id="AcceptsCreditCards"
                      defaultValue="Accepts Credit Cards"
                    />
                    <label
                      htmlFor="AcceptsCreditCards"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Accepts Credit Cards
                    </label>
                  </div>
                </div>
                <div className="row m-0 p-0 mb-3 mt-3">
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="OffersCatering"
                      id="OffersCatering"
                      defaultValue="Offers Catering"
                    />
                    <label
                      htmlFor="OffersCatering"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Offers Catering
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="GoodforBreakfast"
                      id="GoodforBreakfast"
                      defaultValue="Good for Breakfast"
                    />
                    <label
                      htmlFor="GoodforBreakfast"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Good for Breakfast
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="WaiterService"
                      id="WaiterService"
                      defaultValue="Waiter Service"
                    />
                    <label
                      htmlFor="WaiterService"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Waiter Service
                    </label>
                  </div>
                </div>
                <div className="row m-0 p-0 mb-3 mt-3">
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="DriveThru"
                      id="DriveThru"
                      defaultValue="Drive-Thru"
                    />
                    <label
                      htmlFor="DriveThru"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Drive-Thru
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="OutdoorSeating"
                      id="OutdoorSeating"
                      defaultValue="Outdoor Seating"
                    />
                    <label
                      htmlFor="OutdoorSeating"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Outdoor Seating
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="OffersTakeout"
                      id="OffersTakeout"
                      defaultValue="Offers Takeout"
                    />
                    <label
                      htmlFor="OffersTakeout"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Offers Takeout
                    </label>
                  </div>
                </div>
                <div className="row m-0 p-0 mb-3 mt-3">
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="VeganOptions"
                      id="VeganOptions"
                      defaultValue="Vegan Options"
                    />
                    <label
                      htmlFor="VeganOptions"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Vegan Options
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="Casual"
                      id="Casual"
                      defaultValue="Casual"
                    />
                    <label
                      htmlFor="Casual"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Casual
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="GoodForGroups"
                      id="GoodForGroups"
                      defaultValue="Good for Groups"
                    />
                    <label
                      htmlFor="GoodForGroups"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Good for Groups
                    </label>
                  </div>
                </div>
                <div className="row m-0 p-0 mb-3 mt-3">
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="BrunchLunchDinner"
                      id="BrunchLunchDinner"
                      defaultValue="Brunch,Lunch,Dinner"
                    />
                    <label
                      htmlFor="BrunchLunchDinner"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Brunch,Lunch,Dinner
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="FreeWiFi"
                      id="FreeWiFi"
                      defaultValue="Free Wi-Fi"
                    />
                    <label
                      htmlFor="FreeWiFi"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Free Wi-Fi
                    </label>
                  </div>
                  <div className="col-4 d-flex align-items-center ">
                    <input
                      type="checkbox"
                      name="WheelchairAccessible"
                      id="WheelchairAccessible"
                      defaultValue="Wheelchair Accessible"
                    />
                    <label
                      htmlFor="WheelchairAccessible"
                      className="text-secondary m-0 p-0 ps-2"
                    >
                      Wheelchair Accessible
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit &amp; Preview
                </button>
              </form>
            </div>
            {/* ========================= Social Links Info ================================= */}
            <div className="SocialLinks card m-0 mt-5 p-0 border-0">
              <div className="row m-0 p-3 align-items-center border border-start-0 border-bottom-1 border-top-0 border-end-0">
                <i className="bi bi-people-fill text-primary w-auto m-0 p-0 pe-2" />
                <h4 className="fw-bold fs-6 w-auto m-0 p-0">Social Links</h4>
              </div>
              <form
                action="/adminRoutes/Controller/addSocialLink"
                method="post"
                className="m-0 p-3"
              >
                <div className="row m-0 p-0 pt-3">
                  <div className="col-6 m-0 p-0 pe-3">
                    <div className="row m-0 p-0 d-flex align-items-center mb-2">
                      <i className="fa fa-facebook-f text-primary w-auto m-0 p-0 fs-5" />
                      <p className="m-0 p-0 text-secondary w-auto ps-2">
                        Facebook
                      </p>
                    </div>
                    <input
                      type="text"
                      id="keywords"
                      className="input-group input-group rounded-2 border border-1 p-3"
                      placeholder="https://facebook.com/"
                      name="facebook"
                    />
                  </div>
                  <div className="col-6 m-0 p-0 ps-3">
                    <div className="row m-0 p-0 d-flex align-items-center mb-2">
                      <i className="fa fa-twitter text-primary w-auto m-0 p-0 fs-5" />
                      <p className="m-0 p-0 text-secondary w-auto ps-2">
                        Twitter
                      </p>
                    </div>
                    <input
                      type="text"
                      id="keywords"
                      className="input-group input-group rounded-2 border border-1 p-3"
                      placeholder="https://twitter.com/"
                      name="twitter"
                    />
                  </div>
                </div>
                <div className="row m-0 p-0 pt-3">
                  <div className="col-6 m-0 p-0 pe-3">
                    <div className="row m-0 p-0 d-flex align-items-center mb-2">
                      <i className="fa fa-instagram text-primary w-auto m-0 p-0 fs-5" />
                      <p className="m-0 p-0 text-secondary w-auto ps-2">
                        Instagram
                      </p>
                    </div>
                    <input
                      type="text"
                      id="keywords"
                      className="input-group input-group rounded-2 border border-1 p-3"
                      placeholder="https://instagram.com/"
                      name="instagram"
                    />
                  </div>
                  <div className="col-6 m-0 p-0 ps-3">
                    <div className="row m-0 p-0 d-flex align-items-center mb-2">
                      <i className="fa fa-linkedin text-primary w-auto m-0 p-0 fs-5" />
                      <p className="m-0 p-0 text-secondary w-auto ps-2">
                        Linkedin
                      </p>
                    </div>
                    <input
                      type="text"
                      id="keywords"
                      className="input-group input-group rounded-2 border border-1 p-3"
                      placeholder="https://linkedin.com/"
                      name="linkedin"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit &amp; Preview
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
