import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import s from './Chart.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Chart = ({ chartData, transactionCategory, expenseValue, event }) => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');

  const chooseBgColor = arr => {
    return arr.map((_, index) => (index % 3 === 0 ? '#FF751D' : '#FFDAC0'));
  };

  const chartArr = Object.entries(chartData);

  const sortedData = [...chartArr].sort((a, b) =>
    transactionCategory ? b[1] - a[1] : b[1].total - a[1].total
  );

  const transactionValue = sortedData.map(property =>
    transactionCategory ? property[1].total : property[1]
  );

  const getTransactionData = (event, transactionValue) => {
    return event ? expenseValue : transactionValue;
  };

  const transactionData = getTransactionData(event, transactionValue);

  const labelsOfCategory = sortedData.map(property => property[0]);

  const getLabels = (event, labelsOfCategory) => {
    return event ? transactionCategory : labelsOfCategory;
  };

  const labels = getLabels(event, labelsOfCategory);

  const getMaxValueFromData = dataArr => {
    let maxValue = 0;
    dataArr.forEach(value => {
      if (maxValue < value) maxValue = value;
    });
    return maxValue;
  };

  const maxValueOfScaleY =
    getMaxValueFromData(transactionData) +
    getMaxValueFromData(transactionData) * 0.4;

  const options = {
    responsive: true,
    aspectRatio: mobileMediaQuery ? 0.8 : 2,
    plugins: {
      datalabels: {
        color: '#52555F',
        align: mobileMediaQuery ? 'right' : 'top',
        anchor: mobileMediaQuery ? 'start' : 'end',
        padding: {
          top: mobileMediaQuery ? -30 : 30,
          right: 10,
          bottom: 0,
        },
        formatter: function (value) {
          return value + '€';
        },
      },
    },
    indexAxis: mobileMediaQuery ? 'y' : 'x',

    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          LayoutPosition: 'top',
          display: !mobileMediaQuery,
        },
      },
      y: {
        max: maxValueOfScaleY,
        grid: {
          display: !mobileMediaQuery,
          drawBorder: false,
        },

        ticks: {
          LayoutPosition: 'top',
          display: mobileMediaQuery,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: transactionData,
        maxBarThickness: mobileMediaQuery ? 20 : 30,
        backgroundColor: chooseBgColor(labels),
        borderRadius: 10,
        inflateAmount: mobileMediaQuery ? 2 : 10,
      },
    ],
  };

  return (
    <div className={s.chartBox}>
      <Bar options={options} data={data} plugins={[ChartDataLabels]} />
    </div>
  );
};

Chart.propTypes = {
  chartData: PropTypes.object,
  transactionCategory: PropTypes.array,
  expenseValue: PropTypes.array,
  event: PropTypes.object,
};

export default Chart;
