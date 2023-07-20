/*
* Person class
*/
class Person {
  var name: String
  var birthDate: Int
  var deathDate: Int
  var languages: [String]
  
  init(name: String, birthDate: Int, deathDate: Int, languages: [String]) {
    self.name = name
    self.birthDate = birthDate
    self.deathDate = deathDate
    self.languages = languages
  }
  
  var age: Int {
    self.calcAge()
  }
  
  func calcAge() -> Int {
    self.deathDate - self.birthDate
  }
}

// Create instance of the Person class
let person1 = Person(name: "John", birthDate: 1920, deathDate: 1993, languages: ["Romanian", "German"])