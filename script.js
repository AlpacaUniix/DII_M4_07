/* fibonacci */
let input = 10;
let fn1 = 0;
let fn2 = 1;
let sum = 1;

for (let i = 3; i < input; i++) {
    fn1 = fn2;
    fn2 = sum;
    sum = fn1 + fn2;
}

console.log(sum);

/*prime number */
let n = 3;
let sumPrime = true;
for (i = 2; i * i <= n / 2; i++) {
    if (n % i == 0) {
        sumPrime = false
        break;
    }
}
console.log(n + ' ' + sumPrime);

let employee = [5];
employee[0] = {
    'name': 'นาย ก',
    'age': 68,
    'salary': 759900,
}
employee[
    1] = {
    'name': 'นางสาว ข',
    'age': 35,
    'salary': 55400,
}
employee[
    2] = {
    'name': 'นาย ค',
    'age': 51,
    'salary': 81000,
}
employee[
    3] = {
    'name': 'นาย ง',
    'age': 76,
    'salary': 111000,
}
employee[
    4] = {
    'name': 'นางสาว จ',
    'age': 22,
    'salary': 25000,
}
console.log(employee);

/*all salary */
let sumSalary = employee.age * 12;

/*sum age */
let averageAge = 0;
for (let i = 0; i < employee.length; i++) {
    averageAge += employee[i].age;
}
averageAge = averageAge / employee.length;
console.log(averageAge);

const newText = 'cancle';
document.getElementById('ok').innerHTML = newText;
document.getElementById('ok').innerHTML = newText;

function alert1() {
    alert('not ok');
}
let ok = document.getElementById('ok');
ok.addEventListener('click', alert1);