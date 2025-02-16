import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
} from "recharts";
import { useExpenseContext } from "../contextApi/ContextProvider";
import { graphData } from "../helper/helper";

const ExpenseBarChart = () => {
  const { expenses, expenseBalance } = useExpenseContext();
  const data = useMemo(
    () => graphData(expenses).sort((a, b) => b.total - a.total),
    [expenses, expenseBalance]
  );

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
              dataKey="total"
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
