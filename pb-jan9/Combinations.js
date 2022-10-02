function combinate(input) {

let n  = (input[0])
let counter = 0

for(let i = 0; i <= n; i++) {
    for(let j = 0; j <= n; j++){
        for(let k = 0; k <= n; k++) {
            
            if(i + j + k == n ) {
                counter++
            }
        }
    }
}
console.log(counter)


} 
combinate(["25"])	