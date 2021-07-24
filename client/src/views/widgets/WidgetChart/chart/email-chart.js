const chartData = {
    height: 200,
    type: 'donut',
    options: {
        dataLabels: {
            enabled: false,
        },
        colors: ['#4099ff', '#ff5370', '#2ed8b6'],
        labels: ['Send', 'Open', 'Bounced'],
        legend: {
            show: true,
            position: 'bottom',
        }
    },
    series: [85.7, 77.56, 20.9]
}
export default chartData;
