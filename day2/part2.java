import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

class Main{
    public static void main(String args[]){
        System.out.println("hello world!");
        Scanner scanner;
        try {
            scanner = new Scanner(new File("input"));
            int sum = 0;
            Map<Character, Integer> map=new HashMap();  
            map.put('A',1);  
            map.put('B',2);  
            map.put('C',3);  
            map.put('X',1); 
            map.put('Y',2); 
            map.put('Z',3); 
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                System.out.println(line);
                char opp = line.charAt(0);
                char me = line.charAt(2);
                if(me == 'X'){ //lose
                    if(opp == 'A') sum+=(map.get('C'));
                    if(opp == 'B') sum+=(map.get('A'));
                    if(opp == 'C') sum+=(map.get('B'));
                }else{
                    if(me == 'Y'){ //tie
                        sum+=(map.get(opp) + 3);
                    }else{ //win
                        if(opp == 'A') sum+=(map.get('B') + 6);
                        if(opp == 'B') sum+=(map.get('C') + 6);
                        if(opp == 'C') sum+=(map.get('A') + 6);
                    }
                }
            }
            System.out.println("RESULT IS: " + sum);
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}