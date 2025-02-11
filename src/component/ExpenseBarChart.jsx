import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
} from "recharts";
const data = [
  {
    name: "Entertainment",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Food",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Travel",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

const ExpenseBarChart = () => {
  return (
    <div className="transaction_barchart_main">
      <h1>Top Expenses</h1>
      <div className="transaction_barchart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={300}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 70,
              bottom: 30,
            }}
            layout="vertical"
          >
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip wrapperStyle={{ backgroundColor: "none" }} />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              radius={[0, 40, 40, 0]}
              barSize={20}
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseBarChart;
