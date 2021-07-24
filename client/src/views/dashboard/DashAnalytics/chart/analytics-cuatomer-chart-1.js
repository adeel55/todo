const chartData = {
    height: 150,
    type: 'donut',
    options: {
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '75%'
                }
            }
        },
        labels: ['New', 'Return'],
        legend: {
            show: false
        },
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        colors: ["#fff", "#2ed8b6"],
        fill: {
            opacity: [1, 1]
        },
        stroke: {
            width: 0,
        }
    },
    series: [20, 15]
}
export default chartData;
