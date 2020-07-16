import React, { useContext, useEffect, useState } from 'react';
import { formConstants } from '../../helpers/constants';
import { makeStyles } from "@material-ui/core/styles";
import { PieChart, Pie, Sector, Cell ,ResponsiveContainer} from 'recharts';
/* material-ui */
/* store */
import FormContext from "../../store/FormContext";
import FlowContext from "../../store/FlowContext";


const data = [
  { name: 'Considerably underweight', value: 16.5 },
  { name: 'Underweight', value: 18.5 },
  { name: 'Normal weight', value: 25.5 },
  { name: 'Overweight', value: 30.5 },
  { name: 'Class I obesity', value: 35 },
  { name: 'Class II obesity', value: 40 },
  { name: 'Class III obesity', value: 45 }];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#f91800','#f900f0','#237aff'];

const useStyles = makeStyles((theme) => ({
}));
export default function Finish() {
  const classes = useStyles();
  const { flowState, flowDispatch } = useContext(FlowContext);
  const { formState, formDispatch } = useContext(FormContext);

  const bmiCalc = () => {
    const bmi = (10000 * formState.measurments.weight) / (formState.measurments.height * formState.measurments.height);
    const bmiRound = (Math.round(bmi * 100) / 100).toFixed(2);
    return bmiRound;
  }
  return (<>
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        dataKey="value"
        activeIndex={data.findIndex(val => val.value > bmiCalc())}
        activeShape={renderActiveShape} 
        data={data}
        cx={300}
        cy={200}
        label
        startAngle={180}
        endAngle={0}           
        innerRadius="75%" 
        outerRadius="85%"
        paddingAngle={5}
      >
        { 
        data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} 
        bmi={bmiCalc()} />) }
      </Pie>
    </PieChart></ResponsiveContainer>
  </>
  )
}

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Your BMI: ${payload.bmi}`}</text>
    </g>
  );
};
