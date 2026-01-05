const list = document.querySelector('ul')

const buttonAll = document.querySelector('.all')
const buttonMap = document.querySelector('.map')
const buttonReduce = document.querySelector('.reduce')
const buttonFilter = document.querySelector('.filter')

function formatCurrency(value) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

let myLi = ''

function showAll(myArray) {
    let myLi = ''
    myArray.forEach((product) => {

        myLi += `
        
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        
        </li>`
    })
    list.innerHTML = myLi
}


function mapItem() {
    const myMap = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))

    showAll(myMap)
}

function reduceItem() {
    const myReduce = menuOptions.reduce((acc, product) => acc + product.price, 0)

    list.innerHTML =

        `
         <li>
            <p>O valor total dos itens é R$ ${formatCurrency(myReduce)}</p>
         </li>

             `

}


buttonAll.addEventListener('click', () => showAll(menuOptions))
buttonMap.addEventListener('click', mapItem)
buttonReduce.addEventListener('click', reduceItem)
buttonFilter.addEventListener('click', () => showAll(menuOptions.filter((product) => product.vegan)))

