import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

class Main{
    public static void main(String args[]){
        System.out.println("hello world!");
        Scanner scanner;
        try {
            List<Integer> all = new ArrayList<>();
            scanner = new Scanner(new File("input"));
            List<Integer> arr = new ArrayList<>();;
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                if(!line.equals("")){
                    arr.add(Integer.parseInt(line));
                }else{
                    int sum =0;
                    for(int i=0; i<=arr.size()-1; i++){
                        sum += arr.get(i);
                    }
                    all.add(sum);
                    arr.clear();
                }
            }
            Collections.sort(all);
            System.out.println("RESULT IS: " + all.get(all.size()-1));
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}