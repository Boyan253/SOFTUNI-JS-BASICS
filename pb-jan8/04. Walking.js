function walks(input) {

let index = 0
let command = input[index]
index++
let engoal = 10000

while (command !== "Going home") {
    let stepswalking = Number(command)

 engoal -= stepswalking
if(engoal <= 0) {

console.log(`Goal reached! Good job`)
console.log(`${Math.abs(engoal)} steps over the goal!`)
break;

}
command = input[index]
index++
}
if (command === "Going home") {
    let leftsteps = Number(input[index])
    index++
   engoal -= leftsteps
    
 if(engoal <= 0) {
    console.log(`Goal reached! Good job`)
console.log(`${Math.abs(engoal)} steps over the goal!`)
    
}
 else {console.log(`${engoal } more steps to reach goal.`)}
}
}
walks(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])
