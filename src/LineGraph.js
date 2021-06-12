import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

function LineGraph({ casesType = "cases" }) {
  const [data, setData] = useState({});

  const options = {
    legend: {
      display: false,
    },
    elements: {
      points: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callBacks: {
        lable: function (tooltipItem, data) {
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            callback: function (value, index, values) {
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((res) => res.json())
        .then((data) => {
          const chartData = buildChartdata(data);
          setData(chartData);
        });
    };
    fetchData();
  }, [casesType]);

  const buildChartdata = (data, casesType = "cases") => {
    const chartData = [];
    let lastDataPiont;
    for (let date in data.cases) {
      if (lastDataPiont) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPiont,
        };
        chartData.push(newDataPoint);
      }
      lastDataPiont = data[casesType][date];
    }
    return chartData;
  };

  return (
    <div>
      {data?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204,16,52,0)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;
