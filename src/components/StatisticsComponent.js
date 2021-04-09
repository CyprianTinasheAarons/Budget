import React from "react";
import { Statistic } from "semantic-ui-react";

function StatisticsComponent({ label, value, size, color }) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label>{label}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}

export default StatisticsComponent;
