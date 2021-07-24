const chartData = {
    type: 'bar',
    height: 220,
    options: {
        chart: {
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#fff"],
        plotOptions: {
            bar: {
                color: '#fff',
                columnWidth: '80%',
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0.25,
                gradientToColors: ["#fff", ],
                inverseColors: true,
                opacityFrom: 0.99,
                opacityTo: 0.65,
                stops: [0, 100]
            },
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
            labels: {
                show: true,
                style: {
                    colors: '#fff',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    color: '#fff',
                },
            },
        },
        grid: {
            borderColor: '#ffffff3b',
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
                    formatter: function(seriesName) {
                        return 'Click '
                    }
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
    }]
}
export default chartData;
