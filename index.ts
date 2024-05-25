//question#2 personal message : store a person's name in a variable, and print a message to that person.
//your message should be simple , such as, "hello Eric",would you like to learn some python today?"
let Person_Name: string = "eric";
console.log(`hello ${Person_Name},would you like to learn python today?}`);

//question#3 Name cases : store a person's name in a variable,and then print that person's name in lower case, uppercase and titlecase.
let personName: string = "Aqsa Arshad";
//in lower case
console.log("lowercase:", personName.toLowerCase());
//in uppercase
console.log("uppercase:", personName.toUpperCase());
//in titlecase
console.log(
  "title :",
  personName.replace(/\b\w/g, (c) => c.toUpperCase())
);

//question #4
//Albert Einstein once said,"A person who never made a mistake never tried anything new";

let quote: string =
  " a peron who never made a mistake never tried anything new ";
let author: string = "Albert Eistein";

console.log(`${author} once said,"${quote}"`);
//question #5
//Famous Quote 2 : Reapeat Excercise 4, but this time store the famous person's name in a variable called famous person .
//Then compose your message and store it in a new variable called message . print your message .
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person}once said, "${quote}"`;
console.log(message);
//question #6
//stripping names: Store a person name, and include some whitespace character at the
//beginning and end of the name . Make sure you use each character combination "\t" and \n" at least once . Print the name once so the whitespace arround the name is displayed .
//Then print the name after strippng the white spaces//.
let person_Name: string = "\t\n  Aqsa Arshad  \n\t";
console.log("Original :", person_Name);
console.log("Stripped :", personName.trim());
//question#7 ,8 Number eight addition, subtraction, and division operation that each result in the number 8. Be sure to enclose your operations nin print statement to seee the results
//like this console.log(5+3)
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

//question # 9
let favouritenumber: number = 3;
console.log(`My favourite number is ${favouritenumber},`);

//question #10 Adding comments: choose two of the program you where were written and atleast one comment to each . then write one sentense describing what the program does.
// Author [Arshad rasheed ]
//date [ Thursday , february28 , 2024]
let myName: string = "Arshad rasheed";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);

// task #9 : printing my favourite number
let favouritenumbers: number = 3;
// revealing my favourite number in a message formate.
console.log(`My favouritenumber is ${favouritenumber},`);

//question #11
let names: string[] = ["Bisma", "Aqsa", "Hiba", "zareen"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// question# 12 Greetings: Start with the array you used in Excersice 11 but instead of just printing each person's name , print a message to them . the text of each message should be the same, but each message should be persnoalized with the person's name.

let Names: string[] = ["Bisma", "Aqsa", "Hiba", "zareen"];
let messages: string = "Do you like to play football?";
console.log(names[0] + " " + messages);
console.log(names[1] + " " + messages);
console.log(names[2] + " " + messages);
console.log(names[3] + " " + messages);

//question #13 your own array ; think of your fav mode of transportation, such as a motorcycle or a car , and make a list that stores several examples. use your list to print a series of statements about these items, such as "i would like to own a honda motorcycle".
let transpotation: string[] = ["Honda", "motorcycle", "Audi", "Honda City"];
transpotation.map((items) => console.log(`I would like to own a ${items}`));
// question# 14 Guess list : Make a list that include atleast three people you'd like to invite to dinner . then use a list to print a message to each person, inviting them to dinner.
let guestArray: string[] = ["Bisma", "Aqsa", "Hiba", "zareen"];

guestArray.map((items) =>
  console.log(`Dear ${items}, you are invited to the dinner`)
);

//question #15 changing Guest list: you just heared that one your guest can't make the dinner , so you need to send out a new set of invitation . you'll have to think of someone else to invite.
let guestArr: string[] = ["Aqsa", "Sammad", "Bisma", "Ali"];
let canNot_Attend: string = " Aqsa";
console.log(canNot_Attend + " " + "can not attend the dinner.");

let new_Guest: string = "Laiba ";
guestArr[guestArr.indexOf(canNot_Attend)] = new_Guest;
console.log(guestArr);

guestArr.map((items) =>
  console.log(`Dear ${items},you are invited to the dinner,`)
);

//question #16 more guest : add three more guests to invite to dinner
let guestArrays: string[] = ["laiba", "Sammad", "Bisma", "Ali"];
let canNotAttend: string = "Ali";
let newGuest: string = "Sara";

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);

guestArr.map((items) =>
  console.log(
    `Dear ${items},I found a bigger table so i am invited more people.`
  )
);

//part 2 start with your program from ex 15 Add a print statement to the end of your program informing people that you found a bigger dinner table

let guestBeg: string = "Muizz";
guestArr.unshift(guestBeg);
console.log(guestArr);

//part 3 Add one new guest to the middle
let middleGuest: string = "Fatima ";
let middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);

//part 4 use appendto add one new guest to the end of your list
guestArr.push("zeeshan");
console.log(guestArr);
//part 5
guestArr.map((items) =>
  console.log(
    `Dear${items}, you are invited in the more people category on dinner`
  )
);

//Question # 17 Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

console.log("Unfortunately, I can only invite two people for dinner.");

while (guestArrays.length > 2) {
  let removedGuest = guestArrays.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guestArrays.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guestArrays.splice(0, guestArrays.length);
console.log(guestArrays); // Shows an empty list

//Question 18: Seeing the World: Think of at least five places you’d like to visit.
let places: string[] = [
  "Australia",
  "South korea",
  "Japan",
  "London",
  "Norway",
];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reverse order :", places);
places.reverse();
console.log("Original order :", places);
places.sort();
console.log("Alphabetical :", places);
places.reverse();
console.log("Reverse Alphabetical order:", places);

//Question 16 17 18  Push your code to github

// Question 19 Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
let guests: string[] = ["Zareen", "Aqsa", "Bisma", "Hiba"];
console.log(`I am inviting ${guests.length} people to dinner.`);

// Question 20  Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries: string[] = [
  "New Zealand",
  "Japan",
  "Canada",
  "Saudia Arabia",
  "Turkey",
];
console.log("Countries I'd like to visit:", countries);

//Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let book: { title: string; author: string; publish: number } = {
  title: "The Hobbit",
  author: "J.R.R Tolkein",
  publish: 1937,
};
console.log(
  `book Info: ${book.title}, by ${book.author}, publish by ${book.publish}`
);

//Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
let friends: string[] = ["Sania", "alishba", "Imrana"];
console.log(friends[3]); // International error Arrays are zero-indexed, so index 3 is out of bounds
friends[2] = "Imrana"; // Correcting the error by accessing a valid index

//Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
let car = "Subaru";
console.log("Is car is == 'Subaru'? I predict True.");
console.log(car == "Subaru"); // True

console.log("Is car is == 'Toyota'? I predict False.");
console.log(car == "Toyota");

let bike = "Honda";
console.log("Is bike == 'Honda'? I predict True.");
console.log(bike == "Honda"); //True

console.log("Is bike == 'Raven'? I predict False .");
console.log(bike == "Raven"); // False

//Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
//equality string
console.log("Testing equality with string");
console.log("apple" == "apple"); //True
console.log("apple" == "apple"); // false //Error ki wajha sy apple chota likha ha capital likhny sy error ay ga
// using the lower case function
console.log("Testing the lower case function");
console.log("Apple".toLowerCase() == "apple"); //true
// Numerical test
console.log("Numerical Test");
console.log(10 > 5); //True
console.log(2 < 1); //false
//Testing "and" "or" operators
console.log("Tests 'and' and 'or'");
console.log(true && false); // false
//console.log(true false); // True
// Test whether an item is in a array
let fruits = ["apple", "banana", "guava"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple"));
// Testing whether the items is not in an array
console.log("Is 'cherry' in fruits? ");
console.log(fruits.includes("cherry"));

//Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
let alien_color = "green";
if (alien_color == "green") {
  console.log("you just earn 5 points");
}
alien_color = "red";
if (alien_color == "green") {
  // no output because the condition is false
}
//Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
alien_color = "green";
if (alien_color == "green") {
  console.log("you just earn 5 points when you shooting the alien");
} else {
  console.log("You just  earn 10 points ");
}
//Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("you just earn 5 points when you shooting the alien");
} else {
  console.log("You just  earn 10 points ");
}

//Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red
//Green alien version:
alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}
//Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}
//Red alien version:
alien_color = "red";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

//Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
let age: number = 25;
if (age < 2) {
  console.log("This person is a baby.");
} else if (age < 4) {
  console.log("This person is a toddler.");
} else if (age < 13) {
  console.log("This person is a kid ");
} else if (age < 20) {
  console.log("This person is a teenager");
} else if (age < 65) {
  console.log("This person is a  adult ");
} else {
  console.log("This person is elder");
}

//Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
let favourite_fruits: string[] = ["guava", "cherry", "mango"];
if (favourite_fruits.includes("guava")) {
  console.log("you really like guava! ");
}
if (favourite_fruits.includes("cherry")) {
  console.log("you really like cherry");
}
if (favourite_fruits.includes("mango")) {
  console.log("you really like mango!");
}
//Question 30: Hello Admin: Greet users differently, especially 'admin'.
let usernames: string[] = ["Admin", "user1", "user2", "user3"];
usernames.forEach((usernames) => {
  if (usernames === "Admin") {
    console.log(`Hello Admin,would you like to see a status report`);
  } else if (usernames === "user1" || "user2" || "user3") {
    console.log(`Hello ${usernames}, thank you for logging in again `);
  }
});
//Question 31: No Users: Ensure your user list isn’t empty.
//let username: string[] = [" aqsa"]
//if (usernames.length === 0){
//  console.log("We need to find some users !.")
//}else {
// Greet users
//}
let username: string[] = [];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  // Greet users
}
// Removing all usernames ensures the message "We need to find some users!" is printed.

//Question 32: Checking Usernames: Ensure uniqueness in usernames.

let cuurent_users: string[] = ["Admin", "user1", "user2", "user3"];
let new_users: string[] = ["User1", "User2", "admin", "User10"];
new_users.forEach((new_users) => {
  if (
    cuurent_users.some(
      (cuurent_users) => cuurent_users.toLowerCase() === new_users.toLowerCase()
    )
  ) {
    console.log(`${new_users} Will need to enter a new user name.`);
  } else {
    console.log(`${new_users} is available.`);
  }
});
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((numbers) => {
  let suffix = "th";
  if (numbers === 1) {
    suffix = "st";
  } else if (numbers === 2) {
    suffix = "nd";
  } else if (numbers === 3) {
    suffix = "rd";
  }
  console.log(`${numbers}${suffix}`);
});

// Question 34: Pizzas: Share your favorite pizzas and express your love for them.

let pizza: string[] = ["fajita", "Arabian", "peperoni"];
pizza.forEach((pizza) => {
  console.log(`I like ${pizza} pizza `);
});
console.log("I really like pizza!");

//Question 35: Animals: Highlight animals with a common trait.
let animals: string[] = ["dog", "cat", "rabbit"];
animals.forEach((animals) => {
  console.log(`A ${animals} would make a great pet.`);
});
console.log("All animals would make a great pet");

// Question 36: T-Shirt: Create a function for customizing t-shirts.
function make_shirt(size: string, message: string) {
  console.log(
    `Making a ${size} t-shirt with the message "${message}" printed on it.`
  );
}

make_shirt("medium", "Code is Life");

// Question 37: Large Shirts: Default values in make_shirt().
function make_shirts(
  size: string = "large",
  message: string = "I love typescript"
) {
  console.log(
    `Making a ${size} t-shirt with the message "${message}" printed on it .`
  );
}
make_shirts();
make_shirts("medium");
make_shirts("small", "Dive into codding");

// Question 38: Cities: Describing cities with a function.
function describe_cities(city: string, country: string = "pakistan") {
  console.log(`${city} is in ${country}`);
}
describe_cities("karachi");
describe_cities("lahore");
describe_cities("tokyo", "japan");

// Question 39: City Names: Formatting city-country pairs.
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

console.log(city_country("karachi", "pakistan"));
console.log(city_country("Tokyo", "Japan"));

// Question 40: Album: Create objects for music albums.
function music_album(artist: string, title: string, tracks?: number) {
  let albums = { artist, title };
  if (tracks) {
    albums["tracks"] = tracks;
  }
  return albums;
}
console.log(music_album("Artist one ", "The First album"));
console.log(music_album("Artist Two ", "The second album"));
console.log(music_album("Artist Three", "The third album", 12));

//Question 41: Magicians: Display magician names from an array.
let magician: string[] = ["Alice", "John", "David"];
function show_Magicians(magician: string[]) {
  magician.forEach((magician) => {
    console.log(magician);
  });
}

show_Magicians(magician);

// Question 42: Great Magicians: Add "the Great" to magician names.
function make_great(magician: string[]) {
  for (let i = 0; i < magician.length; i++) {
    magician[i] = magician[i] + "The Great";
  }
}
make_great(magician);
show_Magicians(magician);

//Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let magicians: string[] = ["Alice", "John", "David"];

function great_make(magicians: string[]): string[] {
  let greatMagicians = [];
  magicians.forEach((magicians) => {
    greatMagicians.push(`${magicians}`);
  });
  return greatMagicians;
}

let greatMagicians = great_make(magicians.slice()); // Corrected function name
console.log("Original magicians:");
console.log(magicians.join(", ")); // Display original names
console.log("Great magicians:");
console.log(greatMagicians.join(", ")); // Display modified names


//Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function make_sandwich(...items: string[]) {
  console.log(`Making a sandwich with ${items.join(",")}`);
}
make_sandwich("beef", "cheese");
make_sandwich("turkey", "lettuse", "tomato");
make_sandwich("avacado", "sprout", "musturd", "mayo");
make_sandwich("chicken", "cheese", "lettuse");

//Question 45: Cars: Create detailed car objects with flexible properties.
function make_car(manufacture: string, model: string, ...options: [string, any][]): Object {
  let car = { manufacture, model };
  options.forEach(([key, value]) => car[key] = value);
  return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "fiesta", ["color", "blue"], ["sunroof", "true"]));