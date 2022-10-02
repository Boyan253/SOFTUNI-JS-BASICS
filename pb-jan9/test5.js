function basein(input) {

    let index = 0
    let command = input[index]
    
    
    
let countofkidtickets = 0
let countofstudenttickets = 0
let countofstandarttickets = 0
    while(command !== "Finnish"){

        let typeofmovie = input[command]
        index++
        let alltickets = Number(input[index])
        let numberoffrespace = alltickets
        index++
        let typeofticket = input[index]
        while (typeofticket !== "End") {
            switch(typeofticket) {
                case "Standard":
                    countofstandarttickets++
                    break
                    case "Student":
                        countofstudenttickets++
                        break
                        case "Kids":
                            countofkidtickets++
                            break
            }
            numberoffrespace--;
            if(numberoffrespace === 0) {
                break
            } 
            index++
            typeofticket = input[index]
        } 
        let boughttickets = alltickets - numberoffrespace
        let percentage = boughttickets / alltickets * 100
        console.log(`${typeofmovie} - ${percentage.toFixed(2)}% full.`)
index++
let command = input[index]

    }let allboughtickets = countofkidtickets + countofstudenttickets + countofstandarttickets
    console.log(`Total tickets ${allboughtickets}`)
    console.log(`${countofstudenttickets / allboughtickets * 100}% student tickets.`)
    console.log(`${countofkidtickets / allboughtickets * 100}% kids tickets.`)
    console.log(`${countofstandarttickets / allboughtickets * 100}% standart tickets.`)


} basein(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])


