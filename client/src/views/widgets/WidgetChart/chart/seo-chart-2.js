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
        colors: ['#4099ff'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#4099ff'],
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
