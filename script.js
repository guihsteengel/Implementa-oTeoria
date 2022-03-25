const prices = [50, 60, 70]
const newPrices = []
for (i = 0; i < prices.length; i++) { 
  let newPrice = prices[i] * 1.1
  newPrices.push(newPrice)
}
// newPrices [55, 66, 77]

const prices = [50, 60, 70]
// Adiciona 10% ao preço
const newPrices = prices.map((price) => price * 1.1)
// newPrices [55, 66, 77]

// Regular javascript function
function add10Percent(value){
  return value * 1.1
}
// OR
// Arrow function
const add10Percent = (value) => value * 1.1
add10Percent(10)
// Returns 10.1
[50, 60, 70].map((value) => {price: value} )
// Returns: 
// [ { price: 50 }, { price: 60 }, { price: 70 } ]

//# Filtrar os preços maiores que 70
const prices = [ 78, 51, 36, 94, 56, 25, 90, 89, 62, 57 ]
prices.filter((value)=> value > 70)]
// [ 78, 94, 90, 89 ]

// Somar todos os itens da lista
[0, 1, 2, 3, 4].reduce( (accum, curr) => accum + curr )
// Returns: 10
