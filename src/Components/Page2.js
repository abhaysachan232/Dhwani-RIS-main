import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Piechart from "./Chart/Pie";
import TimerCounter from "./timer/timer";

export const Page2 = () => {
  const [chartData, setChartData] = useState({});
  const charData = Object.keys(chartData);

  var cancelled2;

  const chart = () => {
    let inState = [];
    let Bed = [];
    axios
      .get("https://api.rootnet.in/covid19-in/hospitals/beds")
      .then((res) => {
        for (const dataObj of res.data.data.regional) {
          inState.push(dataObj.state);
          Bed.push(parseInt(dataObj.ruralBeds));
        }
        setChartData({
          labels: inState,
          datasets: [
            {
              label: "Pie Chart for Covid Bed in Rural India with all States",
              data: Bed,
              backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    cancelled2 = setTimeout(() => {
      chart();
    }, 8000);
  }, []);

  function cancelAPI2() {
    clearTimeout(cancelled2);
  }

  return (
    <div>
      <h1>This is Page 2</h1>

      <Link Link to = "/Dhwani-RIS-main" >
        <button className="btn btn-primary" onClick={cancelAPI2}>
          Go To Page 1
        </button>
      </Link>
      <div className="container">
        {charData.length > 0 ? (
          <Piechart data = {chartData} Style={{ width: "500px", Height: "700px" }} />
        
        ) : (
          <h2>Data will be available in {<TimerCounter />} sec</h2>
        )}
      </div>
    </div>
  );
};
