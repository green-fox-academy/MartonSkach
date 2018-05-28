using System.Collections.Generic;

namespace Pirates
{
    public class PirateCounter
    {
        class Pirate
        {
            public string Name;
            public bool HasWoodenLeg;
            public int Gold;

            public Pirate(string name, bool hasWoodenLeg, int gold)
            {
                Name = name;
                HasWoodenLeg = hasWoodenLeg;
                Gold = gold;
            }
        }

        public static void Main(string[] args)
        {
            var pirates = new List<Pirate>();

            // Given this list...

            pirates.Add(new Pirate("Olaf", false, 12));
            pirates.Add(new Pirate("Uwe", true, 9));
            pirates.Add(new Pirate("Jack", true, 16));
            pirates.Add(new Pirate("Morgan", false, 17));
            pirates.Add(new Pirate("Hook", true, 20));

            // Write a function that takes any list that contains pirates as in the example,
            // And returns a list of names containing the pirates that
            // - have wooden leg and
            // - have more than 15 gold
        }
    }
}
