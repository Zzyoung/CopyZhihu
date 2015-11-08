package com.zhihu.utils;

public class Utils {
	public static boolean isEmpty(String str){
		return str == null || "".equals(str);
	}
	
	public static String filterBr(String input){
		return input.replaceAll("[\\r|\\n]", "<br>");
	}
}
