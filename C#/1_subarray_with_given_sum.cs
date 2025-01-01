using System;
using System.Linq;

class Solution{
    public static void Main(String[] args){
        string input = Console.ReadLine();
        int[] numbers = Array.ConvertAll(input.Split(" "),int.Parse);
        int target = int.Parse(Console.ReadLine());

        if(target>numbers.Sum()){
            Console.WriteLine("No Combinations");
        }

        for(int i=0;i<numbers.Length-1;i++){
            for(int j=i;j<numbers.Length;j++){
                if(numbers[i]+numbers[j]==target){
                    Console.WriteLine($"[{numbers[i]}, {numbers[j]}]");
                }
            }
        }

    }
}