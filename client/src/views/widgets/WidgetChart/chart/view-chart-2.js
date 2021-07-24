const chartData = {
    type: 'area',
    height: 87,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#00acc1'],
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => 'Users:'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        name: 'series1',
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }]
}
export default chartData;
