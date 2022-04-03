import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div className="section-cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free</h2>
            <div className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </div>

            <form action="#" className="cta-form">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  name="fullName"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john.smith@gmail.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select id="select-where" required>
                  <option value="">Please choose</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">Youtube</option>
                  <option value="facebook">Facebook</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button type="submit" class="btn btn--form">
                Sign up now
              </button>
            </form>
          </div>

          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
