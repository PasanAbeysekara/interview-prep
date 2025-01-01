import java.util.Scanner;
import java.util.Arrays;

class Soution{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        String[] numbersStr = input.split(" ");    
        int[] numbers = new int[numbersStr.length];

        for(int i=0;i<numbersStr.length;i++){
            numbers[i] = Integer.parseInt(numbersStr[i]);
        }

        int target = scanner.nextInt();
        
        Array.sort(numbers);

        if(target > Arrays.stream(numbers).sum()){
            System.out.println("No combination");
            return;
        }

        else{
            for(int j=0;j<numbers.length-1;j++){
                for(int i=j+1;i<numbers.length;i++){
                   if(numbers[i]+numbers[j]==target){
                    System.out.println("["+numbers[i]+", "+numbers[j]+"]");
                    return;
                   } 
                }
            }
        }
        
    }
}