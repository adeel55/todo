const chartData = {
    height: 135,
    type: 'donut',
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        labels: ['Desktop', 'Mobile', 'Tablet'],
        grid: {
            padding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        legend: {
            show: false
        }
    },
    series: [66.6, 29.7, 38.6]
}
export default chartData;
