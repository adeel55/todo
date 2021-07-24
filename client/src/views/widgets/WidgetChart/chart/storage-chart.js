const chartData = {
    type: 'area',
    height: 92,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#4099ff', '#00acc1'],
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        name: 'Storage',
        data: [100, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Bandwidth',
        data: [41, 109, 45, 109, 34, 52, 41]
    }]
}
export default chartData;
