import java.util.Scanner;

public class Main {
	public static void main(String args[]){
		Scanner sc = new Scanner(System.in);
		
		String name = sc.nextLine();
		double salary = sc.nextDouble();
		double sales = sc.nextDouble();
		
		double total = ((sales*15)/100) + salary;
		
		System.out.printf("TOTAL = R$ %.2f\n", total);
	}
}