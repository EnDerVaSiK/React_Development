const a_ = Math.floor(Math.random() * 20) + 1;

function manyChecks(a) {
  //let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  return (
    a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
}

console.log("Исходный вывод Tern2:");
console.log(manyChecks(a_));

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()




console.log("Мое решение Tern2 с if...else:");

function myManyChecksIfElse(a) {
  console.log(`a = ${a}`);

  result = '';

  if (a > 10) {
    result += 'a is bigger than 10';
  } else {
    result += 'a is less than or equal to 10 ';
    if (a === 5) {
      result += 'an example of a special case';
    } else {
      result += '';
    }
  }

  if (a === 15) {
    result += 'but a is not 15';
  } else {
    result += '';
  }

  if (a > 5) {
    result += 'and a is greater than 5';
  } else {
    result += 'and a is less than or equal to 5 ';
  }

  if (a % 2) {
    result += ' and a is odd';
  } else {
    result += ' and a is even ';
  }

  return result;
}

console.log(myManyChecksIfElse(a_));


console.log("Мое решение Tern1 с switch():");

function myManyChecksSwitch(a) {
  console.log(`a = ${a}`);
  
  result = '';

  switch (true) {
    case a > 10:
      result += 'a is bigger than 10';
      break;
    case !(a > 10):
      result += 'a is less than or equal to 10 ';
      switch (true) {
        case a === 5:
          result += 'an example of a special case';
          break;
        case !(a === 5):
          result += '';
          break;
      };
      break;
  }

  switch (true) {
    case a === 15:
      result += 'but a is not 15';
      break;
  }

  switch (true) {
    case a > 5:
      result += 'and a is greater than 5';
      break;
    case !(a > 5):
      result += 'and a is less than or equal to 5 ';
      break;
  }

  switch (true) {
    case (a % 2) == 1:
      result += ' and a is odd';
      break;
    default:
      result += ' and a is even ';
      break;
  }

  return result;
}

console.log(myManyChecksSwitch(a_));
