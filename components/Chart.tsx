import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  Area,
  Label,
} from "recharts";
import { GridData } from "./Grid";

export default function Chart({ data }) {
  const formatTooltip = (payload: GridData) => {
    return `Amount: ${payload.Amount}, Group: ${payload.Group}, Description: ${payload.Description}`;
  };
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year">
          <Label value="Year" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis
          label={{ value: "Amount", angle: -90, position: "insideLeft" }}
        />
        <Tooltip
          separator=""
          formatter={(value, name, props) => [formatTooltip(props.payload), ""]}
        />
        <Area
          type="monotone"
          dataKey="Amount"
          stroke="#5245e4"
          fill="#4e43c6"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
