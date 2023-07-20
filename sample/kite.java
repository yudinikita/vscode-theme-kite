class JavaCode {
  public static void main(String[] args) {
    // Variable declaration and initialization
    int number = 10;

    // Conditional statement
    if (number > 0) {
      System.out.println("Number is positive.");
    } else {
      System.out.println("Number is non-positive.");
    }

    for (int i = 1; i <= 5; i++) {
      System.out.print(i + " ");
    }
    System.out.println();

    String[] fruits = { "Apple", "Banana", "Orange" };

    for (String fruit : fruits) {
      System.out.println(fruit);
    }

    String reversed = reverseString("Hello");
    System.out.println("Reversed string: " + reversed);
  }

  public static String reverseString(String str) {
    StringBuilder sb = new StringBuilder(str);
    return sb.reverse().toString();
  }
}
