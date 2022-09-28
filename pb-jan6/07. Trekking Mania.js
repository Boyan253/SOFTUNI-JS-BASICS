function histogram(input) {
    let num = Number(input[0]);
    let Musala = 0;
    let Monblan = 0;
    let Kilimandjaro = 0;
    let K2 = 0;
    let Everest = 0;
    let totalclimbers = 0
    for (let i = 1; i <= num; i++) {
      let currentNum = Number(input[1]);
      totalclimbers += currentNum
      if (currentNum < 5) {
        Musala += currentNum
      } else if (currentNum >= 6 ){ 
        Monblan += currentNum
      } else if (currentNum >= 13 ) {
        Kilimandjaro += currentNum
      } else if (currentNum >= 26 ) {
        K2 += currentNum
      } else if (currentNum >= 41 ) {
        Everest += currentNum
      }
    }
          console.log(`${Musala / totalclimbers * 100}% `)
          console.log(`${Monblan / totalclimbers * 100}% `)
          console.log(`${Kilimandjaro / totalclimbers  * 100}% `)
          console.log(`${K2 / totalclimbers * 100}%`)
          console.log(`${Everest / totalclimbers * 100}% `)
    }
   histogram(["10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78"])
  
