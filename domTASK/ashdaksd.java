

//========== User's Code Starts Here ==========
import java.util.*;
public class Main
{
   
    public static int find_maximum(int arr[],int length)
    {
       /*Function to find the maximum in the array 
          return the maximum value*/
          int temp;
          for(int i=0 ; i<length ; i++)
          {
                if(arr[i]>arr[i+1])
                {
                    temp = arr[i];
                    arr[i] = arr[i+1]
                    arr[i+1] = temp
                }   
          }
        return arr[length-1];  
        /* Do not change the code beyond this point*/
    }
     public static void main(String[]args)
    {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int arr[]=new int[n];
        for(int i=0;i<n;i++)
        {
            arr[i]=sc.nextInt();
        }
        int max= find_maximum(arr,n);
        System.out.println(max);
    }
}
//========== User's Code Ends Here ==========
