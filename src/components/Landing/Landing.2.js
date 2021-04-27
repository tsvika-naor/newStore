import { useState } from "react";
import "./landing.scss";
import TableComponent from "../layout/TableComponent/TableComponent";
import MainGraph from "./MainGraph";
import TableCompLeads from "./TableCompLeads";
import TableTotalSales from "./TableTotalSales";

const Landing = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="container_control_center">
      {console.log(active)};
      <div className="left_control">
        <div className="left_control_top">
          <div className="profile_name">
            <span>Hello</span>
            <span id="profile_name"> Eve!</span>
          </div>
          <h5>Let’s Review the Campaigns</h5>
          <p>
            Current campaigns yield an increase of <a>2% </a>in sales as of
            february 2021
          </p>
          <p>Total sales since using RubinAI</p>
          <h1>$55,431</h1>
        </div>

        <div className="left_control_bottom">
          <h5>Recent leads </h5>
          <TableCompLeads />
        </div>
      </div>
      <div className="right_control">
        <div className="right_control_top">
          <h1 className="desc">Control Center</h1>
          <div className="ruler">
            <ul>
              <li>3M</li>
              <li>1M</li>
              <li
                className={"li " + (active ? "active" : "")}
                onClick={() => setActive(!active)}
              >
                <a>Live</a>
              </li>
              <li>6M</li>
              <li>ALL</li>
            </ul>
          </div>
        </div>
        <div className="right_control_center">
          <MainGraph />
          <div className="right_section">
            <h5>Total Sales Growth</h5>
            <div className="table_container">
              <p className="total">$12,875</p>
              <p className="compared">Compared to $21,504 last month</p>
              <TableTotalSales />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
