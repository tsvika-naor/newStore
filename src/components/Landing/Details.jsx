import "./details.scss";
import iconDetails1 from "../../assets/images/iconDetails1.svg";
import iconDetails2 from "../../assets/images/iconDetails2.svg";
import iconDetails3 from "../../assets/images/iconDetails3.svg";

const Details = () => {
  return (
    <div className="details_cotainer">
      <p>Click to expend </p>
      <div className="details">
        <div className="group">
          <div className="icon">
            <span className="iconDetails icon1">
              <img src={iconDetails1} />
            </span>
          </div>
          <div className="group-text">
            <span>Campaign </span>
            <span>bar </span>
          </div>
        </div>
        <div className="group">
          <div className="icon">
            <span className="iconDetails icon2">
              <img src={iconDetails2} />
            </span>
          </div>
          <div className="group-text">
            <span>Campaign </span>
            <span>bar </span>
          </div>
        </div>
        <div className="group">
          <div className="icon">
            <span className="iconDetails icon3">
              <img src={iconDetails3} />
            </span>
          </div>
          <div className="group-text">
            <span>Campaign </span>
            <span>bar </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
