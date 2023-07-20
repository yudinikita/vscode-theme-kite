// Once upon a time...

#[derive(Debug)]
pub struct Person {
  name: String,
  birth_date: u16,
  death_date: u16,
  languages: Vec<String>,
}
 
impl Person {
  pub fn new(
    name: String,
    birth_date: u16,
    death_date: u16,
    languages: Vec<String>,
  ) -> Self {
    Person {
      name,
      birth_date,
      death_date,
      languages,
    }
  }
 
  pub fn age(&self) -> u16 {
   self.calc_age()
  }
 
  fn calc_age(&self) -> u16 {
   self.death_date - self.birth_date
  }
}

fn main() {
  let person1 = Person::new(
    "John".to_string(),
   1920,
   1993,
   vec!["English".to_string(), "Spanish".to_string()],
 );
 
  println!("{:?}", person1);
}
 