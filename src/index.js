// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card
// querySelector and querySelectorAll both use CSS SELECTORS
// NodeList is an array like object
// uses bracket notation to access alements, can use .length
// can also use .forEach() (CANNOT USE .MAP OR .REDUCE ETC.)

// A- finding across the entire DOM
const header = document.querySelector('header');
//console.log('header', header)
const logoTitle = document.querySelector('#logoTitle')
// console.log('logoTitle', logoTitle)
// const logoTitle = document.querySelector('.header')

const firstCard = document.querySelector('.card')
// console.log('card', firstCard)
const dog = document.querySelector('.dog')
console.log('dog', dog)
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img')
console.log('img', imageFirstCard)
const titleFirstCard = firstCard.querySelector('.card-title')
const subtitleFirstCard = firstCard.querySelector('.card-subtitle')
const textFirstCard = firstCard.querySelector('.card-text')
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
console.log('linkFirstCard', link1FirstCard)
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
// B- Loop over the links and console.log their text content
// C- Turn the collection of links into a real array
// D- Use .filter to find the anchor tag with the textContent of "Home"
const allAnchors = document.querySelectorAll('.menu-item')
// console.log('allAnchors', allAnchors)

function printElem(elem) {
    console.log(elem.textContent)
}
allAnchors.forEach(printElem);

// function findHome(elem) {
//     if (elem.textContent === 'Home') {
//         return elem
//     }
// }

// const anchorsRealArray = Array.from(allAnchors)
// anchorsRealArray.filter(findHome)

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
imageFirstCard.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1108099%2Fpexels-photo-1108099.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fdog%2F&tbnid=gM3Cz7MsHS_tAM&vet=12ahUKEwicwv-uiZjuAhWHgZ4KHRi0CnMQMygAegUIARCkAg..i&docid=NzcFCDirz3vE7M&w=500&h=375&q=dog%20photos&ved=2ahUKEwicwv-uiZjuAhWHgZ4KHRi0CnMQMygAegUIARCkAg"

//  B- Have the students research online the difference between textContent and innerText
titleFirstCard.textContent = 'Dogs Are Great'

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
