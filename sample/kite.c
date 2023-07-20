#include <stdio.h>

#define MAX(x, y) ((x) > (y) ? (x) : (y))

struct Person {
  char *location;
  int birthday;
  int deathdate;
  char *weaknesses[2];
};

int _calcAge(struct Person *v) { return v->deathdate - v->birthday; }

int get_age(struct Person *v) { return _calcAge(v); }

int main() {
    int a = 5;
    int b = 10;

    int sum = a + b;
    int difference = a - b;
    int maximum = MAX(a, b);

    printf("Sum: %d\n", sum);
    printf("Difference: %d\n", difference);
    printf("Maximum: %d\n", maximum);

    return 0;
}
