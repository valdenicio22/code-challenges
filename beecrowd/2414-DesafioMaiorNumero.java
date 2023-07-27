import java.util.Scanner;

public class Main {
  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    int biggest = -1;
    int num;

    do {
      num = sc.nextInt();
      if (num > biggest) {
        biggest = num;
      }
    } while (num != 0);

    System.out.println(biggest);

    sc.close();
  }
}