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
                String line = scanner.nextLine();
                String comp1 = line.substring(0, (line.length())/2);
                String comp2 = line.substring((line.length()/2), line.length());
                //System.out.println(line.length());
                System.out.println(comp1 + " / " + comp2);
                for(int i=0; i<=comp1.length()-1; i++){
                    for(int j=0; j<=comp2.length()-1; j++){
                        if(comp1.charAt(i) == comp2.charAt(j)){
                            if(!already_found.contains(comp1.charAt(i))){
                                System.err.println(comp2.charAt(j));
                                int periority = 0;
                                if((comp2.charAt(j) >= 'A') && (comp2.charAt(j) <= 'Z')){
                                    periority = (alpha.indexOf(Character.toLowerCase(comp2.charAt(j)))+1) + 26;
                                }else{
                                    periority = alpha.indexOf(Character.toLowerCase(comp2.charAt(j)))+1;
                                }
                                System.out.println(periority);
                                sum += periority;
                                already_found.add(comp1.charAt(i));
                            }
                        }
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