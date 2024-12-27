// task:
// -------
// 1.i/p--->let arr3 = ["hello", "welcome", "to", "javascript"];
// o/p---> op=["olleh","emoclew","ot","tpircsavaj"]
//SOLUTION:
console.log("1) ANSWER:")


let arr=["hello",'welcome','to','javascript']
for(let i=0;i<arr.length;i++){
    
    str="";
    for(j=arr[i].length-1;j>=0;j--){
        str+=arr[i][j];
    }arr[i]=str;
}console.log(arr)

//============================================================================
// 2.let i/p = ["hello", "welcome", "to", "javascript"];

// o/p--->["olleh","welcome","ot","javascript"]
console.log("2) ANSWER:")

let arr2=["hello",'welcome','to','javascript'];
arr3=[];
for(let i=0;i<arr2.length;i++){
    str="";
    if(i%2==0){
        for(j=arr2[i].length-1;j>=0;j--)
            str+=arr2[i][j];
    }
    else{
        str+=arr2[i];
    }arr3[arr3.length]=str;
}console.log(arr3);

