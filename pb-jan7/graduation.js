function graduate(input) {
  let index = 0;
  let name = input[index];

  index++;
  let counter = 0;
  let i = 1;
  let sumgrade = 0;
  let isExcluded = false;
  while (i <= 12) {
    let grades = Number(input[index]);
    index++;
    if (grades < 4.0) {
      counter++;
      if (counter > 1) {
        isExcluded = true;
        console.log(`${name} has been excluded at ${i} grade`);
        break;
      }
      continue;
    }
    sumgrade += grades;

    i++;
  }

  if (!isExcluded) {
    let avggrade = sumgrade / 12;
    console.log(`${name} graduated. Average grade: ${avggrade.toFixed(2)}`);
  }
}

graduate(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
