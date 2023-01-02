const notice__form = document.querySelector(`.notice__form`); // form 
const min__string = document.querySelector(`.min__string`); // input с суммой
const form__submit = document.querySelector(`.form__submit`); // кнопка `ВНЕСТИ`
const out__money = document.querySelector(`.out__money`); // ндпись `Вы внесли `
const rub__money = document.querySelector(`.rub__money`); // сколько внесено рублей
const btn1 = document.querySelectorAll(`.btn1`); // все кнопки кофе. Изначально заблакировано
const btn2 = document.querySelectorAll(`.btn2`); // все кнопки размер кофе. 
const addButton = document.querySelectorAll(`#addButton`); // все кнопки  
const sum1 = document.querySelector(`.sum1`); // общая сумма
const sum1__2 = document.querySelector(`.sum1__2`); // сдача или дополнительно внести средства
const reset = document.querySelector(`.reset`); // кнопка сброса
const calculate = document.querySelector(`.calculate`); // кнопка расчитать




const disabledBTN = (arg = true) => { // изначально стоит блокировка кнопок
    addButton.forEach((element, init, arr) => {
        element.disabled = arg;
    })
};

// Кнопка сброса
reset.addEventListener('click', function () {
    window.location.reload();
})


// TODO:  Проверка Валидация - 1

min__string.addEventListener('input', function (evt) { // отслеживаем событие в input с суммой
    this.num = Number(min__string.value);
    this.target = evt.target; // записали событие, которое там произошло
    if (this.target.value.length <= 2 || this.num <= 2) { // если длина событий в input меньше двух, то событие выдаёт соответствующее сообщение 
        //  this.target.setCustomValidity('Сумма должна быть не менее 130 рублей');
        coffeMahine.formAddError(min__string);
        disabledBTN(); // блокировка стоит
        reset.disabled = false; // кнопка сброса работает всегда
    } else {
        if (DRINKS1[0].Капучино === true || DRINKS1[0].Латте === true || DRINKS1[0].Чай === true && size__drinks1[0].SMALL === true || size__drinks1[0].MEDIUM === true || size__drinks1[0].BIG === true) {
            coffeMahine.formAddError(min__string);
            disabledBTN(); // блокировка стоит
            reset.disabled = false;
            calculate.disabled = false; // кнопка сброса работает всегда
        } else {
            coffeMahine.formRemoveError(min__string);
            this.target.setCustomValidity('');
            disabledBTN(false); // если всё хорошо, блокировка снимаеться
            reset.disabled = false; // кнопка сброса работает всегда
        }
    }
});

// TODO:  Проверка Валидация - 2. Незаполненные input. Только пустые строки и если всё заполнено по нужным требованиям то выдаём -3 в submit, чтобы вышла надпись "всё заполнено"

const formValidate = () => { // счётчик
    this.error = 0; // счётчик
    this.input = min__string;
    if (this.input.value === '') {
        this.error++
    } else {
        this.error--
    }
    return this.error
};

const drink = [`Капучино`, `Латте`, `Чай`];
const size = [`SMALL`, `MEDIUM`, `BIG`];


const DRINKS1 = [{ // Переключатель. Передаёться значение true выбранному напитку
    Капучино: false,
    Латте: false,
    Чай: false,
}];

const size__drinks1 = [{ // Переключатель. Передаёться значение true выбранному стаканчику
    SMALL: false,
    MEDIUM: false,
    BIG: false,
}];

const size__drinks1__MONEY = [{
    SMALL: 30, // Стоимость надбавки за размер стакана 
    MEDIUM: 40, // Стоимость надбавки за размер стакана 
    BIG: 60, // Стоимость надбавки за размер стакана 
}]

const DRINKS1__MONEY = [{ // стоимость напитков
    Капучино: 100, // Стоимость напитка 
    Латте: 110, // Стоимость напитка 
    Чай: 120, // Стоимость напитка 
}];


const BTN__click = (btn, massiv, DRINK) => {
    btn.forEach((element, item, arr) => {
        element.addEventListener(`click`, function () {
            if (element.value === massiv[0]) {
                element.style.color = "white";
                element.style.backgroundColor = "rgb(0, 128, 0)";
                arr[1].disabled = true;
                arr[2].disabled = true;
                if (DRINK === DRINKS1) {
                    DRINK[0].Капучино = true;
                } else {
                    DRINK[0].SMALL = true;
                }
            }
            if (element.value === massiv[1]) {
                element.style.color = "white";
                element.style.backgroundColor = "rgb(0, 128, 0)";
                arr[0].disabled = true;
                arr[2].disabled = true;

                if (DRINK === DRINKS1) {
                    DRINK[0].Латте = true;
                } else {
                    DRINK[0].MEDIUM = true;
                }
            }
            if (element.value === massiv[2]) {
                element.style.color = "white";
                element.style.backgroundColor = "rgb(0, 128, 0)";
                arr[0].disabled = true;
                arr[1].disabled = true;

                if (DRINK === DRINKS1) {
                    DRINK[0].Чай = true;
                } else {
                    DRINK[0].BIG = true;
                }
            }
        })
    })
};


BTN__click(btn1, drink, DRINKS1); // кнопки выбора напитков `Капучино`, `Латте`, `Чай`
BTN__click(btn2, size, size__drinks1); // кнопки выбора размера напитка `SMALL`, `MEDIUM`, `BIG`

const coffeMahine = {
    formAddError(input) { // функция для вывода ошибки т.е. красной рамки
        input.classList.add('testimonials__error');
        input.classList.remove('testimonials__not_error');
    },
    formRemoveError(input) { // функция для снятия ошибки т.е. убераеться красная рамка
        input.classList.remove('testimonials__error');
        input.classList.add('testimonials__not_error');
    }
};


const Function_massiv = (array_1, argument) => {
    this.keys = 0;
    array_1.forEach(myFunction);

    function myFunction(item, index) {
        for (let key in item) {
            if (item[key] === argument) {
                this.keys = key;
            }
        }
    }
    return this.keys;
};


let Napitok__Name = 0; // записываеться какой напиток выбран. Стоимость
let Napitok__Size = 0; // записываеться какой выбран размер стаканчика. Стоимость

const Count__money = (boolen, argument2) => {
    if (boolen) {
        Napitok__Name = argument2;
    } else {
        Napitok__Size = argument2;
    }
};


class Data__distribution {
    constructor(massiv1, boolen, massiv__money, drink, boolen2) {
        this.massiv1 = massiv1;
        this.boolen = boolen;
        this.boolen2 = boolen2;
        this.massiv__money = massiv__money;
        this.drink = drink;
        this.Napitok = String(Function_massiv(this.massiv1, this.boolen));
        this.drink.forEach((element, item, arr) => {
            if (this.Napitok === Function_massiv(this.massiv__money, this.massiv__money[0][arr[item]])) { // Капучино
                Count__money(this.boolen2, this.massiv__money[0][arr[item]]);
            }
        })
    }
};


// Проверка формы 
notice__form.addEventListener('submit', function (evt) { // инициализируем submit для отправки form на сервер
    evt.preventDefault();
    async function formSend() { // проверяет на ошибки заполнение формы
        let error = formValidate();
        if (error === -1) { // проверка на ошибки. 

            let Data__distributionFull = new Data__distribution(DRINKS1, true, DRINKS1__MONEY, drink, true); // напитки
            let Data__distributionSize = new Data__distribution(size__drinks1, true, size__drinks1__MONEY, size, false); // размер стаканчика

            if (Napitok__Name > 0 && Napitok__Size > 0) {
                sum1.textContent = ``;
                sum1.textContent = `К оплате принято ` + `${Napitok__Name + Napitok__Size}` + ` рублей. Наливаю кофе...`;
                min__string.disabled = false;
                let summaOne = Number(min__string.value);
                let summaFull = `${Napitok__Name + Napitok__Size}`


                if (`${summaOne - summaFull}` > `${0}`) {
                    sum1__2.textContent = `Сдача ` + `${summaOne - summaFull}` + ` рублей`;
                    min__string.disabled = true;
                }
                if (`${summaOne - summaFull}` === `${0}`) {
                    sum1__2.textContent = ``;
                    min__string.disabled = true;
                }
                if (`${summaOne - summaFull}` < `${0}`) {
                    sum1.textContent = ``;
                    sum1__2.textContent = `ВНЕСИТЕ ЕЩЁ  ` + Math.abs(`${summaOne - summaFull}`) + ` рублей`;
                    min__string.disabled = false;
                }
            } else {
                sum1.textContent = `Не выбран параметр напитка`;
            }
        }
    }
    formSend();
});