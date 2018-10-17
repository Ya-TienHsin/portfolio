// <依照順序寫數值>
const data = [-1.25, 5, 3,7, -5, 3,-4, 5,];
// <顏色>
const colours = data.map((value) => value < 0 ? '#8CA86F' : '#D77373');
var shbarCanvas = document.getElementById("BarChart1").getContext('2d');
var shbarChart = new Chart(shbarCanvas, {
    type: 'horizontalBar',
    data: {
        labels: ['MSCI全球', '標準普爾500', '道瓊歐洲600','MSCI新興市場','MSCI新興歐洲','MSCI新興亞洲','MSCI東南亞','MSCI拉丁美洲'],
        datasets: [{
            backgroundColor:colours,
            data: data
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
// <依照順序寫數值>
const data2 = [-1.5, -5, 3,10, 5, -3,4, -1,];
const colours2 = data2.map((value) => value < 0 ? '#8CA86F' : '#D77373');
var shbarCanvas = document.getElementById("BarChart2").getContext('2d');
var shbarChart = new Chart(shbarCanvas, {
    type: 'horizontalBar',
    data: {
        labels: ['上證綜合指數', '香港國企', '印度孟買SENSEX30','美林美國政府債','美林全球投資級公司債','美林全球高收益債','美林全球新興美元債','美林全球新興本地債'],
        datasets: [{
            backgroundColor:colours2,
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
                    max: 12
                 },
            }]
        },
      maintainAspectRatio: false,
    }
});