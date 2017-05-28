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
                    pointRadius: 0,
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
                    pointRadius: 0,
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
                            beginAtZero:false
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
        var canvas = document.getElementById("powerlines");
        canvas.width = canvas.parentNode.clientWidth;
        canvas.height = canvas.parentNode.clientHeight;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        //var y = canvas.width*(0.05);
        //var y = canvas.width*(0.96);
        var y = canvas.width*(0.08 + (0.96-0.09)*(timestamp - data.min_ts)/(data.max_ts - data.min_ts));
        ctx.moveTo(y,0);
        ctx.lineTo(y,canvas.height);
        ctx.stroke();
    }

    function a() {
        chart1();
        chart2();
        chart3();
        setTimeout(a, 1000);
    }
    a();
})()
