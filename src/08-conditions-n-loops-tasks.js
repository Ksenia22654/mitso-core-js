function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

function getFactorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) return true;
  return false;
}

function doRectanglesOverlap(r1, r2) {
  if (r1.left + r1.width <= r2.left) return false;
  if (r2.left + r2.width <= r1.left) return false;
  if (r1.top + r1.height <= r2.top) return false;
  if (r2.top + r2.height <= r1.top) return false;
  return true;
}

function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  if (dx * dx + dy * dy < circle.radius * circle.radius) return true;
  return false;
}

function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    let count = 0;
    for (let j = 0; j < str.length; j += 1) {
      if (str[i] === str[j]) count += 1;
    }
    if (count === 1) return str[i];
  }
  return null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = a < b ? a : b;
  const end = a < b ? b : a;
  let result = '';
  if (isStartIncluded) result += '['; else result += '(';
  result += `${start}, ${end}`;
  if (isEndIncluded) result += ']'; else result += ')';
  return result;
}

function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
}

function reverseInteger(num) {
  const str = num.toString();
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }
  return parseInt(reversed, 10);
}

function isCreditCardNumber(ccn) {
  const str = ccn.toString().split('').reverse();
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    let digit = parseInt(str[i], 10);
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  return sum % 10 === 0;
}

function getDigitalRoot(originalNum) {
  let num = originalNum;
  while (num > 9) {
    let sum = 0;
    const str = num.toString();
    for (let i = 0; i < str.length; i += 1) sum += parseInt(str[i], 10);
    num = sum;
  }
  return num;
}

function isBracketsBalanced(str) {
  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    const c = str[i];
    if (c === '(' || c === '[' || c === '{' || c === '<') stack.push(c);
    else {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if ((c === ')' && last !== '(')
          || (c === ']' && last !== '[')
          || (c === '}' && last !== '{')
          || (c === '>' && last !== '<')) return false;
    }
  }
  return stack.length === 0;
}

function toNaryString(originalNum, n) {
  let num = originalNum;
  let result = '';
  do {
    result = (num % n) + result;
    num = Math.floor(num / n);
  } while (num > 0);
  return result;
}

function getCommonDirectoryPath(paths) {
  if (paths.length === 0) return '';
  const first = paths[0].split('/');
  const common = [];
  for (let i = 0; i < first.length; i += 1) {
    const segment = first[i];
    let allMatch = true;
    for (let j = 1; j < paths.length; j += 1) {
      const pathSeg = paths[j].split('/');
      if (pathSeg[i] !== segment) { allMatch = false; break; }
    }
    if (!allMatch) break;
    common.push(segment);
  }
  if (common.length === 0) return '';
  return `${common.join('/')}/`;
}

function getMatrixProduct(m1, m2) {
  const rows = m1.length;
  const cols = m2[0].length;
  const inner = m2.length;
  const result = [];
  for (let i = 0; i < rows; i += 1) {
    result[i] = [];
    for (let j = 0; j < cols; j += 1) {
      let sum = 0;
      for (let k = 0; k < inner; k += 1) sum += m1[i][k] * m2[k][j];
      result[i][j] = sum;
    }
  }
  return result;
}

function evaluateTicTacToePosition(position) {
  const lines = [
    [[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]],
  ];
  for (let l = 0; l < lines.length; l += 1) {
    const [a, b, c] = lines[l].map(([i, j]) => (position[i] ? position[i][j] : undefined));
    if (a && a === b && a === c) return a;
  }
  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
