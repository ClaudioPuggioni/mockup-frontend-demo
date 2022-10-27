import React from "react";
import { useState } from "react";

export default function App() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const handleClick1 = () => setIsOpen1((isOpen1) => !isOpen1);
  const handleClick2 = () => setIsOpen2((isOpen2) => !isOpen2);

  return (
    <div id="container">
      <img src="assets/top.png" alt="top banner" style={{ width: "100%" }} />
      <div className="demo-div">
        <div className="header">
          <div style={{ textAlign: "left" }}>Name</div>
          <div className="headerRight">
            <div>Hours</div>
            <div>
              1<sup>st</sup>Attempt
            </div>
            <div>
              2<sup>nd</sup>Attempt
            </div>
          </div>
        </div>
        <table className="pre-apprentise">
          <tbody>
            <tr style={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
              <button className="toggleBtn btn1" onClick={handleClick1}>
                {isOpen1 ? "–" : "+"}
              </button>
              <td className={isOpen1 ? "isOpen tableHeader" : "tableHeader"}>Safety and Building Material</td>
              <div className="table-entries-right">
                <td style={{ textAlign: "right", position: "relative", left: "3px", alignSelf: "center" }}>193</td>
                <td className="boxed-entry">
                  Fail&nbsp;&nbsp;&nbsp;
                  <img className="down-arrow" src="assets/arrow-down.svg" alt="down arrow" />
                </td>
                <td className="boxed-entry">
                  Pass&nbsp;&nbsp;&nbsp;
                  <img className="down-arrow" src="assets/arrow-down.svg" alt="down arrow" />
                </td>
              </div>
              <img style={{ display: isOpen1 ? "" : "none" }} id="vertiLine1" src="assets/vertiLine1.png" alt="vertical line 1" />
            </tr>
            <div style={{ display: isOpen1 ? "" : "none", fontSize: "11px", fontWeight: 0 }}>
              <tr>
                <td>Safety Legislation, Regulations and Industry Policy in the Trades</td>
                <div className="table-entries-right">
                  <td>25</td>
                  <td style={{ textAlign: "left" }}>29%</td>
                  <td style={{ textAlign: "left" }}>29%</td>
                </div>
              </tr>
              <div className="divider"></div>
              <tr>
                <td>Climbing, Lifting, Rigging and Hositing</td>
                <div className="table-entries-right">
                  <td>43</td>
                  <td style={{ textAlign: "left" }}>10%</td>
                  <td style={{ textAlign: "left" }}>10%</td>
                </div>
              </tr>
              <div className="divider"></div>
              <tr>
                <td>Hazardous Materials and Fire Protection</td>
                <div className="table-entries-right">
                  <td>61</td>
                  <td style={{ textAlign: "left" }}>3%</td>
                  <td style={{ textAlign: "left" }}>3%</td>
                </div>
              </tr>
              <div className="divider"></div>
              <tr>
                <td>Construction Equipment Safety Apprenticeship Training</td>
                <div className="table-entries-right">
                  <td>64</td>
                  <td style={{ textAlign: "left" }}>9%</td>
                  <td style={{ textAlign: "left" }}>TBD</td>
                </div>
              </tr>
              <div className="divider"></div>
              <tr>
                <td>Program Orientation</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </div>
            <div className="divider"></div>
            <tr>
              <button className="toggleBtn btn2">+</button>
              <td className="tableHeader">Tools</td>
              <div className="table-entries-right">
                <td>38</td>
                <td>4%</td>
                <td style={{ textAlign: "left" }}>TBD</td>
              </div>
            </tr>
            <div className="divider"></div>
            <tr>
              <button className="toggleBtn btn3">+</button>
              <td className="tableHeader">Site Preparation, Building Layout, Foundations Floor Frame System</td>
              <div className="table-entries-right">
                <td>38</td>
                <td>Credit</td>
                <td style={{ textAlign: "left" }}>TBD</td>
              </div>
            </tr>
            <div className="divider"></div>
            <tr>
              <button className="toggleBtn btn4">+</button>
              <td className="tableHeader">Residential Estimating and Drawing Interpretation</td>
              <div className="table-entries-right">
                <td>38</td>
                <td>0%</td>
                <td style={{ textAlign: "left" }}>TBD</td>
              </div>
            </tr>
            <div className="divider"></div>
            <tr>
              <button className="toggleBtn btn5" onClick={handleClick2}>
                {isOpen2 ? "–" : "+"}
              </button>
              <td className={isOpen2 ? "isOpen tableHeader" : "tableHeader"}>Additional Training</td>
              <div className="table-entries-right">
                <td>38</td>
                <td>TBD</td>
                <td style={{ textAlign: "left" }}>TBD</td>
              </div>
              <img id="vertiLine2" src="assets/vertiLine2.png" alt="vertical line 2" style={{ display: isOpen2 ? "" : "none" }} />
            </tr>
            <tr>
              <td>
                <form className="input-div" style={{ display: isOpen2 ? "" : "none" }}>
                  <input className="inputCourseName" type="text" placeholder="Enter Course Name..." />
                  <button className="yesNoBtn xBtn">x</button>
                  <button className="yesNoBtn yBtb">✓</button>
                </form>
              </td>
              <div className="table-entries-right" style={{ display: isOpen2 ? "" : "none" }}>
                <td className="boxed-entry boxed-hours">No. of hours</td>
                <td className="boxed-entry">
                  Fail&nbsp;&nbsp;&nbsp;
                  <img className="down-arrow" src="assets/arrow-down.svg" alt="down arrow" />
                </td>
                <td className="boxed-entry">
                  Pass&nbsp;&nbsp;&nbsp;
                  <img className="down-arrow" src="assets/arrow-down.svg" alt="down arrow" />
                </td>
              </div>
            </tr>
            <tr style={{ display: isOpen2 ? "" : "none" }}>
              <td className={isOpen2 ? "isOpen customLink" : "customLink"}>+ Add more</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <img src="assets/bottom.png" alt="top banner" style={{ width: "100%" }} />
    </div>
  );
}
