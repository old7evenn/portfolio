import './ticker.css';

export const Ticker = () => {
  return (
    <div className="ticker-wrapper animation-reverse m-tb-5">
      <div className="custom-ticker" id="custom-ticker">
        <div className="custom-ticker_container">
          <p className="custom-ticker_items">
            <span className="custom-ticker_item">
              Frontend Developer •<span className="text-border">Frontend Developer • </span>
            </span>

            <span className="custom-ticker_item">
              Frontend Developer •<span className="text-border">Frontend Developer • </span>
            </span>
            <span className="custom-ticker_item">
              Frontend Developer •<span className="text-border">Frontend Developer • </span>
            </span>
            <span className="custom-ticker_item">
              Frontend Developer •<span className="text-border">Frontend Developer • </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
