
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    float gradeA = sc.nextFloat();
    float gradeB = sc.nextFloat();
    float gradeC = sc.nextFloat();

    double output = ((gradeA * 2.0) + (gradeB * 3.0) + (gradeC * 5.0)) / 10.0;
    System.out.printf("MEDIA = %.1f\n", output);

    sc.close();
  }
}