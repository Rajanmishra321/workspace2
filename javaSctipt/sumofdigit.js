function SumOfDigit(number)
{
    let sum=0
    while(number>0){
        sum=sum+number%10
        number=Math.floor(number/10)
    }
    return sum
}
console.log(SumOfDigit(1234))