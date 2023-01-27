let nums = [0, 0, 0, 0]
let x=prompt("Ingrese numero")
let j=3
let i=0


for(let i=0;i<nums.length;i++){
    nums[i]=x
    
    x=x*2
}

console.log(nums[j]+" ," +nums[j-1]+" ,"+nums[j-2]+" ,"+nums[j-3])