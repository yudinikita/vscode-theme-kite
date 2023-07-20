#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1)
        return 1;
    else
        return n * factorial(n - 1);
}

// Main function
int main() {
    int num;

    cout << "Enter a number: ";
    cin >> num;

    if (num >= 0) {
        for (int i = 0; i <= num; i++) {
            cout << i << "! = " << factorial(i) << endl;
        }
    } else {
        cout << "Invalid input. Please enter a non-negative number." << endl;
    }

    return 0;
}
