import React, { useState } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn = () => {
  const [data, setData] = useState([
      {name: "My Team",月份: "Nov.",月均降雨量: 80},
      {name: "My Team",月份: "Jan.",月均降雨量: 130},
      {name: "My Team",月份: "Mar.",月均降雨量: 8},
      {name: "My Team",月份: "May.",月均降雨量: 8},
      {name: "My Team",月份: "July.",月均降雨量: 0},
      {name: "My Team",月份: "Sep.",月均降雨量: 130},
      {name: "My Team",月份: "Nov.",月均降雨量: 10},
      {name: "Me",月份: "Nov.",月均降雨量: 50},
      {name: "Me",月份: "Jan.",月均降雨量: 6},
      {name: "Me",月份: "Mar.",月均降雨量: 80},
      {name: "Me",月份: "May.",月均降雨量: 6},
      {name: "Me",月份: "July.",月均降雨量: 0},
      {name: "Me",月份: "Sep.",月均降雨量: 80},
      {name: "Me",月份: "Nov.",月均降雨量: 6}
]);
  var config = {
    data: data,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    dodgePadding: 2,
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        // { type: 'adjust-color' },
      ],
    },
  };
  return <Column style={{height:240}} {...config} />;
};

export default DemoColumn;