/*
 * Example of a Scala
 */
class Person(name: String, birthDate: Int, deathDate: Int, languages: Array[String]) {
  def age(): Int = {
    calcAge()
  }

  def calcAge(): Int = {
    this.deathDate - this.birthDate
  }
}

// Create new person
val person = new Person(name = "John", birthDate = 1920, deathDate = 1993, languages = Array("English", "Spanish"))
