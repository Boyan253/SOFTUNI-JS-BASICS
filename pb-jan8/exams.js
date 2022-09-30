function examtrying(input) {
  let countofbadgrade = input[0];
  let index = 1;
  let command = input[index];
  let numbeofproblems = 0;
  let sumgrades = 0;
  let NumberofBadGrades = 0;
  let lastproblem = ""
  while (command !== "Enough") {
      lastproblem = command = input[index];
    numbeofproblems++;
    index++;
    let currentgrade = Number(input[index]);
    sumgrades += currentgrade;

    if (currentgrade <= 4) {
      NumberofBadGrades++;
    }
    if (NumberofBadGrades
 >= countofbadgrade) {
      console.log(`You need a break, ${NumberofBadGrades} poor grades.`);
      break;
    }
    index++;
    command = input[index];
  }
  if (command === "Enough") {
    avgscore = sumgrades / numbeofproblems;
    console.log(`Average score: ${avgscore.toFixed(2)}`);
    console.log(`Number of problems: ${numbeofproblems}`);

   
    console.log(`Last problem: ${lastproblem}`);
  }
}
examtrying([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
