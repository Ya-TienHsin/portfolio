
// <依照順序寫數值>
const data2 = [-1.25, 5, 3,7, -5, 3,-4, 5,];
// <顏色>
const colours = data2.map((value) => value < 0 ? '#8CA86F' : '#D77373');
var shbarCanvas = document.getElementById("BarChart2").getContext('2d');
var shbarChart = new Chart(shbarCanvas, {
    type: 'horizontalBar',
    data: {
        labels: ['MSCI全球', '標準普爾500', '道瓊歐洲600','MSCI新興市場','MSCI新興歐洲','MSCI新興亞洲','MSCI東南亞','MSCI拉丁美洲'],
        datasets: [{
            backgroundColor:colours,
            data: data2
        },]
    },
    options: {
      plugins: {
        datalabels: {
          align: function(context) {
                            var value = context.dataset.data[context.dataIndex];
                            return value > 0 ? 'end' : 'start';
                        },
                        anchor: function(context) {
                            var value = context.dataset.data[context.dataIndex];
                            return value > 0 ? 'end' : 'start';
                        }
        }
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {

            yAxes: [{
                stacked: true,
                gridLines: {
                  display: true,
                  drawBorder: false
                },
                ticks: {
                  fontSize: 14,
                }
            }],
            xAxes: [{
                stacked: true,
                gridLines: {
                  display: true
                },
                ticks: {
                    min: -6,
                    max: 12,
                 },
            }]
        },
      maintainAspectRatio: false,

    }
});
