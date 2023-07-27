//https://codeforces.com/contest/791/problem/A

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int weight1 = sc.nextInt();
    int weight2 = sc.nextInt();
    int count = 0;

    while (weight1 <= weight2) {
      weight1 *= 3;
      weight2 *= 2;
      count++;
    }

    System.out.println(count);
    sc.close();
  }
}