const input = prompt();

const numbers = input.split(" ").map(Number);

const target = Number(prompt());

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