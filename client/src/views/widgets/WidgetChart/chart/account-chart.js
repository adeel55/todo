const chartData =  {
    type: 'area',
    height: 240,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#4099ff', '#0e9e4a', '#ff5252'],
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
            y: {
                title: {
                    formatter: (seriesName) => ''
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        name: 'series1',
        data: [20, 90, 65, 85, 20, 80, 30]
    }, {
        name: 'series2',
        data: [70, 30, 40, 15, 60, 40, 95]
    }]
}

export default chartData;
