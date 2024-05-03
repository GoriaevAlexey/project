"use script";

//alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);

//const answer = prompt("Are you under 18 years old?", "18");
//console.log(typeof (answer));

// const answers = [];

// answers[0]= prompt('Your name?', '');
// answers[1]= prompt('Your surname?', '');
// answers[2]= prompt('Year?', '');

// document.write(answers);

//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);

//const user = "Alex";

//alert(`Hi, ${user}`);

console.log('arr' + " - object");
console.log(4 + + "5");

let incr = 10,
    decr = 10;

//incr++; //оператор инкремента (увеличения на 1 едлиницу);
//decr--;

//console.log(incr++); //постфиксная форма сначала возвращает само значение
//console.log(decr--);

console.log(++incr); //постфиксная форма возвращает +-1 значение
console.log(--decr);

console.log(5%2); //возвращает остаток при делении

console.log(4*2 == '8');

console.log(4*2 === '8'); //=== знак строго равенства

// && - оператор И работает тогда, когда все выражения true
// || - оператор ИЛИ - работает, когда один из варивантов true
//! - оператор отрицания (меняет значение на противоположное)

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);