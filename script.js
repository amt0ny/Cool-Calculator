var display;
var buttons;
var clear;
var equal;
var delt;

(function () {
    display = document.querySelector('.display');
    buttons = document.querySelectorAll('.btn');
    clear = document.querySelector('.clear-btn');
    equal = document.querySelector('.equal-btn');
    delt = document.querySelector('.delt-btn')

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            display.value += value;
        })
    })
    equal.addEventListener('click', function (e) {
        if (display.value === '') {
            display.value = "";
        }
        else {
            let ans = eval(display.value);
            display.value = ans;
        }
    })

    clear.addEventListener('click', function (e) {
        display.value = "";


    })
    delt.addEventListener('click', function (e) {
        let deleteLatest = display.value;
        display.value = deleteLatest.substr(0, deleteLatest.length - 1);
    })
})()

