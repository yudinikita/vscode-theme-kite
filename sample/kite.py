# Variables and basic operations
x = 5
y = 10
z = x + y

if z > 15:
    print("Greater than 15")
else:
    print("Less than or equal to 15")

for i in range(5):
    if i % 2 == 0:
        continue
    print(i)

my_list = [x for x in range(1, 6) if x % 2 == 0]

def multiply(a, b):
    return a * b

result = multiply(3, 4)
print(result)

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

my_circle = Circle(5)
circle_area = my_circle.area()
print(circle_area)

with open("example.txt", "w") as file:
    file.write("Hello, World!")

with open("example.txt", "r") as file:
    content = file.read()
    print(content)
