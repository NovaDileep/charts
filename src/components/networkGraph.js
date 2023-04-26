import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsNetworkgraph from "highcharts/modules/networkgraph";

HighchartsNetworkgraph(Highcharts);

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
      dataLabels: {
        enabled: true,
        borderRadius: 2,
        y: -10,
        shape: "callout",
      },
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
      nodes: [
        {
          id: "A",
          plotX: 640,
          plotY: 180,
          marker: {
            lineWidth: 2,
            lineColor: "#536872",
            fillColor: "#d5d9e0",
          },
          // dataLabels: {
          //   enabled: true,
          //   format:
          //     'September<br><span style="font-size: 1.3em">Wettest</span>',
          //   align: "right",
          //   verticalAlign: "middle",
          //   x: -35,
          // },
        },
        {
          id: "B",
          plotX: 750,
          plotY: 270,
          marker: {
            lineWidth: 2,
            lineColor: "#536872",
            fillColor: "#d5d9e0",
          },
        },
        {
          id: "C",
          plotX: 620,
          plotY: 200,
          marker: {
            lineWidth: 2,
            lineColor: "#536872",
            fillColor: "#d5d9e0",
          },
        },
        {
          id: "D",
          plotY: 20,
          plotX: 600,
          marker: {
            lineWidth: 2,
            lineColor: "#536872",
            fillColor: "#d5d9e0",
          },
        },
        {
          id: "E",
          plotX: 580,
          plotY: 5,
          marker: {
            lineWidth: 2,
            lineColor: "#536872",
            fillColor: "#d5d9e0",
          },
        },
        {
          id: "F",
          plotX: 620,
          plotY: 5,
          marker: {
            lineWidth: 2,
            lineColor: "red",
            fillColor: "orange",
          },
        },
        {
          id: "G",
          plotX: 600,
          plotY: 220,
          marker: {
            lineWidth: 2,
            lineColor: "#536872",
            fillColor: "#d5d9e0",
          },
        },
        {
          id: "H",
          plotX: 700,
          plotY: 320,
          marker: {
            lineWidth: 2,
            lineColor: "#536872",
            fillColor: "#d5d9e0",
          },
        },
        {
          id: "I",
          plotY: 300,
          plotX: 800,
          marker: {
            lineWidth: 2,
            lineColor: "#536872",
            fillColor: "#d5d9e0",
          },
        },
        {
          id: "J",
          plotY: 320,
          plotX: 820,
          marker: {
            lineWidth: 2,
            lineColor: "red",
            fillColor: "orange",
          },
        },
      ],
      data: [
        ["A", "B", "red"],
        ["A", "C"],
        ["A", "D", "green"],
        ["D", "E", "green"],
        ["D", "F", "green"],
        ["C", "G"],
        ["B", "H"],
        ["B", "I"],
        ["I", "J"],
      ],
    },
  ],
};

export default function NetworkGraph() {
  return (
    <div className="network">
      <h3>Network graph</h3>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

// details needed
// node label, distance between nodes, color criteria
// y-axis=>distance b/w nodes
// x-axis=> how to know?
// deviation=>?
