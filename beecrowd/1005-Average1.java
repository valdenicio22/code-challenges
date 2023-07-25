import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    float gradeA = sc.nextFloat();
    float gradeB = sc.nextFloat();

    double output = ((gradeA * 3.5) + (gradeB * 7.5)) / 11;
    System.out.printf("Media = %.5f\n", output);

    sc.close();
  }
}

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    float gradeA = sc.nextFloat();
    float gradeB = sc.nextFloat();
    float gradeC = sc.nextFloat();

    double output = ((gradeA * 2) + (gradeB * 3) + (gradeB * 5)) / 10.0;
    System.out.printf("MEDIA = %.1f\n", output);

    sc.close();
  }
}