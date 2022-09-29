function maxnumber(input) {
let index = 0;
let num = input[index]
index++;
let maxNumber = Number.MAX_SAFE_INTEGER

while(num !== "Stop"){
let command = Number(num);
if (maxNumber > command) {
maxNumber = num;

}

num = input[index]
index++

}
console.log(maxNumber)

} maxnumber(["-10",
"20",
"-30",
"Stop"])

