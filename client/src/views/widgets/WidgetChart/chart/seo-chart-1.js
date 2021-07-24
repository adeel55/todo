const chartData = {
    type: 'area',
    height: 120,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#2ed8b6'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#2ed8b6'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 0.9,
                opacityTo: 0.5,
                stops: [0, 100, 100, 100]
            },
        },
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
                    formatter: (seriesName) => {
                        return 'Ticket ';
                    }
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [40, 25, 60, 50, 75, 60]
    }]
}
export default chartData;
