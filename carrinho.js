// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";
  
// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;
  
// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});
  
// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});
  
search.addEventListener('input', updateValue);
  
// function for updating value
function updateValue(e) {
    searchValue = e.target.value;
}
  
// when user clicks, it calls function getresults 
convert.addEventListener("click", getResults);
  
// function getresults
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
  
// display results after convertion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = 
       ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}
  
// when user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};
// Selecione todos os campos de quantidade
const quantidades = document.querySelectorAll('.quantidade');
const totalElement = document.getElementById('total');

// Função para calcular o total
function calcularTotal() {
let total = 0;
const quantidades = document.querySelectorAll('.quantidade'); // Seleciona todos os elementos com a classe 'quantidade'

quantidades.forEach((quantidade, index) => {
const precos = [9530, 200, 300, 10000, 2000, 1999,500 ,1000]; // Preços dos produtos, adicione os preços dos novos produtos aqui
const preco = index < precos.length ? precos[index] : 200; // Use o preço do produto ou o valor padrão (200)

total += parseInt(quantidade.value) * preco;
});

const totalElement = document.getElementById('total'); // Elemento onde você exibirá o total
totalElement.textContent = total.toFixed(2);
}


// Adicione um ouvinte de eventos para cada campo de quantidade
quantidades.forEach(quantidade => {
    quantidade.addEventListener('input', calcularTotal);
});

// Calcule o total inicial
calcularTotal();



document.addEventListener("DOMContentLoaded", function() {
    const freteForm = document.getElementById("freteForm");
    const freteMessage = document.getElementById("freteMessage");

    freteForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const cepDestino = document.getElementById("cepDestino").value;

        calcularFrete(cepDestino)
            .then(frete => {
                freteMessage.classList.remove("error");
                freteMessage.textContent = `O valor do frete para o CEP ${cepDestino} é R$ ${frete.toFixed(2)}`;
            })
            .catch(error => {
                freteMessage.classList.add("error");
                freteMessage.textContent = `Erro ao calcular o frete: ${error.message}`;
            });
    });

    function calcularFrete(cepDestino) {
        return new Promise((resolve, reject) => {
            // Simulação de cálculo de frete (substitua pela lógica real)
            setTimeout(() => {
                const valorFrete = Math.random() * 50; // Valor de frete aleatório entre 0 e 50
                resolve(valorFrete);
            }, 1000); // Simula um atraso de 1 segundo na resposta
        });
    }
});
