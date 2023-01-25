let i=0;
let c=0;
let word=["P","a","l","a","b","a"]
let j= word.length
let r=0

if(word.length / 2==1){
    r=word.length-1
    
    for(let i=0;i<word.length/2;i++){
        c= word[i]
        word[i]=word[j]
        word[j]=c
        j=j-1
    }
}
    else{
        for(let i=0;i<word.length/2;i++){
            c= word[i]
            word[i]=word[j]
            word[j]=c
            j=j-1
         }
    }   
    console.log(word)
