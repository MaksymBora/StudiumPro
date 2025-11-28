export function Contact() {
  return (
    <div className="container-fluid contact py-5">
      <div className="container py-5">
        <div className="p-5 bg-light rounded">
          <div className="row g-4">
            <div className="col-12">
              <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px' }}>
                <h4 className="text-primary border-bottom border-primary border-2 d-inline-block pb-2">Get in touch</h4>
                <p className="mb-5 fs-5 text-dark">We are here for you! how can we help, We are here for you!</p>
              </div>
            </div>

            <div className="col-lg-7">
              <h5 className="text-primary wow fadeInUp" data-wow-delay="0.1s">
                Let’s Connect
              </h5>
              <h1 className="display-5 mb-4 wow fadeInUp" data-wow-delay="0.3s">
                Send Your Message
              </h1>

              <form>
                <div className="row g-4 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="tel" className="form-control" id="phone" placeholder="Phone" />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="project" placeholder="Project" />
                      <label htmlFor="project">Your Project</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: '160px' }}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Right column: map */}
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.2s">
              <div className="h-100 rounded">
                <iframe
                  className="rounded w-100"
                  style={{ height: '100%' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251239.55612908932!2d6.7723994!3d50.935173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25a50f6c1791%3A0x427ceb0f3a5c507!2sK%C3%B6ln!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Cologne"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
