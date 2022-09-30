function cakeydesu(input) {
    let index = 0
    let height = Number(input[index])
    index++;
    let lenght = Number(input[index])
    index++
let cakes = (input[index])
    index++

    let countofcaks = height * lenght

while(cakes !== "STOP"){
    
    
    let countofcakes = Number([cakes]);
    
countofcaks -=  countofcakes


if (countofcaks < 0){
     
    console.log(`No more cake left! You need ${Math.abs(countofcaks)} pieces more.`)
    break;
}cakes = input[index]
index++

}
if(cakes == "STOP"){
    console.log(`${countofcaks} pieces are left.`)
    
    
} 
}cakeydesu(["10",
"2",
"2",
"4",
"6",
"STOP"])





