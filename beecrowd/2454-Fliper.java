import java.util.Scanner;

public class Main {
  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);

    int num1 = sc.nextInt();
    int num2 = sc.nextInt();

    if (num1 == 0)
      System.out.println('C');
    else if (num2 == 0)
      System.out.println('B');
    else
      System.out.println('A');

    sc.close();
  }
}