import "./Features.css";

const Features = () => {
  return (
    <section className="section-features section-padding">
      <div className="container grid grid--4-cols">
        <div className="feature">
          <ion-icon class="feature-icon" name="infinite-outline" />
          <p className="feature-title">Never cook again!</p>
          <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>

        <div className="feature">
          <ion-icon class="feature-icon" name="nutrition-outline" />
          <p className="feature-title">Local and organic</p>
          <p className="feature-text">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>

        <div className="feature">
          <ion-icon class="feature-icon" name="leaf-outline" />
          <p className="feature-title">No waste</p>
          <p className="feature-text">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>

        <div className="feature">
          <ion-icon class="feature-icon" name="pause-outline" />
          <p className="feature-title">Pause anytime</p>
          <p className="feature-text">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
