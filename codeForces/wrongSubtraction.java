// https://codeforces.com/problemset/problem/977/A

import java.util.Scanner;

public class Main {
  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);

    int value = sc.nextInt();
    int r = sc.nextInt();

    for (int i = 0; i < r; i++) {
      if (value % 10 != 0) {
        value -= 1;
      } else {
        value /= 10;
      }
    }

    System.out.println(value);
    sc.close();
  }
}