import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsNetworkgraph from "highcharts/modules/networkgraph";
import railNetwork from "./../railNetwork.json";
import { useState, useEffect } from "react";
import CommonGraph from "./commonGraph.js";

HighchartsNetworkgraph(Highcharts);

export default function NetworkGraph() {
  const [railNode, setRailNode] = useState();
  const [railConnection, setRailConnection] = useState();
  const [chartNodes, setChartNodes] = useState();
  const [chartData, setChartData] = useState();

  useEffect(() => {
    setRailNode(railNetwork[0].nodes);
    setRailConnection(railNetwork[1].connections);
  }, []);

  useEffect(() => {
    nodesFormat();
    connFormat();
  }, [railNode, railConnection]);

  const nodesFormat = () => {
    var nodes = [];
    const shutdownMarker = {
      lineWidth: 2,
      lineColor: "red",
      fillColor: "orange",
    };
    const opMarker = {
      lineWidth: 2,
      lineColor: "#536872",
      fillColor: "#d5d9e0",
    };
    railNode?.map((data) => {
      console.log("status", data.status);
      let node = {};

      node["id"] = data.id;
      node["plotX"] = data.plotX;
      node["plotY"] = data.plotY;
      node["marker"] =
        data.status.toLowerCase() === "shutdown" ? shutdownMarker : opMarker;
      nodes.push(node);
    });
    setChartNodes(nodes);
  };

  const connFormat = () => {
    const links = [];
    railConnection?.map((data) => {
      let color =
        data.status.toLowerCase() === "completed"
          ? "green"
          : data.status.toLowerCase() === "pending"
          ? "red"
          : "#536872";
      links.push([data.from, data.to, color]);
    });
    setChartData(links);
  };

  return (
    <div className="network">
      <h3>Network graph</h3>
      {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
      {chartNodes && chartData && chartData.length > 0 && (
        // (console.log("chartData", chartNodes, chartData),
        <CommonGraph chNodes={chartNodes} chData={chartData} />
      )}
      {/* <CommonGraph chartNodes={chartNodes} chartData={chartData} /> */}
    </div>
  );
}

// details needed
// node label, distance between nodes, color criteria
// y-axis=>distance b/w nodes
// x-axis=> how to know?
// deviation=>?
