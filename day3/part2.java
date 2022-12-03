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
        String alpha = "abcdefghijklmnopqrstuvwxyz";
        List<Character> already_found = new ArrayList<>();
        try {
            scanner = new Scanner(new File("input"));
            int sum = 0;
            while (scanner.hasNextLine()) {
                String line1 = scanner.nextLine();
                String line2 = scanner.nextLine();
                String line3 = scanner.nextLine();
                
                for(int i=0; i<=line1.length()-1; i++){
                    boolean found1 = false;
                    boolean found2 = false;
                    for(int j=0; j<=line2.length()-1; j++){
                        if(line1.charAt(i) == line2.charAt(j)){
                                found1 = true;
                                break;
                        }
                    }
                    for(int j=0; j<=line3.length()-1; j++){
                        if(line1.charAt(i) == line3.charAt(j)){
                                found2 = true;
                                break;
                        }
                    }
                    if(found2 && found1){
                        int periority = 0;
                        if((line1.charAt(i) >= 'A') && (line1.charAt(i) <= 'Z')){
                            periority = (alpha.indexOf(Character.toLowerCase(line1.charAt(i)))+1) + 26;
                        }else{
                            periority = alpha.indexOf(Character.toLowerCase(line1.charAt(i)))+1;
                        }
                        sum += periority;
                        break;
                    }
                }
                already_found.clear();
            }
            System.out.println("THE RESULT IS : " + sum);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}