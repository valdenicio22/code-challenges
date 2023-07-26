import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int w1 = sc.nextInt();
    int p1 = sc.nextInt();
    int w2 = sc.nextInt();
    int p2 = sc.nextInt();

    int l = w1 * p1;
    int r = w2 * p2;

    if (l == r)
      System.out.println("0");
    else if (r > l)
      System.out.println("1");
    else
      System.out.println("-1");

    sc.close();
  }
}