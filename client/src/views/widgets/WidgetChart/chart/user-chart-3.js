const chartData = {
    height: 150,
    type: 'area',
    options: {
        chart: {
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 3,
            curve: 'straight',
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#ffb64d'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 0.9,
                opacityTo: 0.5,
                stops: [0, 100, 100, 100]
            },
        },
        yaxis: {
            labels: {
                show: true,
                maxWidth: 20,
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', ],
        },
        colors: ["#ffb64d"],
        grid: {
            row: {
                opacity: 0.5
            }
        },
    },
    series: [{
        name: "Hour.",
        data: [0, 30, 10, 45, 30, 55, 30, 50]
    }]
}

export default chartData;
