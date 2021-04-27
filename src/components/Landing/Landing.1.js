import React from "react";
import "./landing.scss";
import budgetImg from "../../assets/images/budgetImg.svg";
import TableComponent from "../layout/TableComponent/TableComponent";

const Landing = () => {
  return (
    <div className="container_control_center">
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
          <table className="left_control_table">
            <thead>
              <tr>
                <th>Campagin Name</th>
                <th>Page View</th>
                <th>Bid Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="dot"></i>insta Champ#1
                </td>
                <td>311</td>
                <td>$0.05</td>
              </tr>
              <tr>
                <td>
                  <i className="dot"></i>FB Champ#1
                </td>
                <td>300</td>
                <td>$0.17</td>
              </tr>
              <tr>
                <td>
                  <i className="dot"></i>FB Champ#2
                </td>
                <td>288</td>
                <td>$0.21</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="right_control">
        <div className="right_control_top">
          <h1 className="desc">Control Center</h1>
          <div className="ruler">
            <ul>
              <li>3M</li>
              <li>1M</li>
              <li>button</li>
              <li>6M</li>
              <li>ALL</li>
            </ul>
          </div>
        </div>
        <div className="right_control_center">
          <div className="left_section">
            <div className="circle_container">
              <div id="circle1">
                <div id="circle1In">
                  <div id="circle1InIn">
                    <img src={budgetImg} />
                  </div>
                </div>
              </div>
              <div id="line1"></div>
              <div id="line11"></div>
              <div id="line111"></div>

              <div id="circle2">
                <div id="circle2In">
                  <div id="circle2InIn">
                    <img src={budgetImg} />
                  </div>
                </div>
              </div>
              <div id="line2"></div>
              <div id="line22"></div>

              <div id="circle3">
                <div id="circle3In">
                  <div id="circle3InIn">
                    <img src={budgetImg} />
                  </div>
                </div>
              </div>
              <div id="line4"></div>

              <div id="circle4">
                <div id="circle4In">
                  <div id="circle4InIn">
                    <img src={budgetImg} />
                  </div>
                </div>
              </div>
              <div id="line44"></div>

              <div id="circle5">
                <div id="circle5In">
                  <div id="circle5InIn">
                    <img src={budgetImg} />
                  </div>
                </div>
              </div>

              <div id="circle6">
                <div id="circle6In">
                  <div id="circle6InIn">
                    <img src={budgetImg} />
                  </div>
                </div>
              </div>
              <div id="line6"></div>

              <div id="circle7">
                <div id="circle7In">
                  <div id="circle7InIn">
                    <img src={budgetImg} />
                  </div>
                </div>
              </div>
              <div id="line75"></div>

              {/* <div id="circle2"></div>
            <div id="line2"></div>

            <div id="circle3"></div>
            <div id="line3"></div>

            <div id="circle4"></div>
            <div id="line4"></div> */}
            </div>
          </div>
          <div className="right_section">
            <h5>Total Sales Growth</h5>
            <div className="table_container">
              <p className="total">$12,875</p>
              <p className="compared">Compared to $21,504 last month</p>
              {/* <TableComponent /> */}
              <table>
                <thead>
                  <tr>
                    <th>Product SUKe</th>
                    <th>Units</th>
                    <th>Sales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SUK 1232842</td>
                    <td>6504</td>
                    <td>$2,3046</td>
                  </tr>
                  <tr>
                    <td>SUK2842</td>
                    <td>6507874</td>
                    <td>$2,8776</td>
                  </tr>
                  <tr>
                    <td>SUK 12842</td>
                    <td>04</td>
                    <td>$2046</td>
                  </tr>
                  <tr>
                    <td>SUK 12842</td>
                    <td>04</td>
                    <td>$2046</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <table>
              <thead>
                <tr>
                  <th>Campagin Name</th>
                  <th>Page View</th>
                  <th>Bid Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="dot"></i>insta Champ#1
                  </td>
                  <td>311</td>
                  <td>$0.05</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
