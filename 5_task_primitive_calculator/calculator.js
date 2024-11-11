const history = $('.history-in');
const input_screen = $('.screen-input');
let result = 0;


document.querySelector('.buttons').onclick = (e) => {
    // нажатие не кнопку
    if (!e.target.classList.contains('btn')) return;

    // нажатие на действие "="
    if (e.target.classList.contains('equal')) {
        calculation();
        add_to_history();
        return;
    }

    // значение нажатой кнопки
    const value = e.target.textContent;

    // запить (добавление) в форму ввода значения, которое мы выбрали
    input_screen.value = input_screen.val(input_screen.val()+value);
}


// вычисление результата
function calculation() {
    result = eval(input_screen.val());
}


// добавление результата вычислений в историю
function add_to_history() {
    history.append('<p class="history-item">' + result + '</p>');
}
