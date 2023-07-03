const $ = document
const wrapperElem = $.querySelector('.wrapper')
const selectBtn = $.querySelector('.select-btn')
const options = $.querySelector('.options')
const searchInputElem = $.querySelector('input')

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
    "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
    "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
    "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

const addCountries = () => {
    let li = null;

    countries.forEach( country => {
        li= `<li onclick='updateName(this)'>${country}</li>`
        options.insertAdjacentHTML('beforeend',li)
    })
}

const updateName = (element) => {

searchInputElem.value =''
 
 for(let option of options.children){
    option.innerText === element.textContent ? option.classList.add('selected') : option.classList.remove('selected')
 }

wrapperElem.classList.remove('active')
selectBtn.firstElementChild.innerText = element.textContent;
}

selectBtn.addEventListener('click' , () =>{ wrapperElem.classList.toggle('active')});
window.addEventListener('load' ,addCountries);