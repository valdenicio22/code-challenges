// https://codeforces.com/contest/151/problem/A

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();
    int k = sc.nextInt();
    int l = sc.nextInt();
    int c = sc.nextInt();
    int d = sc.nextInt();
    int p = sc.nextInt();
    int nl = sc.nextInt();
    int np = sc.nextInt();

    int toasts = Math.min(Math.min(((k * l) / (n * nl)), (c * d) / n), (p / (n * np)));

    System.out.println(toasts);

    sc.close();
  }
}