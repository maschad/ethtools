import React, {FC} from 'react';
import {Dimensions, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const screenWidth = Dimensions.get('window').width;

const Chart: FC<{data: ChartData}> = ({data}) => {
  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default Chart;
