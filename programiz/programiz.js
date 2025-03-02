function factor(n1,n2){
    let result
    for (let i = 1; i <= n1 && i<= n2; i++) {
        if (n1 % i == 0 && n2 % i == 0) {
            result = i
                
            
        }
    }
    return result
}

console.log(factor(60,72))