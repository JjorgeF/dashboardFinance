const graf = document.getElementById('myChart')

const labels = {

  'Janeiro'
  'Fevereiro'
  'Março'
  'Abril'
  'Maio'
  'Junho'
  'Julho'
  'Agosto'
}


const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: data,
};

const myChart = new Chart(graf, config)