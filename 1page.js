// chartStatus = seoul_all
// chartStatus2 = busan_all

// config1 = 서울 유저 바테이블

// seoul
// 월별 카드 보유자 수
const seoul_user = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
  datasets: [{
    label: '백만',
    data: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    backgroundColor: [
      'rgb(0, 0, 0)'
    ],
    borderColor: ['rgba(255, 255, 255, 1)'],
    borderWidth: 1,
    borderRadius: {
      topLeft: 5,
      topRight: 5,
    },
    borderSkipped: false,
  },
  {
    label: '천',
    data: [87, 84, 83, 91, 89, 87, 88, 90, 88],
    backgroundColor: ['rgba(255, 99, 132, 1)'],
    borderColor: ['rgba(255, 255, 255, 1)'],
    borderWidth: 1,
    borderRadius: {
      topLeft: 5,
      topRight: 5,
      bottomLeft: 5,
      bottomRight: 5
    },
    borderSkipped: false,
  },
  ]
}
const seoul_user_option = {
  type: 'bar',
  data: seoul_user,
  options: {
    scales: {
      xAxes: {
        ticks: {
          beginAtZero: true,
          color: 'rgba(0, 0, 0, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
        stacked: true
      },
      xAxes2: {
        grid: {
          drawOnChartArea: false
        },
        labels: ['8,087,499명', '8,084,383명', '8,083,875명', '8,091,903명', '8,089,123명', '8,087,824명', '8,088,680명', '8,090,127명', '8,088,928명']
      },
      yAxes: {
        stacked: true,
        ticks: {
          beginAtZero: true,
          color: 'rgba(255, 255, 255, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 20,
        top: 100,
        bottom: 0,
      },
    },
    plugins: {
      title: {},
      legend: {
        display: false,
        position: 'right'
      },
    }
  },
}
// 평균 카드 한도
const seoul_lmt = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
  datasets: [{
    label: '원',
    data: [12924, 13016, 13110, 13155, 13267, 13334, 13400, 13506, 13517],
    backgroundColor: [
      'rgba(255, 255, 255, 255)'
    ],
    borderColor: ['rgba(255, 99, 132, 1)'],
    borderWidth: 3,
  },
  ]
}
const seoul_lmt_option = {
  type: 'line',
  data: seoul_lmt,
  options: {
    scales: {
      xAxes: {
        ticks: {
          color: 'rgba(0, 0, 0, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
      },
      xAxes2: {
        grid: {
          drawOnChartArea: false
        },
        labels: ['12,924', '13,016', '13,110', '13,155', '13,267', '13,334', '13,400', '13,506', '13,517']
      },
      yAxes: {
        stacked: true,
        ticks: {
          beginAtZero: true,
          color: 'rgba(255, 255, 255, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'right'
      },
    }
  },
}
// 카드 이용 금액
const seoul_use = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
  datasets: [{
    label: '백만 명',
    data: [14740, 13288, 14987, 15243, 16597, 15954, 16467, 16566, 16300],
    backgroundColor: [
      'rgba(255, 255, 255, 255)'
    ],
    borderColor: ['rgba(255, 99, 132, 1)'],
    borderWidth: 3,
  },
  ]
}
const seoul_use_option = {
  type: 'line',
  data: seoul_use,
  options: {
    scales: {
      xAxes: {
        ticks: {
          color: 'rgba(0, 0, 0, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
      },
      xAxes2: {
        grid: {
          drawOnChartArea: false
        },
        labels: ['14,740,195,681원', '13,288,287,539원', '14,987,695,599원', '15,243,540,083원', '16,597,983,041원', '15,954,233,859원', '16,467,224,319원', '16,566,478,161원', '16,300,112,025원']
      },
      yAxes: {
        ticks: {
          beginAtZero: true,
          color: 'rgba(255, 255, 255, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'right'
      },
    }
  },
}
// 신용 판매 이용 금액
const seoul_sle = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
  datasets: [{
    label: '백만 명',
    data: [13825, 12454, 14041, 14370, 15666, 15048, 15580, 15636, 15369],
    backgroundColor: [
      'rgba(255, 255, 255, 255)'
    ],
    borderColor: ['rgba(255, 99, 132, 1)'],
    borderWidth: 3,
  },
  ]
}
const seoul_sle_option = {
  type: 'line',
  data: seoul_sle,
  options: {
    scales: {
      xAxes: {
        ticks: {
          color: 'rgba(0, 0, 0, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
        stacked: true
      },
      xAxes2: {
        grid: {
          drawOnChartArea: false
        },
        labels: ['13,825,584,685원', '12,454,291,521원', '14,041,839,907원', '14,370,762,959원', '15,666,942,155원', '15,048,524,079원', '15,580,652,703원', '15,636,341,345원', '15,369,678,037원']
      },
      yAxes: {
        stacked: true,

        ticks: {
          beginAtZero: true,
          color: 'rgba(255, 255, 255, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'right'
      },
    }
  },
}
// 일시불 이용 금액
const seoul_lsp = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
  datasets: [{
    label: '백만 명',
    data: [11428, 10427, 11730, 12064, 13225, 12674, 12952, 13187, 12733],
    backgroundColor: [
      'rgba(255, 255, 255, 255)'
    ],
    borderColor: ['rgba(255, 99, 132, 1)'],
    borderWidth: 3,
  },
  ]
}
const seoul_lsp_option = {
  type: 'line',
  data: seoul_lsp,
  options: {
    scales: {
      xAxes: {
        ticks: {
          color: 'rgba(0, 0, 0, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
        stacked: true
      },
      xAxes2: {
        grid: {
          drawOnChartArea: false
        },
        labels: [
                '11,428,413,147원',
                '10,427,720,299원',
                '11,730,027,823원',
                '12,064,503,281원',
                '13,225,926,879원',
                '12,674,647,457원',
                '12,952,357,397원',
                '13,187,356,557원',
                '12,733,040,087원']
      },
      yAxes: {
        stacked: true,
        ticks: {
          beginAtZero: true,
          color: 'rgba(255, 255, 255, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'right'
      },
    }
  },
}
// 할부 이용 금액
const seoul_instl = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
  datasets: [{
    label: '백만 명',
    data: [23971, 20265, 23118, 23062, 24410, 23738, 26282, 24489, 26366],
    backgroundColor: [
      'rgba(255, 255, 255, 1)'
    ],
    borderColor: ['rgba(255, 99, 132, 1)'],
    borderWidth: 3,
  },
  ]
}
const seoul_instl_option = {
  type: 'line',
  data: seoul_instl,
  options: {
    scales: {
      xAxes: {
        ticks: {
          color: 'rgba(0, 0, 0, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
        stacked: true
      },
      xAxes2: {
        grid: {
          drawOnChartArea: false
        },
        labels: [
          '2,397,171,538원',
          '2,026,571,222원',
          '2,311,812,084원',
          '2,306,259,678원',
          '2,441,015,276원',
          '2,373,876,622원',
          '2,628,295,306원',
          '2,448,984,788원',
          '2,636,637,950원']
      },
      yAxes: {
        stacked: true,
        ticks: {
          beginAtZero: true,
          color: 'rgba(255, 255, 255, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'right'
      },
    }
  },
}
// 현금 서비스 이용 금액
const seoul_cash = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
  datasets: [{
    label: '백만 명',
    data: [914, 833, 945, 872, 931, 905, 886, 930, 930],
    backgroundColor: [
      'rgba(255, 255, 255, 255)'
    ],
    borderColor: ['rgba(255, 99, 132, 1)'],
    borderWidth: 3,
  },
  ]
}
const seoul_cash_option = {
  type: 'line',
  data: seoul_cash,
  options: {
    scales: {
      xAxes: {
        ticks: {
          color: 'rgba(0, 0, 0, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
        stacked: true
      },
      xAxes2: {
        grid: {
          drawOnChartArea: false
        },
        labels: [
          '914,610,996원',
          '833,996,018원',
          '945,855,692원',
          '872,777,124원',
          '931,040,886원',
          '905,709,780원',
          '886,571,616원',
          '930,136,816원',
          '930,433,988원']
      },
      yAxes: {
        stacked: true,
        ticks: {
          beginAtZero: true,
          color: 'rgba(255, 255, 255, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'right'
      },
    }
  },
}
// 해외 소비 금액
const seoul_global = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
  datasets: [{
    label: '백만 명',
    data: [231, 242, 274, 288, 337, 342, 340, 396, 359],
    backgroundColor: [
      'rgba(255, 255, 255, 255)'
    ],
    borderColor: ['rgba(255, 99, 132, 1)'],
    borderWidth: 3,
  },
  ]
}

const seoul_global_option = {
  type: 'line',
  data: seoul_global,
  options: {
    scales: {
      xAxes: {
        ticks: {
          color: 'rgba(0, 0, 0, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
        stacked: true
      },
      xAxes2: {
        grid: {
          drawOnChartArea: false
        },
        labels: [
          '231,127,221원',
          '242,915,297원',
          '274,732,704원',
          '288,580,484원',
          '337,359,082원',
          '342,728,303원',
          '340,638,178원',
          '396,066,704원',
          '359,566,647원']
      },
      yAxes: {
        stacked: true,
        ticks: {
          beginAtZero: true,
          color: 'rgba(255, 255, 255, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {      
      legend: {
        display: false,
        position: 'right'
      },
    }
  },
}

//////////////////////////////////////
// 부산 //
const busan_user = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
  datasets: [{
    label: '백만 명',
    data: [2, 3, 1, 8, 4, 6, 5, 2, 8],
    backgroundColor: [
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 3,
    boderSkipped: false,
  },
  {
    label: '백 명',
    data: [45, 49, 55, 40, 43, 48, 10, 15, 17],
    backgroundColor: ['rgba(25, 99, 132, 1)'],
    bprderColor: 'transparent',
    borderWidth: 3,
    boderSkipped: false,
  },
  ]
}

const busan_user_option = {
  type: 'bar',
  data: busan_user,
  options: {
    scales: {
      xAxes: {
        ticks: {
          color: 'rgba(255, 255, 255, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
        stacked: true
      },
      xAxes2: {
        grid: {
          drawOnChartArea: false
        },
        labels: [8087499, 8084383, 8083875, 8091903, 8089123, 8087824, 8088680, 8090127, 8088928]
      },
      yAxes: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: 'rgba(255, 255, 255, 2)',
        },
        grid: {
          drawOnChartArea: false
        },
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      title: {
        color: 'rgba(255, 255, 255, 2)',
        display: true,
        text: '서울의 월별 카드 보유자 수',
      },
      legend: {
        display: true,
        position: 'right'
      },
    }
  },
}

// const busan_avg = {
//   labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
//     datasets: [{
//       label: '백만 명',
//       data: [2, 3, 1, 8, 4, 6, 5, 2, 8],
//       backgroundColor: [
//         'rgba(255, 206, 86, 1)'
//       ],
//       borderWidth: 3,
//       boderSkipped: false,
//     },
//     {
//       label: '백 명',
//       data: [123, 2, 5, 40, 43, 48, 10, 15, 17],
//       backgroundColor: ['rgba(25, 99, 132, 1)'],
//       bprderColor: 'transparent',
//       borderWidth: 3,
//       boderSkipped: false,
//     },
//     ]
// }

// const busan_avg_option= {
//   type: 'bar',
//   data: busan_avg,
//   options: {
//     scales: {
//       xAxes: {
//         ticks: {
//           color: 'rgba(255, 255, 255, 2)',
//         },
//         grid: {
//           drawOnChartArea: false
//         },
//         stacked: true
//       },
//       xAxes2: {
//         grid: {
//           drawOnChartArea: false
//         },
//         labels: [8087499, 8084383, 8083875, 8091903, 8089123, 8087824, 8088680, 8090127, 8088928]
//       },
//       yAxes: {
//         stacked: true,
//         beginAtZero: true,
//         ticks: {
//           color: 'rgba(255, 255, 255, 2)',
//         },
//         grid: {
//           drawOnChartArea: false
//         },
//       }
//     },
//     layout: {
//       padding: {
//         left: 50,
//         right: 0,
//         top: 0,
//         bottom: 0,
//       },
//     },
//     plugins: {
//       title: {
//         color: 'rgba(255, 255, 255, 2)',
//         display: true,
//         text: '서울의 월별 카드 보유자 수',
//       },
//       legend: {
//         display: true,
//         position: 'right'
//       },
//     }
//   },
// }




let myChart_user = new Chart(
  document.getElementById('myChart_user'),
  seoul_user_option
);

let myChart_lmt = new Chart(
  document.getElementById('myChart_lmt'),
  seoul_lmt_option
);

let myChart_use = new Chart(
  document.getElementById('myChart_use'),
  seoul_use_option
);
let myChart_sle = new Chart(
  document.getElementById('myChart_sle'),
  seoul_sle_option
);
let myChart_lsp = new Chart(
  document.getElementById('myChart_lsp'),
  seoul_lsp_option
);
let myChart_instl = new Chart(
  document.getElementById('myChart_instl'),
  seoul_instl_option
);
let myChart_cash = new Chart(
  document.getElementById('myChart_cash'),
  seoul_cash_option
);
let myChart_global = new Chart(
  document.getElementById('myChart_global'),
  seoul_global_option
);

// user
function renderChart(type) {
  console.log(type.value);
  myChart_user.destroy();
  if (type.value === 'seoul') {
    myChart_user = new Chart(
      document.getElementById('myChart_user'),
      seoul_user_option
    );
  }
  if (type.value === 'busan') {
    myChart_user = new Chart(
      document.getElementById('myChart_user'),
      busan_user_option
    );
  }
}
// avg
function renderChart(type) {
  console.log(type.value);
  myChart_avg.destroy();
  if (type.value === 'seoul') {
    myChart_avg = new Chart(
      document.getElementById('myChart_avg'),
      seoul_avg_option
    );
  }
  if (type.value === 'busan') {
    myChart_avg = new Chart(
      document.getElementById('myChart_avg'),
      busan_user_option
    );
  }
}
// lmt
// function renderChart(type){
//   console.log(type.value);
//   myChart_user.destroy();
//   if(type.value === 'seoul'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config1
//     );
//   }
//   if(type.value === 'busan'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config2
//   );
// }
// }
// // use
// function renderChart(type){
//   console.log(type.value);
//   myChart_user.destroy();
//   if(type.value === 'seoul'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config1
//     );
//   }
//   if(type.value === 'busan'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config2
//   );
// }
// }
// // sle
// function renderChart(type){
//   console.log(type.value);
//   myChart_user.destroy();
//   if(type.value === 'seoul'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config1
//     );
//   }
//   if(type.value === 'busan'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config2
//   );
// }
// }
// //lsp
// function renderChart(type){
//   console.log(type.value);
//   myChart_user.destroy();
//   if(type.value === 'seoul'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config1
//     );
//   }
//   if(type.value === 'busan'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config2
//   );
// }
// }
// //instl
// function renderChart(type){
//   console.log(type.value);
//   myChart_user.destroy();
//   if(type.value === 'seoul'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config1
//     );
//   }
//   if(type.value === 'busan'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config2
//   );
// }
// }
// //cash
// function renderChart(type){
//   console.log(type.value);
//   myChart_user.destroy();
//   if(type.value === 'seoul'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config1
//     );
//   }
//   if(type.value === 'busan'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config2
//   );
// }
// }
// //global
// function renderChart(type){
//   console.log(type.value);
//   myChart_user.destroy();
//   if(type.value === 'seoul'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config1
//     );
//   }
//   if(type.value === 'busan'){
//     myChart_user = new Chart(
//       document.getElementById('myChart_user'),
//       config2
//   );
// }
// }
