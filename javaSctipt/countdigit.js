function CountDigit(num){
    let count =0
    while(num>0){
        num=Math.floor(num/10)
        count=count+1 
    }
    return count
}
console.log(CountDigit(1234))