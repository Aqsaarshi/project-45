var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//question#2 personal message : store a person's name in a variable, and print a message to that person.
//your message should be simple , such as, "hello Eric",would you like to learn some python today?"
var Person_Name = "eric";
console.log("hello ".concat(Person_Name, ",would you like to learn python today?}"));
//question#3 Name cases : store a person's name in a variable,and then print that person's name in lower case, uppercase and titlecase.
var personName = "Aqsa Arshad";
//in lower case
console.log("lowercase:", personName.toLowerCase());
//in uppercase
console.log("uppercase:", personName.toUpperCase());
//in titlecase
console.log("title :", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//question #4
//Albert Einstein once said,"A person who never made a mistake never tried anything new";
var quote = " a peron who never made a mistake never tried anything new ";
var author = "Albert Eistein";
console.log("".concat(author, " once said,\"").concat(quote, "\""));
//question #5
//Famous Quote 2 : Reapeat Excercise 4, but this time store the famous person's name in a variable called famous person .
//Then compose your message and store it in a new variable called message . print your message .
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, "once said, \"").concat(quote, "\"");
console.log(message);
//question #6
//stripping names: Store a person name, and include some whitespace character at the
//beginning and end of the name . Make sure you use each character combination "\t" and \n" at least once . Print the name once so the whitespace arround the name is displayed .
//Then print the name after strippng the white spaces//.
var person_Name = "\t\n  Aqsa Arshad  \n\t";
console.log("Original :", person_Name);
console.log("Stripped :", personName.trim());
//question#7 ,8 Number eight addition, subtraction, and division operation that each result in the number 8. Be sure to enclose your operations nin print statement to seee the results
//like this console.log(5+3)
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//question # 9
var favouritenumber = 3;
console.log("My favourite number is ".concat(favouritenumber, ","));
//question #10 Adding comments: choose two of the program you where were written and atleast one comment to each . then write one sentense describing what the program does.
// Author [Arshad rasheed ]
//date [ Thursday , february28 , 2024]
var myName = "Arshad rasheed";
console.log("Hello ".concat(myName, ", would you like to learn some TypeScript today?"));
// task #9 : printing my favourite number
var favouritenumbers = 3;
// revealing my favourite number in a message formate.
console.log("My favouritenumber is ".concat(favouritenumber, ","));
//question #11
var names = ["Bisma", "Aqsa", "Hiba", "zareen"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// question# 12 Greetings: Start with the array you used in Excersice 11 but instead of just printing each person's name , print a message to them . the text of each message should be the same, but each message should be persnoalized with the person's name.
var Names = ["Bisma", "Aqsa", "Hiba", "zareen"];
var messages = "Do you like to play football?";
console.log(names[0] + " " + messages);
console.log(names[1] + " " + messages);
console.log(names[2] + " " + messages);
console.log(names[3] + " " + messages);
//question #13 your own array ; think of your fav mode of transportation, such as a motorcycle or a car , and make a list that stores several examples. use your list to print a series of statements about these items, such as "i would like to own a honda motorcycle".
var transpotation = ["Honda", "motorcycle", "Audi", "Honda City"];
transpotation.map(function (items) { return console.log("I would like to own a ".concat(items)); });
// question# 14 Guess list : Make a list that include atleast three people you'd like to invite to dinner . then use a list to print a message to each person, inviting them to dinner.
var guestArray = ["Bisma", "Aqsa", "Hiba", "zareen"];
guestArray.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner"));
});
//question #15 changing Guest list: you just heared that one your guest can't make the dinner , so you need to send out a new set of invitation . you'll have to think of someone else to invite.
var guestArr = ["Aqsa", "Sammad", "Bisma", "Ali"];
var canNot_Attend = " Aqsa";
console.log(canNot_Attend + " " + "can not attend the dinner.");
var new_Guest = "Laiba ";
guestArr[guestArr.indexOf(canNot_Attend)] = new_Guest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ",you are invited to the dinner,"));
});
//question #16 more guest : add three more guests to invite to dinner
var guestArrays = ["laiba", "Sammad", "Bisma", "Ali"];
var canNotAttend = "Ali";
var newGuest = "Sara";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ",I found a bigger table so i am invited more people."));
});
//part 2 start with your program from ex 15 Add a print statement to the end of your program informing people that you found a bigger dinner table
var guestBeg = "Muizz";
guestArr.unshift(guestBeg);
console.log(guestArr);
//part 3 Add one new guest to the middle
var middleGuest = "Fatima ";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
//part 4 use appendto add one new guest to the end of your list
guestArr.push("zeeshan");
console.log(guestArr);
//part 5
guestArr.map(function (items) {
    return console.log("Dear".concat(items, ", you are invited in the more people category on dinner"));
});
//Question # 17 Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log("Unfortunately, I can only invite two people for dinner.");
while (guestArrays.length > 2) {
    var removedGuest = guestArrays.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guestArrays.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guestArrays.splice(0, guestArrays.length);
console.log(guestArrays); // Shows an empty list
//Question 18: Seeing the World: Think of at least five places you’d like to visit.
var places = [
    "Australia",
    "South korea",
    "Japan",
    "London",
    "Norway",
];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
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
var guests = ["Zareen", "Aqsa", "Bisma", "Hiba"];
console.log("I am inviting ".concat(guests.length, " people to dinner."));
// Question 20  Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countries = [
    "New Zealand",
    "Japan",
    "Canada",
    "Saudia Arabia",
    "Turkey",
];
console.log("Countries I'd like to visit:", countries);
//Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var book = {
    title: "The Hobbit",
    author: "J.R.R Tolkein",
    publish: 1937,
};
console.log("book Info: ".concat(book.title, ", by ").concat(book.author, ", publish by ").concat(book.publish));
//Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
var friends = ["Sania", "alishba", "Imrana"];
console.log(friends[3]); // International error Arrays are zero-indexed, so index 3 is out of bounds
friends[2] = "Imrana"; // Correcting the error by accessing a valid index
//Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
var car = "Subaru";
console.log("Is car is == 'Subaru'? I predict True.");
console.log(car == "Subaru"); // True
console.log("Is car is == 'Toyota'? I predict False.");
console.log(car == "Toyota");
var bike = "Honda";
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
var fruits = ["apple", "banana", "guava"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple"));
// Testing whether the items is not in an array
console.log("Is 'cherry' in fruits? ");
console.log(fruits.includes("cherry"));
//Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
var alien_color = "green";
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
}
else {
    console.log("You just  earn 10 points ");
}
//Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
    console.log("you just earn 5 points when you shooting the alien");
}
else {
    console.log("You just  earn 10 points ");
}
//Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red
//Green alien version:
alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
//Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
//Red alien version:
alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
//Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
var age = 25;
if (age < 2) {
    console.log("This person is a baby.");
}
else if (age < 4) {
    console.log("This person is a toddler.");
}
else if (age < 13) {
    console.log("This person is a kid ");
}
else if (age < 20) {
    console.log("This person is a teenager");
}
else if (age < 65) {
    console.log("This person is a  adult ");
}
else {
    console.log("This person is elder");
}
//Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
var favourite_fruits = ["guava", "cherry", "mango"];
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
var usernames = ["Admin", "user1", "user2", "user3"];
usernames.forEach(function (usernames) {
    if (usernames === "Admin") {
        console.log("Hello Admin,would you like to see a status report");
    }
    else if (usernames === "user1" || "user2" || "user3") {
        console.log("Hello ".concat(usernames, ", thank you for logging in again "));
    }
});
//Question 31: No Users: Ensure your user list isn’t empty.
//let username: string[] = [" aqsa"]
//if (usernames.length === 0){
//  console.log("We need to find some users !.")
//}else {
// Greet users
//}
var username = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Greet users
}
// Removing all usernames ensures the message "We need to find some users!" is printed.
//Question 32: Checking Usernames: Ensure uniqueness in usernames.
var cuurent_users = ["Admin", "user1", "user2", "user3"];
var new_users = ["User1", "User2", "admin", "User10"];
new_users.forEach(function (new_users) {
    if (cuurent_users.some(function (cuurent_users) { return cuurent_users.toLowerCase() === new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " Will need to enter a new user name."));
    }
    else {
        console.log("".concat(new_users, " is available."));
    }
});
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (numbers) {
    var suffix = "th";
    if (numbers === 1) {
        suffix = "st";
    }
    else if (numbers === 2) {
        suffix = "nd";
    }
    else if (numbers === 3) {
        suffix = "rd";
    }
    console.log("".concat(numbers).concat(suffix));
});
// Question 34: Pizzas: Share your favorite pizzas and express your love for them.
var pizza = ["fajita", "Arabian", "peperoni"];
pizza.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza "));
});
console.log("I really like pizza!");
//Question 35: Animals: Highlight animals with a common trait.
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animals) {
    console.log("A ".concat(animals, " would make a great pet."));
});
console.log("All animals would make a great pet");
// Question 36: T-Shirt: Create a function for customizing t-shirts.
function shirt_make(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
shirt_make("medium", "Code is Life");
// Question 37: Large Shirts: Default values in make_shirt().
function make_tshirts(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it ."));
}
make_tshirts();
make_tshirts("medium");
make_tshirts("small", "Dive into codding");
// Question 38: Cities: Describing cities with a function.
function describe_citie(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_citie("karachi");
describe_citie("lahore");
describe_citie("tokyo", "japan");
// Question 39: City Names: Formatting city-country pairs.
function city_andcountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_andcountry("karachi", "pakistan"));
console.log(city_andcountry("Tokyo", "Japan"));
// Question 40: Album: Create objects for music albums.
function music_albums(artist, title, tracks) {
    // Create an instance of the Album type
    var albums = { artist: artist, title: title };
    if (tracks) {
        albums.tracks = tracks;
    }
    return albums;
}
// Example usage
console.log(music_albums("Artist one", "The First album"));
console.log(music_albums("Artist Two", "The second album"));
console.log(music_albums("Artist Three", "The third album", 12));
//Question 41: Magicians: Display magician names from an array.
var magician = ["Alice", "John", "David"];
function show_magicians(magician) {
    magician.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magician);
// Question 42: Great Magicians: Add "the Great" to magician names.
function add_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + "The Great";
    }
}
add_great(magician);
show_magicians(magician);
//Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" 
var magicians = ["Alice", "John", "David"];
function make_Great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("Great ".concat(magician));
    });
    return greatMagicians;
}
var greatMagicians = make_Great(magicians.slice()); // Use the corrected function name
console.log("Original magicians:");
console.log(magicians.join(", ")); // Display original names
console.log("Great magicians:");
console.log(greatMagicians.join(", ")); // Display modified names
//Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with ".concat(items.join(",")));
}
makeSandwich("beef", "cheese");
makeSandwich("turkey", "lettuse", "tomato");
makeSandwich("avacado", "sprout", "musturd", "mayo");
makeSandwich("chicken", "cheese", "lettuse");
//Question 45: Cars: Create detailed car objects with flexible properties.
function make_car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacture: manufacture, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "fiesta", ["color", "blue"], ["sunroof", "true"]));
