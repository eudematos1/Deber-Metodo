let i=0
let nums=[2,7,3,2]
let cont=0


for(let i=0;i<nums.length;i++){
    if(nums[i] % 2 != 0){
        cont=cont+1
    }
}
console.log("Hay "+cont+ " números impares")