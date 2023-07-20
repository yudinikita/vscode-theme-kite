using System;

/*
 * Person class
 */
[Serializable]
public class Person
{
    public string Name { get; set; }
    public int BirthDate { get; set; }
    public int DeathDate { get; set; }
    public List<string> Languages { get; set; }

    public Person(string name, int birthDate, int deathDate, List<string> languages)
    {
        Name = name;
        BirthDate = birthDate;
        DeathDate = deathDate;
        Languages = languages;
    }

    public int Age => CalcAge();

    private int CalcAge()
    {
        return DeathDate - BirthDate;
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        // Create instance of the Person class
        var person1 = new Person("John", 1870, 1930, new List<string> { "English", "Spanish" });

        if (person1.Age > 30)
        {
            foreach (var language in person1.Languages)
            {
                Console.WriteLine($"{person1.Name} speaks {language} language");
            }
        }
        else
        {
            Console.WriteLine($"{person1.Name} is younger than 30.");
        }

        var sum = AddNumbers(3, 7 + new Random().Next(1, 10));

        var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        var doubledNumbers = numbers.Select(number => number * 2).ToList();

        try
        {
            Console.WriteLine(NonExistentVariable);
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"Error: {ex.Message}");
        }
    }

    public static int AddNumbers(int num1, int num2)
    {
        return num1 + num2;
    }
}
