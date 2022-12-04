import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

class Main{

    public static int[] parser(String line){
        int[] arr = {0 , 0, 0, 0};
        int isNum = 1;
        String a = "";
        for(int i=0; i<=line.length()-1; i++){
            if((line.charAt(i) >= '0') && (line.charAt(i) <= '9') ){
                a += line.charAt(i);
            }else{
                //System.err.println(a); 
                arr[isNum-1] = Integer.parseInt(a);
                a = "";
                isNum++;
            }
        }   
        arr[3] = Integer.parseInt(line.substring(line.lastIndexOf("-")+1, line.length()));
        //System.err.println(arr[3]); 
        return arr;   
    } 
    public static void main(String args[]){
        System.out.println("hello world!");
        Scanner scanner;
        try {
            scanner = new Scanner(new File("input"));
            int sum = 0;
            int count = 0;
            while (scanner.hasNextLine()) {
                String line1 = scanner.nextLine();
                System.out.println(line1);
                int[] vals = parser(line1);
                if((vals[2] <= vals[1]) && (vals[2] >= vals[0])){
	
                  count++;
                  }else{
	
                  if((vals[3] <= vals[1]) && (vals[3] >= vals[0])){
	
                  count++;
                  }else{
                    if((vals[0] <= vals[3]) && (vals[0] >= vals[2])){
	
                  count++;
                  }else{
                      if((vals[1] <= vals[3]) && (vals[1] >= vals[2])){
	
                  count++;
                  }
                    }
                  }
            }
              }
            System.out.println("THE RESULT IS: " + count);
              
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}