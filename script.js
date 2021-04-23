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

//Нижние обозначения курса (<p>)
let pHave = document.querySelector('.currentRateIHave');
let pWant = document.querySelector('.currentRateIWant');

//Кнопка swith (стрелки смены конвертации)
let arrow = document.querySelector('.arrow');
let arrow1 = document.querySelector('.arrow');

//Элемент loading
const loading = document.querySelector('.loading');

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

// Массив из кнопок (без селекта) левого меню для обработки нажатия на каждую конкретную и смены цвета в белый с 
// фиолетовым фоном (массив для того, чтобы перебрать все кнопки испоьзуя forEach)
let arrayLeft = [RUBhave, USDhave, EURhave, GBRhave];

// Массив из кнопок (без селекта) правого меню для обработки нажатия на каждую конкретную и смены цвета в белый с 
// фиолетовым фоном (массив для того, чтобы перебрать все кнопки испоьзуя forEach)
let arrayRight = [RUBwant, USDwant, EURwant, GBRwant];

//Две переменные со значениями для начального запроса к серверу и вывода результата на экран
//в процессе выполнения программы их значения будут меняться в зависимости от нажатия по кнопкамы
let from = 'RUB';
let to = 'USD';

//Переменная с помощью которой будет происходить смена from и to при нажатии на стрелки смены направления конвертации
let change = '';
let changeSelect = '';

//Переменная для проверки направления смены конвертации
let checkSwitch = 1;
let checkSwitchSelect = 1;

//Перебор кнопок левого меню для получения нового значения from
arrayLeft.forEach((element) => {
    element.addEventListener('click', () => {
        colorMainDelHave();
        element.style.color = 'white';
        element.style.backgroundColor = '#833AE0';
        option.forEach((element) => {
            element.style.color = '#C6C6C6';
            element.style.backgroundColor = '#FFFFFF';
        })
        from = element.innerText;
    })
});

//Перебор кнопок левого меню для получения нового значения to
arrayRight.forEach((element) => {
    element.addEventListener('click', () => {
        colorMainDelWant();
        element.style.color = 'white';
        element.style.backgroundColor = '#833AE0';
        option.forEach((element) => {
            element.style.color = '#C6C6C6';
            element.style.backgroundColor = '#FFFFFF';
        })
        to = element.innerText;
    })
});

//Переменные для проверки нажатия левого и правого селекта
let checkLeft = 0
let checkRight = 0

//Обработка нажатия на левый селект для изменения цвета
selectHave.addEventListener('click', () => {
    colorMainDelHave();
    selectHave.style.color = 'white';
    selectHave.style.backgroundColor = '#833AE0';
    option.forEach((element) => {
        element.style.color = '#C6C6C6';
        element.style.backgroundColor = '#FFFFFF';
    })
    checkLeft = 1;
})
    
//Обработка нажатия на правый селект для изменения цвета
selectWant.addEventListener('click', () => {
    colorMainDelWant();
    selectWant.style.color = 'white';
    selectWant.style.backgroundColor = '#833AE0';
    option.forEach((element) => {
        element.style.color = '#C6C6C6';
        element.style.backgroundColor = '#FFFFFF';
    })
    checkRight = 1;
})


//Функция смены направления конвертации, когда нажат правый селект и левая кнопка
function switchLeft() {
    colorMainDelWant();
    colorMainDelHave();
    arrayRight.forEach((element) => {
        if (element.innerText === to) {
            element.style.color = 'white';
            element.style.backgroundColor = '#833AE0';
            option.forEach((element) => {
                element.style.color = '#C6C6C6';
                element.style.backgroundColor = '#FFFFFF';
            })
        }
    });
    selectHave.value = from;
    selectHave.style.color = 'white';
    selectHave.style.backgroundColor = '#833AE0';
    selectWant.value = from;
    selectWant.style.color = '#C6C6C6';
    selectWant.style.backgroundColor = '#FFFFFF';
    option.forEach((element) => {
        element.style.color = '#C6C6C6';
        element.style.backgroundColor = '#FFFFFF';
    });
}

//Функция смены направления конвертации, когда нажат левый селект и правая кнопка
function switchRight() {
    colorMainDelWant();
    colorMainDelHave();
    arrayLeft.forEach((element) => {
        if (element.innerText === from) {
            element.style.color = 'white';
            element.style.backgroundColor = '#833AE0';
            option.forEach((element) => {
                element.style.color = '#C6C6C6';
                element.style.backgroundColor = '#FFFFFF';
            })
        }
    });
    selectWant.value = to;
    selectWant.style.color = 'white';
    selectWant.style.backgroundColor = '#833AE0';
    selectHave.value = to;
    selectHave.style.color = '#C6C6C6';
    selectHave.style.backgroundColor = '#FFFFFF';
    option.forEach((element) => {
        element.style.color = '#C6C6C6';
        element.style.backgroundColor = '#FFFFFF';
    });
}

//Функция смены значений кнопок валют, если выбран селект и кнопка
function switchChangeSelectWithButton () {
    if (checkLeft === 1 && checkRight === 0 && checkSwitchSelect === 1) {
        switchRight()
        checkLeft = 0;
        checkRight = 1;
        checkSwitchSelect = 0;
        fetchRequest();
    } else if (checkLeft === 0 && checkRight === 1 && checkSwitchSelect === 0) {
        switchLeft()
        checkLeft = 1;
        checkRight = 0;
        checkSwitchSelect = 1;
    } else if (checkLeft === 0 && checkRight === 1 && checkSwitchSelect === 1) {
        switchLeft()
        checkLeft = 1;
        checkRight = 0;
        checkSwitchSelect = 0;
    } else if (checkLeft === 1 && checkRight === 0 && checkSwitchSelect === 0) {
        switchRight()
        checkLeft = 0;
        checkRight = 1;
        checkSwitchSelect = 1;
    } else if (checkLeft === 1 && checkRight === 1) {
        //Очистка цветов
        colorMainDelHave();
        colorMainDelWant();
        countSelect();
    } 
}

//Функция отправки запроса на сервер, произведения конвертации и вывода результата
function fetchRequest() {
    // Для всех валют по запросу 1 к 1 всё выводится нормально, кроме EUR
    // Данный if обрабатывает это исключение
    // Если входные валюты не равны, то срабатывает обычный fetch, описанный в else
    if (from === to) {
        pHave.innerHTML = `1 ${from} = 1.0000 ${from}`;
        pWant.innerHTML = `1 ${to} = 1.0000 ${to}`;
        entryFieldIWant.value = (entryFieldIHave.value * 1.0000).toFixed(4);
    } else {
        const id = setTimeout (() => {
            clearTimeout(id);
            loading.style.display = "flex";
        }, 500)
        fetch(`https://api.ratesapi.io/api/latest?base=${from}&symbols=${to}`)
            .then(res => res.json())
            .then(dat => {
                entryFieldIWant.value = ((entryFieldIHave.value).replace(',','.') * dat.rates[to]).toFixed(4);
                pHave.innerHTML = `1 ${from} = ${dat.rates[to].toFixed(4)} ${to}`;
            })
            .catch((err) => {
                alert(err)
            });
        fetch(`https://api.ratesapi.io/api/latest?base=${to}&symbols=${from}`)
            .then(res => res.json())
            .then(dat => {
                pWant.innerHTML = `1 ${to} = ${dat.rates[from].toFixed(4)} ${from}`;
            })
            .then(() => {
                clearTimeout(id);
                loading.style.display = "none";
            })
            .catch((err) => {
                alert(err)
            });
        return entryFieldIWant.value;
    }
}

//Функция отправки запроса на сервер, произведения конвертации и вывода результата при изменении правых значений
function fetchRequestRight() {
    if (from === to) {
        pHave.innerHTML = `1 ${from} = 1.0000 ${from}`;
        pWant.innerHTML = `1 ${to} = 1.0000 ${to}`;
        entryFieldIHave.value = (entryFieldIWant.value * 1.0000).toFixed(4);
    } else {
        const id = setTimeout (() => {
            clearTimeout(id);
            loading.style.display = "flex";
        }, 500)
        fetch(`https://api.ratesapi.io/api/latest?base=${from}&symbols=${to}`)
            .then(res => res.json())
            .then(dat => {
                pHave.innerHTML = `1 ${from} = ${dat.rates[to].toFixed(4)} ${to}`;
            })
            .catch((err) => {
                alert(err)
            });
        fetch(`https://api.ratesapi.io/api/latest?base=${to}&symbols=${from}`)
            .then(res => res.json())
            .then(dat => {
                entryFieldIHave.value = ((entryFieldIWant.value).replace(',','.') * dat.rates[from]).toFixed(4);
                pWant.innerHTML = `1 ${to} = ${dat.rates[from].toFixed(4)} ${from}`;
            })
            .then(() => {
                clearTimeout(id);
                loading.style.display = "none";
            })
            .catch((err) => {
                alert(err)
            });
        return entryFieldIHave.value;
    }
}

//Функция смены цвета у кнопок из левого и правого меню при нажатии на стрелки
function changeColorButtonByArrow() {
    //Очистка цветов в левом и правом поле
    colorMainDelHave();
    colorMainDelWant();

    //Переприсвоение цвета в левом и правом меню
    arrayLeft.forEach((element) => {
        if (element.innerText === from) {
            element.style.color = 'white';
            element.style.backgroundColor = '#833AE0';
            option.forEach((element) => {
                element.style.color = '#C6C6C6';
                element.style.backgroundColor = '#FFFFFF';
            })
        }
    })
    arrayRight.forEach((element) => {
        if (element.innerText === to) {
            element.style.color = 'white';
            element.style.backgroundColor = '#833AE0';
            option.forEach((element) => {
                element.style.color = '#C6C6C6';
                element.style.backgroundColor = '#FFFFFF';
            })
        }  
    }) 
}

//Анонимная функция обработчик для смены направления ковертации и переотрисовки экарна для кнопок
let switchButton = () => {
    if (checkSwitch === 1) {
        change = from;
        from = to;
        to = change;
        checkSwitch = 0;
        fetchRequest();
        changeColorButtonByArrow() 
    } else if (checkSwitch === 0) {
        change = from;
        from = to;
        to = change;
        checkSwitch = 1;
        fetchRequest();
        changeColorButtonByArrow() 
    }
};

//Функция делающая конвертацию по значениям из кнопкок
function countButton() {
    
    //Смена значений и цвета кнопок 
    arrow.addEventListener('click', switchButton);
    fetchRequest();
}

//Функция перерисовки селектов
function changeColorSelectByArrow() {

    //Переприсваивание селектов
    selectHave.value = from;
    selectWant.value = to;

    //Подсветка селектов
    selectHave.style.color = 'white';
    selectHave.style.backgroundColor = '#833AE0';
    selectWant.style.color = 'white';
    selectWant.style.backgroundColor = '#833AE0';
    option.forEach((element) => {
        element.style.color = '#C6C6C6';
        element.style.backgroundColor = '#FFFFFF';
    })
}

//Функция делающая конвертацию по значениям из селектов
function countSelect() {
    // arrow.addEventListener('click', changeColorSelectByArrow);
    changeColorSelectByArrow()
    fetchRequest();
}

//Вызов функции для вывода на экран изначальных значений (RUB к USD)
countButton();

//Функция смены from и to и перерасчёта значения конвертации
function convert() {

    //Изменения в левых кнопках
    arrayLeft.forEach((element) => {
        element.addEventListener('click', () => {
            countButton();
            checkLeft = 0;
            if (checkLeft === 0 && checkRight === 1 && checkSwitchSelect === 1) {
                arrow.addEventListener('click', () =>{
                    switchChangeSelectWithButton();
                })
            }
        })
    })

    //Изменения в правых кнопках
    arrayRight.forEach((element) => {
        element.addEventListener('click', () => {
            countButton();
            checkRight = 0;
            if (checkLeft === 1 && checkRight === 0 && checkSwitchSelect === 1) {
                arrow.addEventListener('click', () =>{
                    switchChangeSelectWithButton();
                })
            }
        })
    })
    
    //Изменения в левом селекте
    selectHave.onchange = (() => {
        from = selectHave.value;
        fetchRequest();
        if (checkLeft === 1 && checkRight === 0 && checkSwitchSelect === 0) {
            arrow.addEventListener('click', () =>{
                switchChangeSelectWithButton();
            })
        }
        arrow.addEventListener('click', () =>{
            fetchRequest();
            switchChangeSelectWithButton();
        })
    })

    //Изменения в правом селекте
    selectWant.onchange = (() => {
        to = selectWant.value;
        fetchRequest();
        if (checkLeft === 0 && checkRight === 1 && checkSwitchSelect === 1) {
            arrow.addEventListener('click', () =>{
                switchChangeSelectWithButton();
            })
        }
        arrow.addEventListener('click', () =>{
            switchChangeSelectWithButton();
        })
    })

    //Изменения в левом поле ввода
    entryFieldIHave.oninput = (() => {
        countButton();
    });

    //Изменения в правом поле ввода
    entryFieldIWant.oninput = (() => {
        fetchRequestRight();
    })
}

//Обработка функции изменения значений конвертации в тот момент, как окно приложения загрузилось успешно
window.onload = (() => {
    convert();
})