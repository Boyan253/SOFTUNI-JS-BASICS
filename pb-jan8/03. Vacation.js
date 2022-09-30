function vacaten(input) {

let moneyneeded = Number(input[0]);

let budget = Number(input[1])
let index = 2

let counter = 0
let daysspent = 0

while(budget < moneyneeded) {
    let action = input[index]
    index++
    let amountofindex = Number(input[index])
    
counter++
switch(action) {
    case "spend":
budget -= amountofindex
if(budget < 0) {
budget = 0}
daysspent++
    break;
    case "save":
budget += amountofindex
daysspent = 0
    break;
}

 if (daysspent >= 5){
     console.log(`You can't save the money.`)

     console.log(`${counter}`)
     break;
 }
 index++
}
if(budget >= moneyneeded){
console.log(`You saved the money for ${counter} days.`)}
} vacaten(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])