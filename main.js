//Question 1//

let characters = ["Harry", "Hermione", "Ron", "Draco", "Luna"];

for (let i = 0; i < characters.length; i++) 
    {
    console.log(characters [i]);
}

//Question 2//

let firstName = "Harry";
let house = "Gryffindor";

console.log(`Welcome, ${firstName} of ${house}!`);

//Question 3//

let characterName = "Hermione";
console.log(characterName.toLowerCase());
console.log(characterName.toUpperCase());

//Question 4//
 let spell = "Expelliarmus";
let trimSpell = spell.trim();
console.log(trimSpell);

//Question 5//
 let  quote = "I solemnly swear that I am up to no good";
 let word = quote.slice(11, 17);
console.log(word);

//Question 6//
let first_Name = 'Ron';
let lastName = 'Weasley';

let fullName = first_Name.concat(' ', lastName);
console.log(fullName);

//Question 7//

let sentence = "Draco is a good wizard"
console.log(sentence.replace("good", "bad"))

//Question 8//
let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw"];

 {
    houses.push ("Slytherin");
    console.log(houses);
    houses.pop ();
    console.log (houses)
}

//Question 9//
let spells = ['Alohomora', 'Lumos', 'Nox'];

spells.unshift("Accio")
console.log (spells)
spells.shift ()
console.log (spells)

//Question 10//
let professors = ["Dumbledore", "McGonagall", "Snape", "Hagrid"]
let a = professors.slice (1,2)
let b = professors.slice (2, 3)

console.log (a.concat(b))


//Question 11//
let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];

let c = students.slice (0,1)
let d = students.slice(1, 2)

console.log (c.concat(d))

//Question 12//

let phrase = 'Mischief Managed';
console.log(phrase.trim);
console.log(phrase.toLowerCase()); 
console.log(phrase.concat("-Harry"))

//Question 13//
let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push("Luna")
console.log (wizards.concat ("Draco"))

//Question 14//
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardy'

let f = message.slice(11, 19);
console.log(f)
console.log(f.concat(" ", "Castle"))