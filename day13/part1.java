import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

class Any<T> {
    T obj;
    Any(T obj) { this.obj = obj; } // constructor
    public T getObject() { return this.obj; }
}
class Node{
    public List<Any> left;
    public List<Any> right;
}
class Main{
    
    public static List<Node> parser (){
        Scanner scanner;
        try {
            scanner = new Scanner(new File("input"));
            while (scanner.hasNextLine()) {
                String line1 = scanner.nextLine();
                System.err.println(line1);
            }
            System.out.println("THE RESULT IS: ");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }
    public static void main(String args[]){
        System.out.println("hello world!");
        parser();
        List<Node> mm = new ArrayList<>();
    }
}