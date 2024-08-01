const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let stack = [];
let answer = 0;

function solution(input) {
  for (let i = 1; i < input.length; i++) {
    const int = Number(input[i]);

    if (int === 0) {
      stack.pop();
    } else {
      stack.push(int);
    }
  }

  if (stack.length > 0) {
    answer = stack.reduce((arr, cur) => arr + cur, 0);
  }

  console.log(answer);
}

solution(input);
