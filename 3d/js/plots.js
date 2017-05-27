(function() {
    function chart1() {
        var ctx = document.getElementById("plot1").getContext('2d');
        new Chart(ctx, {
            type: 'scatter',
            data: {
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
    function chart2() {
        var ctx = document.getElementById("plot2").getContext('2d');
        new Chart(ctx, {
            type: 'scatter',
            data: {
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

    function chart3() {
        var ctx = document.getElementById("plot3").getContext('2d');
        new Chart(ctx, {
            type: 'scatter',
            data: {
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

    chart1();
    chart2();
    chart3();
})()
