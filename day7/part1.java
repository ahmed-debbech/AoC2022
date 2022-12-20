import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

class Paper{ // i renamed it to Paper because "File" is already taken by Java
    public String name;
    public long size;
}
class Folder{
    public String name;
    public List<Paper> files = new ArrayList<>();
    public List<Folder> folders = new ArrayList<>();
}
class Main{
    
    public static String[] parseCmds(String cmd){
        String cm[] = {"", ""};
        cm[0] = cmd.substring(2,3);
        cm[1] = cmd.substring(5, cmd.length());
        return cm;
    }
    public static void main(String args[]){
        System.out.println("hello world!");
        Scanner scanner;
        try {
            scanner = new Scanner(new File("input"));
            while (scanner.hasNextLine()) {
                String line1 = scanner.nextLine();
                System.err.println(parseCmds(line1));
            }
            System.out.println("THE RESULT IS: ");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}