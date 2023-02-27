// Pra puxar o id do canvas do html
plots = document.getElementById("plots");
 
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]; //infos do eixo X 
var traffic = [65, 59, 80, 81, 56, 55, 60] //infos do eixo Y 
// Create an instance of Chart object:
new Chart(plots, {
 type: 'line', //Declarar o tipo de chart
 data: {
 labels: months, //Informações eixo X 
 datasets: [{
 data: traffic, //Informações eixo Y
 backgroundColor: 'green',
 borderColor: 'yellow',
 fill: true, //Preenchimento da área que a linha contorna 
 }]
 },
//Alterações
 options:{
 legend: {display: false}, //Tira a legenda de cima
}
});
