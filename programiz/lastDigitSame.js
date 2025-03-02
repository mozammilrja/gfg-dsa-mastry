function lastDigitSame(nums){  
    let lastDigit = nums[0] % 10
    for (let i = 1; i < nums.length; i++) {
        if (lastDigit == nums[i] % 10) {
            return true
        }
    }
    return false
}

console.log(lastDigitSame([1,2,1]))