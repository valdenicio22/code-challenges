import java.util.Scanner;

public class Main {
  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int first = 0;
    int second = 1;

    System.out.print(first);
    for (int i = 0; i < n - 1; i++) {
      System.out.print(" " + second);
      int next = first + second;
      first = second;
      second = next;
    }
    System.out.println();
    sc.close();
  }
}