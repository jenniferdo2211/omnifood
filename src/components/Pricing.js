import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="section-pricing section-padding">
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

          <ul className="list">
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>Free delivery</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="close"></ion-icon>
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
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>Free delivery</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
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
    </div>
  );
};

export default Pricing;
