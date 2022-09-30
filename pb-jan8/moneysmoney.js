function monsney(input) {
let money = Number(input.shift())
let convertedmoney = (money * 100)
let coins = 0
    while(convertedmoney > 0) {
    if(convertedmoney >= 200  ){
        coins++
        convertedmoney -= 200
    } else if (convertedmoney >= 100){
        coins++
        convertedmoney -= 100 
    } else if ( convertedmoney >= 50 ){
        coins++
        convertedmoney -= 50
    } else if ( convertedmoney >= 20 ) {
        coins++
        convertedmoney -= 20 
        
    }else if ( convertedmoney >= 10 ) {
            coins++
            convertedmoney -= 10 
    } else if (convertedmoney >= 5 ) {
        coins++
        convertedmoney -= 5
    } else if (convertedmoney >= 2 )
 { coins++ 
    convertedmoney -= 2
} else if (convertedmoney >= 1  ) {
    coins++
    convertedmoney -= 1
} else {
    convertedmoney = 0
}
    } 
console.log(coins)
} monsney(["0"])