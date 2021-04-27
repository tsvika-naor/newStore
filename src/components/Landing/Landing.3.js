import { useState } from "react";
import "./landing.scss";
import TableComponent from "../layout/TableComponent/TableComponent";
import MainGraph from "./MainGraph";
import TableCompLeads from "./TableCompLeads";
import TableTotalSales from "./TableTotalSales";

const Landing = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="row">
      <div
        className="col-3 bg-gray"
        // className="col-lg-3 bg-gray mt-0 col-md-3 col-sm-3 col-xs-3"
        // d-flex flex-column vh-100  d-flex justify-content-around
      >
        <div className="left_section">
          <span id="text_hello">Hello</span>
          <span id="profile_name"> Eve!</span>
          <h5>Let’s Review the Campaigns</h5>
          <p>
            Current campaigns yield an increase of <a>2% </a>in sales as of
            february 2021
          </p>
          <p>Total sales since using RubinAI</p>
          <h1>$55,431</h1>
          <div className="left_section_bottom">
            <TableCompLeads />
          </div>
        </div>
      </div>

      <div className="col-7">
        {/* <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7"> */}
        <MainGraph />
        {/* <img src="https://photo.one.co.il/Image/GG/7,1/1523833.jpg?wpq=68" />
        <img src="https://photo.one.co.il/Image/GG/7,1/1523833.jpg?wpq=68" /> */}
      </div>

      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
        "dfdffd"
        {/* <img src="https://photo.one.co.il/Image/GG/7,1/1523833.jpg?wpq=68" />
        <img src="https://photo.one.co.il/Image/GG/7,1/1523833.jpg?wpq=68" /> */}
      </div>

      {/* <div className="col-8 align-self-center col2">row1 col2</div>
        <div className="col-2 my-col">row1 col3</div> */}
    </div>
  );
};

export default Landing;
