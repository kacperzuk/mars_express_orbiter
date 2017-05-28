(function() {
    Chart.defaults.global.animation.duration = 0;
    var bw = 2;

    function chart1() {
        var dat = [];
        for(var i = 0; i < data.datapoints.length; i += 200) {
            var d = data.datapoints[i];
            dat.push({ x: d.t, y: d.sunmarsearthangle });
        }

        var ctx = document.getElementById("plot1").getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Sun-Mars-Earth Angle',
                    data: dat,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: [ 'rgba(255,99,132,1)', ],
                    borderWidth: 1
                }]
            },
            options: {
                annotation: {
                    annotations: [
                        {
                            type: 'line',
                            mode: 'vertical',
                            scaleID: 'x-axis-0',
                            value: data.datapoints[index].t,
                            borderWidth: bw,
                            borderColor: "green"
                        }
                    ]
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }],
                    xAxes: [{
                        type: 'time',
                        unit: 'month',
                        time: {
                            displayFormats: {
                                'month': 'MMM DD'
                            }
                        }
                    }]
                }
            }
        });
    }
    function chart2() {
        var dat = [];
        for(var i = 0; i < data.datapoints.length; i += 200) {
            var d = data.datapoints[i];
            dat.push({ x: d.t, y: d.solarconstantmars });
        }

        var ctx = document.getElementById("plot2").getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Solar Constant Mars',
                    data: dat,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: [ 'rgba(255,99,132,1)', ],
                    borderWidth: 1
                }]
            },
            options: {
                annotation: {
                    annotations: [
                        {
                            type: 'line',
                            mode: 'vertical',
                            scaleID: 'x-axis-0',
                            value: data.datapoints[index].t,
                            borderWidth: bw,
                            borderColor: "green"
                        }
                    ]
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }],
                    xAxes: [{
                        type: 'time',
                        unit: 'month',
                        time: {
                            displayFormats: {
                                'month': 'MMM DD'
                            }
                        }
                    }]
                }
            }
        });
    }

    function chart3() {
        var ctx = document.getElementById("plot3").getContext('2d');
        new Chart(ctx, {
            type: 'scatter',
            data: {
                animation: false,
                datasets: [{
                    label: 'Test',
                    data: [
                        {x:0,y:0},
                        {x:1,y:1},
                        {x:2,y:4},
                        {x:3,y:9},
                        {x:4,y:16}
                    ],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: [ 'rgba(255,99,132,1)', ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }

    function a() {
        chart1();
        chart2();
        chart3();
        setTimeout(a, 1000);
    }
    a();
})()
