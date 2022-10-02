// function travel(input) {
// index = 0
// let destinations = input[index]
// index++
// let money = Number(input[index])
// index++


// while(destinations !== "End" ){
//     let currentnum = Number(money)
// }


    

// } travel(["Greece",
// "1000",
// "200",
// "200",
// "300",
// "100",
// "150",
// "240",
// "Spain",
// "1200",
// "300",
// "500",
// "193",
// "423",
// "End"])
function traveling(input) {
    let destination = input[0];
    let minBudget = input[1];
    let savedMoney = 0;
    let index = 1;
  
    while (destination !== "End") {
        index++;
      while (savedMoney < minBudget) {
        savedMoney += Number(input[index]);
        index++;
        if (savedMoney >= minBudget) {
          console.log(`Going to ${destination}!`);
          savedMoney = 0;
          destination = input[index];
          index++;
          minBudget = input[index];
          break;
        }
      }
    }
  }traveling(["Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End"])
  