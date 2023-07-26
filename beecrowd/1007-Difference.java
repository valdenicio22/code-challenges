
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int numA = sc.nextInt();
    int numB = sc.nextInt();
    int numC = sc.nextInt();
    int numD = sc.nextInt();

    int output = (numA * numB) - (numC * numD);
    System.out.println("DIFERENCA = " + output);

    sc.close();
  }
}