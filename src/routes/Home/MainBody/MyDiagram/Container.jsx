import DateNavHeader from "components/DateNavHeader/DateNavHeader";
import Card from "components/common/Card";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useNavigate } from "react-router-dom";

export const MyDiagram = () => {
  // Data for the pie chart
  const navigate = useNavigate();
  const chartData = {
    series: [44, 55, 13, 33],
    options: {
      chart: {
        type: "donut",
        events: {
          dataPointSelection: (event, chartContext, config) => {
            const clickedSeriesValue =
              chartData.options.labels[config.dataPointIndex];
            console.log(`Clicked series value: ${clickedSeriesValue}`);
            if (clickedSeriesValue == "مرخصی") {
              navigate("/diagram/leave");
            } else if (clickedSeriesValue == "ماموریت") {
              navigate("/diagram/mission");
            } else if (clickedSeriesValue == "حضور") {
              navigate("/diagram/present");
            } else if (clickedSeriesValue == "غیبت") {
              navigate("/diagram/absence");
            }
          },
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: "55%",
          },
          dataLabels: {
            formatter: function (val) {
              return val + " نفر"; // Add ' نفر' to the label
            },
          },
        },
      },
      labels: ["غیبت", "حضور", "مرخصی", "ماموریت"],
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          console.log("opts.w.config", opts.w.config.series[opts.seriesIndex]);
          return (
            opts.w.config.labels[opts.seriesIndex] +
            ": " +
            `${opts.w.config.series[opts.seriesIndex]} نفر`
          );
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
const getDate=(date)=>{
 console.log("date",date);
}
  return (
    <div>
      <DateNavHeader getDate={getDate}/>

    <Card height="calc(100vh - 450px)" margin="24px 0 0 0">
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          height={350}
        />
      </div>
    </Card>    
  </div>
  );
};
