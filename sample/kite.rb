# Variables and basic operations
a = 10
b = 5
c = a + b
puts "The sum of #{a} and #{b} is #{c}"

# Conditionals
if c > 15
  puts "#{c} is greater than 15"
elsif c < 10
  puts "#{c} is less than 10"
else
  puts "#{c} is between 10 and 15"
end

# Loops
i = 0
while i < 5
  puts "Loop iteration: #{i}"
  i += 1
end

# Arrays and iterators
fruits = ['apple', 'banana', 'orange']
fruits.each do |fruit|
  puts "I love #{fruit}s"
end

# Functions
def multiply(x, y)
  return x * y
end

product = multiply(a, b)
puts "The product of #{a} and #{b} is #{product}"
