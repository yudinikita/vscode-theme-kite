void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  
  numbers.forEach((number) => print('Number: $number'));
  
  int sum = numbers.reduce((a, b) => a + b);
  print('Sum: $sum');
  
  String message = isEven(sum) ? 'Sum is even' : 'Sum is odd';
  print(message);
}

bool isEven(int number) => number % 2 == 0;
