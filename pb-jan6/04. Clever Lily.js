function cleverLilly(input) {
    const age = Number(input[0]);
    const priceForLaundryM = Number(input[1]);
    const priceForAToy = Number(input[2]);
    let moneySaved = 0;
    let tempMoney = 10
    let toys = 0;
  
    for (let i = 1; i <= age; i++) {
      if(i % 2 === 0) {
        moneySaved += tempMoney
        tempMoney += 10
  moneySaved -= 1
      } else  {
        toys++
  
      }
    } 
    moneySaved += toys * priceForAToy
    let diff = Math.abs(moneySaved - priceForLaundryM)
    if(moneySaved >= priceForLaundryM) {
      console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
      
      console.log(`No! ${diff.toFixed(2)}`)
    }
  } cleverLilly(["10",
  "170.00",
  "6"])
  