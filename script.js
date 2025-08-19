(function (a, b) {
  const sum = a + b;
  alert(`The sum is: ${sum}`);
})(5, 10);

const arr = ["apple", "banana", "cherry"];

console.log("--- for...in ---");
for (let index in arr) {
  console.log(index);
}

console.log("--- for...of ---");
for (let value of arr) {
  console.log(value);
}

console.log("--- forEach ---");
arr.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

class Student {
  constructor(name, university, faculty, finalGrade) {
    this.name = name;
    this.university = university;
    this.faculty = faculty;
    this.finalGrade = finalGrade;
  }

  printInfo() {
    console.log(
      `${this.name} is a student in faculty of ${this.faculty} in university ${this.university}`
    );
  }
}

const std = new Student("Mohamed", "EELU", "IT", 99);
std.printInfo();

function* tipGenerator() {
  const tips = [
    "Use === instead of ==",
    "Always declare with let/const",
    "Keep code DRY",
    "Use template literals",
    "Break code into functions",
    "Use arrow functions",
    "Understand promises",
    "Avoid global variables",
    "Comment smartly",
    "Test your code",
  ];

  let index = 0;
  while (true) {
    yield tips[index % tips.length];
    index++;
  }
}

const generator = tipGenerator();
const tipBox = document.getElementById("tipBox");

document.getElementById("showAll").addEventListener("click", () => {
  tipBox.innerHTML = "";
  for (let tip of tipGenerator()) {
    tipBox.innerHTML += `<p>${tip}</p>`;
    if (tip.includes("Test your code")) break;
  }
});

document.getElementById("startInterval").addEventListener("click", () => {
  const interval = setInterval(() => {
    const next = generator.next();
    if (!next.done) {
      tipBox.innerHTML += `<p>${next.value}</p>`;
    }
  }, 3000);
});
