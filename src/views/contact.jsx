import '../assets/style/contact_css/styles.css'
const Contact = () => {
  return (
    <div>
      &lt;&gt;
      <div className=" d-flex justify-content-center   contact-header text-center align-items-center">
        <h1>Contact us</h1>
      </div>
      <section className="mt-5">
        <div className="container shadow-sm p-4 mb-5 bg-white rounded">
          <div className="row m-0">
            <div className="cstm col-12 rounded text-white col-lg-4 p-sm-2 p-0">
              <div className="container px-4 py-5 h-100">
                <div className="align-items-center">
                  <div className="row">
                    <h2>FT. HOTEL</h2>
                  </div>
                  <div>
                    <div>Contact informations</div>
                  </div>
                  <div className="d-flex custom align-items-center pt-4">
                    <i className="bi bi-envelope-fill pe-3 fs-3" />
                    <div className="d-block">
                      <h6 className="mb-0">hibban@r.co.in</h6>
                      <div className="underline-ctm" />
                    </div>
                  </div>
                  <div className="d-flex custom align-items-center">
                    <i className="bi bi-telephone-fill pe-3 fs-3" />
                    <div className="d-block">
                      <h6 className="mb-0">hibban@r.co.in</h6>
                      <div className="underline-ctm" />
                    </div>
                  </div>
                  <div className="d-flex custom align-items-center">
                    <i className="bi bi-house-fill pe-3 fs-3" />
                    <div className="d-block">
                      <h6 className="mb-0">hibban@r.co.in</h6>
                      <div className="underline-ctm" />
                    </div>
                  </div>
                </div>
                <div className="social-link d-flex align-items-end pb-4 h-50 ">
                  <i className=" bi bi-facebook fs-4 me-sm-2 py-2 px-3 me-1" />
                  <i className=" bi bi-instagram fs-4 me-sm-2 py-2 px-3 me-1" />
                  <i className=" bi bi-twitter-x fs-4 me-sm-2 py-2 px-3 me-1" />
                  <i className="bi bi-youtube fs-4 py-2 px-3" />
                </div>
              </div>
            </div>
            <div className="col-lg-8 px-sm-5 px-0 col-12">
              <div className="row mb-2">
                <h2>Leave Your Message</h2>
              </div>
              <div className="row">
                <p className="m-0">
                  Contac us today using this form and we will reach you asap
                </p>
              </div>
              <div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <label htmlFor="first-name" className="form-label" />
                        <input
                          type="name"
                          className="form-control py-3 fw-light"
                          id="first-name"
                          aria-describedby="emailHelp"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <label htmlFor="last-name" className="form-label" />
                        <input
                          type="name"
                          className="form-control py-3 fw-light"
                          id="last-name"
                          aria-describedby="emailHelp"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        />
                        <input
                          type="email"
                          className="form-control py-3 fw-light"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        />
                        <input
                          type="name"
                          className="form-control py-3 fw-light"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Your Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    />
                    <textarea
                      className=" pt-2 form-control fw-light"
                      id="exampleFormControlTextarea1"
                      rows={5}
                      placeholder="Enter Your Message"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 p-3 "
                    style={{ backgroundColor: "#0f97aa" }}
                  >
                    <h6 className="m-0">Send Messages</h6>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container pt-5 pb-5 mb-5" id="googleMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.687739470893!2d78.35877297471134!3d17.42676690167039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f5ada6d80f%3A0x6d6400aee08b61a1!2sMaulana%20Azad%20National%20Urdu%20University!5e0!3m2!1sen!2sin!4v1699035670049!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;
