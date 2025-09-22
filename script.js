// Создаем переменные
let myString = "Это строка"; // Переменная типа string
let myNumber = 123;         // Переменная типа number
let myBoolean = true;       // Переменная типа boolean (для вывода true)

// Выводим в консоль undefined
// Если переменная объявлена, но ей не присвоено значение, ее тип undefined.
let undefinedVariable;
console.log(undefinedVariable); // undefined

// Выводим в консоль false
// Просто создаем переменную с этим значением
console.log(false); // false

// Выводим в консоль true
console.log(myBoolean); // true

// Выводим в консоль NaN (Not a Number)
// NaN получается, когда математическая операция не может дать числовой результат
console.log(0 / 0); // NaN

// Выводим в консоль number
console.log(typeof myNumber); // number

// Выводим в консоль string
console.log(typeof myString); // string
// Запрашиваем сумму покупки у пользователя
let purchaseAmount = prompt("Введите сумму покупки:");

// Проверяем, что введено корректное число
purchaseAmount = Number(purchaseAmount); // Преобразуем в число
if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
    console.log("Пожалуйста, введите корректное число.");
} else {
    let discount = 0; // Изначально скидка 0%

    // Определяем размер скидки
    if (purchaseAmount >= 1000 && purchaseAmount < 5000) {
        discount = 0.05; // 5%
    } else if (purchaseAmount >= 5000 && purchaseAmount < 10000) {
        discount = 0.10; // 10%
    } else if (purchaseAmount >= 10000) {
        discount = 0.15; // 15%
    }

    // Рассчитываем итоговую сумму с учетом скидки
    let finalAmount = purchaseAmount - (purchaseAmount * discount);

    // Округляем итоговую сумму до двух знаков после запятой
    finalAmount = finalAmount.toFixed(2);

    // Выводим результат в консоль
    console.log(`Сумма покупки: ${purchaseAmount} рублей`);
    if (discount > 0) {
        console.log(`Размер скидки: ${discount * 100}%`);
    } else {
        console.log("Скидка не предоставляется.");
    }
    console.log(`Итоговая сумма: ${finalAmount} рублей`);
}