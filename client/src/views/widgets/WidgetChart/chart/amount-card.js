const chartData =  {
    type: 'area',
    height: 90,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#FFF"],
        fill: {
            type: 'solid',
            opacity: 1
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        yaxis: {
            min: 0,
            max: 80,
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return '$'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        name: 'series1',
        data: [65, 45, 60, 40, 80]
    }]
}
export default chartData;
