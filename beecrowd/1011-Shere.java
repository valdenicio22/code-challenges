import java.util.Scanner;

public class Main {
	public static void main(String args[]){
		Scanner sc = new Scanner(System.in);

		double pi = 3.14159;
		double volume = sc.nextDouble();
		
		double calc = 4/3.0 * pi * Math.pow(volume, 3);
		
		System.out.printf("VOLUME = %.3f\n", calc);
	}
}