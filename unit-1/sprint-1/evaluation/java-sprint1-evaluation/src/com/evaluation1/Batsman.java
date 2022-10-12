package com.evaluation1;

public class Batsman {
	
	public static void runScored(int one, int two, int three, int four ,int six) {
		// write your logic here
		int sum = one*1+two*2+three*3+four*4+six*6;
		System.out.println(sum);
		}

	public static void main(String[] args) {
		//call runScored with valid parameters
		runScored(10,5,1,1,2);
	}

}
