function suminumi(input) {
let index = 0
let num = Number(input[index])
index++
 
let sum = 0;
while (sum < num){
let tempnumber =  Number(input[index]);
index++;
sum += tempnumber;


}
console.log(sum);

} 
suminumi(["100",
"10",
"20",
"30",
"40"])
