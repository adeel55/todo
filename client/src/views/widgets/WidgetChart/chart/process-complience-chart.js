const chartData = {
    height: 200,
    type: 'bar',
    options: {
        chart: {
            sparkline: {
                enabled: true
            },
        },
        colors: ["#4099ff", "#2ed8b6", "#ff5370"],
        plotOptions: {
            bar: {
                columnWidth: '55%',
                distributed: true
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 0
        },
        xaxis: {
            categories: ['Desktop', 'Tablet', 'Mobile'],
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0.25,
                gradientToColors: ["#4099ff", "#2ed8b6", "#ff5370"],
                inverseColors: true,
                opacityFrom: 0.99,
                opacityTo: 0.65,
                stops: [0, 100]
            },
        },
    },
    series: [{
        name: 'Requests',
        data: [66.6, 29.7, 32.8]
    }]
}
export default chartData;
