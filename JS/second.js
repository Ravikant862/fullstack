let num=153;
let org=num;
let sum=0;
let i=String(num).length;

while(num>0){
    let q=num%10;
    sum=sum+q**i;
    num = Math.floor(num / 10);
}

if(sum==org){
    console.log("Yes");
}
else{
    console.log("No");
}