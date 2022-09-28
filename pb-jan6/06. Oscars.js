function oscarsfinal(input) {
  let index = 0;
  let nameoftheactor = input[index];
  index++;
  let pointsfromacademy = Number(input[index]);
  index++;
  let countofcounters = Number(input[index]);
  index++;
  let isHaving = false;

  for (let i = 0; i < countofcounters; i++) {
    let name = input[index];
    index++;
    let temppoints = Number(input[index]);
    index++;

    pointsfromacademy += (name.length * temppoints) / 2;

    if (pointsfromacademy > 1250.5) {
      console.log(
        `Congratulations, ${nameoftheactor} got a nominee for leading role with ${pointsfromacademy.toFixed(1)} `+ )
      isHaving = true;
      break;
     
    }
  }

  if (!isHaving) {
    let diff = Math.abs(pointsfromacademy - 1250.5)
    console.log(`Sorry, ${nameoftheactor} you need ${diff.toFixed(1)} more! `)
  }
}
// //switch (nameoftheactor) {
//     case "Zahari Baharov":
//         pointsfromcounters = 205
//         countofcounters = 4
//         break;
//         case "Johnny Depp":
//             pointsfromcounters = 45

//             break;
//             case "Will Smith":
//                 pointsfromcounters = 29
//                 break;
//                 case "Jet Lee":
//                     pointsfromcounters = 10
//                     break;
//                   case " caseMatthew Mcconaughey":
//                       pointsfromcounters = 39
//                   break;

oscarsfinal([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
