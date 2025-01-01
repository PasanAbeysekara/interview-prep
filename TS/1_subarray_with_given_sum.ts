const input:string = prompt() || "";

const numbers:number[] = input.split(" ").map(Number);

const target:number = Number(prompt());

numbers.sort((a,b) => a-b);

if(target>numbers.reduce((acc,rem)=>acc+rem,0)){
    console.log("No combinations");
}
else{
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i;j<numbers.length;j++){
            if(numbers[i]+numbers[j]==target){
                console.log(`[${numbers[i]}, ${numbers[j]}]`);
                break;
            }
        }
    }
}