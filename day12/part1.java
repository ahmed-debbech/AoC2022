import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Scanner;

class Main{

    public static int[] findStartOrEnd(List<String> graph, boolean mode){
        int[] res = new int[2];
        int k = 0;
        for(String row : graph){
            for(int i =0; i<=row.length()-1; i++){
                if(mode == true){
                    if(row.charAt(i) == 'S'){
                        res[0] = k;
                        res[1] = i;
                    }
                }else{
                    if(row.charAt(i) == 'E'){
                        res[0] = k;
                        res[1] = i;
                    }
                }
            }
            k++;
        }
        return res;
    }
    public static void main(String args[]){
        System.out.println("hello world!");
        Scanner scanner;
        List<String> graph = new ArrayList<>();
        try {
            scanner = new Scanner(new File("input"));
            while (scanner.hasNextLine()) {
                String line1 = scanner.nextLine();
                graph.add(line1);
            }
            int[] S = findStartOrEnd(graph, true);
            int[] E = findStartOrEnd(graph, false);
            System.err.println(S[0] + ", " + S[1]);
            System.err.println(E[0] + ", " + E[1]);

            List<int[]> visited = new ArrayList<>();
            Queue<int[]> que = new LinkedList<>();
            que.add(S);
            System.out.println("THE RESULT IS: " + que.peek());
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}