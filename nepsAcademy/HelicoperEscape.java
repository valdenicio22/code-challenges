package nepsAcademy;

import java.util.Scanner;

class Main {

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);

    int h = sc.nextInt();
    int p = sc.nextInt();
    int f = sc.nextInt();
    int d = sc.nextInt();
    int i = f;

    if (d > 0) {
      while (1 > 0) {
        if (i == h) {
          System.out.println('S');
          return;
        } else if (i == p) {
          System.out.println("N");
          return;
        }
        if (i == 0)
          i = 16;
        i--;
      }
    }
    if (d < 0) {
      while (1 > 0) {
        if (i == h) {
          System.out.println('S');
          return;
        } else if (i == p) {
          System.out.println("N");
          return;
        }
        if (i == 0)
          i = 16;
        i++;
      }
    }

    sc.close();
  }
}
