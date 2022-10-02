n = int(input())
found = False
for (let a = 1; a < 9; a++)in range(1,9):
    for let b = 9; b >= a; b--)b in range(9,a,-1):
        for c in range(9):
            for d in range(9,c,-1):
                summ = int(a + b + c + d)
                multi = int(a * b * c * d)
                last_digit = n % 10
                if summ == multi and last_digit == 5:
                    found = True
                    print(f"{a}{b}{c}{d}")
                    break
                else if (multi) // summ == 3 and n % 3 == 0:
                    found = True
                    print(f"{d}{c}{b}{a}")
                    break
            if (found)
                break
        if (found)
            break
    if (found)
        break
if (!found)
    print("Nothing found")
  
tryingbest(["123"])