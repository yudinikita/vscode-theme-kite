/*
 * Example of a Kotlin
 */

class Person(
  val location: String,
  val birthDate: Int,
  val deathDate: Int,
  val languages: Array<String>
) {
  val age: Int
    get() = this.calcAge()

  fun calcAge() =
    this.deathDate - this.birthDate
}

fun main() {
    val greeting = "Hello, Kotlin!"

    println(greeting)

    val numbers = listOf(1, 2, 3, 4, 5)
    val sum = numbers.sum()

    val squaredNumbers = numbers.map { it * it }

    val filteredNumbers = numbers.filter { it % 2 == 0 }

    val result = calculate(5, 3)

    Person("John", 1920, 1993, arrayOf("English", "Spanish"))
}

fun calculate(a: Int, b: Int): Int = a + b
