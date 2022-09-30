function oldbook(input) {
   

let book = input[0];
let index = 1;

let NextBookName = input[index]
let isbookFound = false
while (NextBookName !== "No More Books") {
    if(NextBookName	=== book) {
        isbookFound = true   
    break;

    }
    index++
    NextBookName = input[index]
    }if(isbookFound) {
        console.log(`You checked ${index - 1} books and found it.`  )
} else {
    console.log("The book you search is not here!")
    console.log(`You checked ${index-1} books.`)
    
}

} oldbook (["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])	