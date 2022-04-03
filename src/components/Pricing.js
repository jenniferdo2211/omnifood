import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="section-pricing section-padding">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container grid grid--2-cols">
        <div className="pricing-plan pricing-plan--starter">
          <header className="plan-header">
            <div className="plan-name">Starter</div>
            <p className="plan-price">
              <span>$</span>399
            </p>
            <div className="plan-text">
              per month. That's just $13 per meal!
            </div>
          </header>

          <ul className="list plan-list">
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark" />
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark" />
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark" />
              <span>Free delivery</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="close" />
              <span>Get access to latest recipes</span>
            </li>
          </ul>

          <div className="plan-sign-up">
            <a href="#" className="btn btn-primary">
              Start your healthy plan
            </a>
          </div>
        </div>

        <div className="pricing-plan pricing-plan--complete">
          <header className="plan-header">
            <div className="plan-name">Complete</div>
            <p className="plan-price">
              <span>$</span>649
            </p>
            <div className="plan-text">
              per month. That's just $11 per meal!
            </div>
          </header>

          <ul className="list">
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark" />
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark" />
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark" />
              <span>Free delivery</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark" />
              <span>Get access to latest recipes</span>
            </li>
          </ul>

          <div className="plan-sign-up">
            <a href="#" className="btn btn-primary">
              Start your healthy plan
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <aside className="plan-addition-info">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>
    </section>
  );
};

export default Pricing;
