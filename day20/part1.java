import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

class Main{
    
    public static class CircularList{
        class Node{
            public int id;
            public int value;
            public Node nextNode;
            public Node prevNode;
            public Node(int id, int val){
                this.value = val;
                this.id = id;
            }
            @Override
            public String toString() {
                //return "[" + this.id + " ," +value + "]";
                return "[" +value + "]";
                //return "[ prev : " + prevNode + " , val: " +value + ", next: " + nextNode + "]";
            }
        }
        public int idSupplier = 0; 
        public Node head = null;
        public Node tail = null;
        public int size = 0;
        public void push(int value) {
            Node newNode = new Node(idSupplier, value);
            if (head == null) {
                head = newNode;
                newNode.prevNode = tail;
            } else {
                tail.nextNode = newNode;
                newNode.prevNode = tail;
            }
            tail = newNode;
            tail.nextNode = head;
            head.prevNode = tail;
            idSupplier++;
            size++;
        }
        public void move(int id){
            if(head == null) return;
            Node ntm = find(id);
            Node nodeToMove = ntm;
            if(nodeToMove.value >= 0){
                //move forward
                Node walker = null;
                walker = head;
                do{
                    if(walker.id == nodeToMove.id){
                        Node walker2 = walker;
                        for(int u = 0; u<=nodeToMove.value-1; u++){
                            walker2 = walker2.nextNode;
                        }
                        if(nodeToMove.value > 0){
                            System.out.println(walker.prevNode);
                            walker.prevNode.nextNode = walker.nextNode;
                            walker.nextNode.prevNode = walker.prevNode;
                            nodeToMove.nextNode = walker2.nextNode;
                            nodeToMove.prevNode = walker2;
                            walker2.nextNode.prevNode = nodeToMove;
                            walker2.nextNode = nodeToMove;
                        }
                        break;
                    }
                    walker = walker.nextNode;
                }while(walker != head);
            }else{
                //move backward
            }
        }

        public Node find(int id){
            Node walk = null;
            if(head == null) return null;
            if(head.id == id) return head;
            walk = head.nextNode;
            int y = 1;
            while(walk != head){
                if(walk.id == id){
                    return walk;
                }
                y++;
                walk = walk.nextNode;
            }
            return null;
        }
        @Override
        public String toString() {
            String res = "";
            Node walk = null;
            if(head == null) return "empty";
            walk = head;
            res += walk.toString();
            walk = walk.nextNode;
            while(walk != head){
                res += walk.toString();
                walk = walk.nextNode;
            }
            return res;
        }
    }
    
    public static List<Integer> parser (){
        Scanner scanner;
        List<Integer> raw = new ArrayList<>();
        try {
            scanner = new Scanner(new File("input"));
            while (scanner.hasNextLine()) {
                String line1 = scanner.nextLine();
                raw.add(Integer.parseInt(line1));
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return raw;
    }
    public static void main(String args[]){
        System.out.println("hello world!");
        List<Integer> raw = parser();
        System.out.println("raw:");
        System.out.println(raw);
        CircularList cl = new CircularList();
        for(Integer x : raw){
            cl.push(x);
        }
        System.out.println("circular list:");
        System.out.println(cl.toString());
        //System.out.println("try to find with id : ");
        //System.out.println(cl.find(4999));
        System.out.println("start moving####");
        for(int i=0; i<=raw.size()-1; i++){
            break;
        }
        cl.move(0);
        System.out.println("circular list:");
        System.out.println(cl.toString());
    }
}