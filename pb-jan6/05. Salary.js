function salary(input) {
let index = 0 
let openTabs = (input[index])
index++ 
let budget = (input[index])
index++ 
 let haveSalary = true
for (let i = 0; i < openTabs; i++) {

    let currentTabs =  input[index];
    index++;
 if(currentTabs === "Facebook") {
     
     budget -= 150
 } else if (currentTabs === "Instagram" ) {

    budget -= 100
 } else if (currentTabs === "Reddit") {
     
     budget -= 50
} 

 } if (budget <=  0) {
    haveSalary = false
        console.log("You have lost your salary.")
     } 
 

if (haveSalary) {
    console.log(budget)
}
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
