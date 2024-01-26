import { Pie } from 'react-chartjs-2';
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import { useAppSelector } from '../../config/reduxHooksConfig';
import styles from './AssetsChart.module.scss'

const AssetsChart = () => {
    Chart.register(ArcElement, Legend, Tooltip);
    const assets = useAppSelector(state => state.assets.list)

    const chartData = {
        labels: assets.map(asset => asset.coin?.name),
        datasets: [
            {
                label: 'Доля активов в портфеле',
                data: assets.map(asset => {
                    const currentPrice = asset.coin?.market_data.current_price.usd || 0;
                    const amount = typeof asset.amount === 'number' ? asset.amount : parseFloat(asset.amount);
                    return currentPrice * amount;
                }),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        aspectRatio: 2
    }

    return (
        <div className={styles.chartContainer}>
            <h2>СУММА В ПОРТФЕЛЕ</h2>
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default AssetsChart;