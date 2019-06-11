var ctx = document.getElementById('myChart').getContext('2d');

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data:{
    	datasets: [{
        data: [10, 10, 10],
        backgroundColor:[
        '#FF3E4D','#25CCF7','#75DA8B'
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'completed',
        'remaining',
        'progress'
    ]
} ,
    options: {
        responsive: true,
    maintainAspectRatio: false,
    
    }
});