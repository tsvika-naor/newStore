import React from "react";
import "./mainGraph.scss";
import budgetImg from "../../assets/images/budgetImg.svg";

const MainGraph = () => {
  return (
    <div className="graph_container">
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
      </div>
    </div>
  );
};

export default MainGraph;
