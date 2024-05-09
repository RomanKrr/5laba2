let qoue = document.querySelector('.par');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');

btn1.addEventListener('click', function() {
    qoue.innerHTML = 'В своїй хаті своя й правда, І сила, і воля.';
});

btn2.addEventListener('click', function() {
    qoue.innerHTML = 'Вітчизна — ось і альфа, і омега!';
});

btn3.addEventListener('click', function() {
    qoue.innerHTML = 'Нації вмирають не від інфаркту. Спочатку їм відбирає мову.';
});

btn4.addEventListener('click', function() {
    qoue.innerHTML = 'Нема на світі України, немає другого Дніпра';
});

btn5.addEventListener('click', function() {
    qoue.innerHTML = 'Ще не вмерла України і слава, і воля';
});
