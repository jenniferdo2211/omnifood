import "./FeaturedIn.css";

const FeaturedIn = () => {
  return (
    <div className="section-featured">
      <div className="container margin-bottom-md">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src="img/logos/techcrunch.png" alt="Techcrunch logo" />
          <img
            src="img/logos/business-insider.png"
            alt="Business Insider logo"
          />
          <img
            src="img/logos/the-new-york-times.png"
            alt="The New York Times logo"
          />
          <img src="img/logos/forbes.png" alt="Forbes logo" />
          <img src="img/logos/usa-today.png" alt="USA Today logo" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
