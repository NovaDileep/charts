import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsNetworkgraph from "highcharts/modules/networkgraph";

HighchartsNetworkgraph(Highcharts);

export default function CommonGraph({ chNodes, chData }) {
  const options = {
    chart: {
      type: "networkgraph",
      // styledMode: true,
    },
    title: {
      text: "network graph",
    },
    plotOptions: {
      networkgraph: {
        series: {
          dataLabels: {
            shape: "callout",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            style: {
              color: "#FFFFFF",
              textOutline: "none",
            },
          },
        },
        keys: ["from", "to", "color"],
        // layoutAlgorithm: {
        //   linkLength: 20, // in pixels
        // },
      },
      series: {
        // dataLabels: {
        //   enabled: true,
        //   borderRadius: 2,
        //   y: -10,
        //   shape: "callout",
        // },
        dataLabels: {
          enabled: true,
          // linkTextPath: {
          //   attributes: {
          //     dy: 12,
          //   },
          // },
          linkFormat: "",
          // textPath: {
          //   enabled: true,
          //   // attributes: {
          //   //   dy: 14,
          //   //   startOffset: "45%",
          //   //   textLength: 80,
          //   // },
          // },
          // format: "Node: {point.name}",
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    series: [
      {
        link: {
          width: 3,
          length: 180,
          color: "#536872",
        },
        marker: {
          lineWidth: 2,
          // lineColor: "#536872",
          // fillColor: "#d5d9e0",
        },
        layoutAlgorithm: {
          maxIterations: 0,
        },
        nodes: chNodes,
        data: chData,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
