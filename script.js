//Кнопки шапки
const bank = document.querySelector('.bank'); 
const busines = document.querySelector('.busines');
const investments = document.querySelector('.investments');
const insurance = document.querySelector('.insurance');
const mobile = document.querySelector('.mobile');
const travels = document.querySelector('.travels');
const entertainment = document.querySelector('.entertainment');

//Кнопки валют левого меню
const RUBhave = document.querySelector('.RUBIHave');
const USDhave = document.querySelector('.USDIHave');
const EURhave = document.querySelector('.EURIHave');
const GBRhave = document.querySelector('.GBRIHave');
const selectHave = document.querySelector('.currencySelectionIHave');

//Кнопки валют правого меню
const RUBwant = document.querySelector('.RUBIWant');
const USDwant = document.querySelector('.USDIWant');
const EURwant = document.querySelector('.EURIWant');
const GBRwant = document.querySelector('.GBRIWant');
const selectWant = document.querySelector('.currencySelectionIWant');

//Содержимое кнопки выбора
const option = document.querySelectorAll('option');

//Кнопки стрелок (№1 - вправо, №2 - влево)
const rightArrow = document.querySelector('.rightArrow');
const leftArrow = document.querySelector('.leftArrow');

//Инпуты (№1 - левый, №2 - правый)
const entryFieldIHave = document.querySelector('.entryFieldIHave');
const entryFieldIWant = document.querySelector('.entryFieldIWant');

//Функция сброса цвета в изначальный у всех кнопок шапки
function colorHeadDel() {
    bank.style.color = '#959BA4';
    busines.style.color = '#959BA4';
    investments.style.color = '#959BA4';
    insurance.style.color = '#959BA4';
    mobile.style.color = '#959BA4';
    travels.style.color = '#959BA4';
    entertainment.style.color = '#959BA4';
}

//Массив из кнопок для обработки нажатия на каждую конкретную и смены цвета в чёрный 
//(массив для того, чтобы перебрать все кнопки испоьзуя forEach)
[bank, busines, investments, insurance, mobile, travels, entertainment].forEach((element) => {
    element.addEventListener('click', () => {
        colorHeadDel();
        element.style.color = 'black';
    })
});

//Функция сброса цвета в изначальный у всех кнопок валют левого меню
function colorMainDelHave() {
    RUBhave.style.color = '#C6C6C6';
    USDhave.style.color = '#C6C6C6';
    EURhave.style.color = '#C6C6C6';
    GBRhave.style.color = '#C6C6C6';
    selectHave.style.color = '#C6C6C6';
    RUBhave.style.backgroundColor = '#FFFFFF';
    USDhave.style.backgroundColor = '#FFFFFF';
    EURhave.style.backgroundColor = '#FFFFFF';
    GBRhave.style.backgroundColor = '#FFFFFF';
    selectHave.style.backgroundColor = '#FFFFFF';
}

//Функция сброса цвета в изначальный у всех кнопок валют правого меню
function colorMainDelWant() {
    RUBwant.style.color = '#C6C6C6';
    USDwant.style.color = '#C6C6C6';
    EURwant.style.color = '#C6C6C6';
    GBRwant.style.color = '#C6C6C6';
    selectWant.style.color = '#C6C6C6';
    RUBwant.style.backgroundColor = '#FFFFFF';
    USDwant.style.backgroundColor = '#FFFFFF';
    EURwant.style.backgroundColor = '#FFFFFF';
    GBRwant.style.backgroundColor = '#FFFFFF';
    selectWant.style.backgroundColor = '#FFFFFF';
}

//Массив из кнопок левого меню для обработки нажатия на каждую конкретную и смены цвета в белый с 
//фиолетовым фоном (массив для того, чтобы перебрать все кнопки испоьзуя forEach)
[RUBhave, USDhave, EURhave, GBRhave, selectHave].forEach((element) => {
    element.addEventListener('click', () => {
        colorMainDelHave();
        element.style.color = 'white';
        element.style.backgroundColor = '#833AE0';
        option.forEach((element) => {
            element.style.color = '#C6C6C6';
            element.style.backgroundColor = '#FFFFFF';
        })
    })
});

//Массив из кнопок правого меню для обработки нажатия на каждую конкретную и смены цвета в белый с 
//фиолетовым фоном (массив для того, чтобы перебрать все кнопки испоьзуя forEach)
[RUBwant, USDwant, EURwant, GBRwant, selectWant].forEach((element) => {
    element.addEventListener('click', () => {
        colorMainDelWant();
        element.style.color = 'white';
        element.style.backgroundColor = '#833AE0';
        option.forEach((element) => {
            element.style.color = '#C6C6C6';
            element.style.backgroundColor = '#FFFFFF';
        })
    })
});

