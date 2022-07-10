//square element in javaScript
var numbers = [12, 4, 3, 48, 41];
var number = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    number.push(result);
}

console.log(number);