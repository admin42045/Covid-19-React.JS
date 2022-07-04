import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import Line from "react-apexcharts";

const Charts = () => {
  const [active, setActive] = useState([]);
  const [deceased, setDeceased] = useState([]);
  const [recovered, setRecovered] = useState([]);

  //alert(active);
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://data.covid19india.org/data.json`;

      const zeroIndexActive = [];
      const zeroIndexDeceased = [];
      const zeroIndexRecovered = [];

      try {
        const resp = await fetch(apiUrl);
        const res = await resp.json();
        console.log(res);
        console.log(res.statewise[0]);
        let total = res.statewise[0];
        do {
          zeroIndexActive.push(total.active);
          zeroIndexDeceased.push(total.deaths);
          zeroIndexRecovered.push(total.recovered);
        } while (0);

        setActive(zeroIndexActive);
        setRecovered(zeroIndexDeceased);
        setDeceased(zeroIndexRecovered);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="line-wrapper">
      <Chart
        type="donut"
        width={350}
        height={350}
        series={(active, deceased, recovered)}
        options={{
          labels: [
            ["active", active],
            ["recovered", deceased],
            ["deceased", recovered],
          ],
          plotOptions: {
            pie: {
              donut: {
                size: "90%",
                labels: {
                  show: true,
                  style: {
                    colors: ["#0C17ED", "#008000", "#808080"],
                  },
                  fontSize: 12,
                  fontWeight: "bold",
                  total: {
                    show: true,
                    label: "Confirmed",
                    showAlways: true,
                    fontSize: 12,
                    color: "rgb(56,56,56)",
                    fontWeight: "bold",
                  },
                },
              },
            },
          },
          dataLabels: {
            enabled: false,
            style: {
              colors: ["#0C17ED", "#008000", "#808080"],
            },
          },
        }}
      ></Chart>
    </div>
  );
};

export default Charts;
