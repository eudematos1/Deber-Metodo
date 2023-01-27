let nums = [0, 0, 0, 0]
let x=prompt("Ingrese numero")
let j=nums.length-1
let i=0

for(let i=0;i<nums.length;i++){
    nums[i]=x
    
    x=x*2
}
console.log(nums)