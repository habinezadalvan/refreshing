

let numberOfDaysCoding = 10;

// let numberOfDaysCoding = 10;
let containerDiv = document.querySelector(".container");
let paragraph = document.createElement("p");
numberOfDaysCoding ++;
numberOfDaysCoding --;
// adding p element in DOM
paragraph.innerText=`number of days of coding: ${numberOfDaysCoding} days`;
containerDiv.appendChild(paragraph);

// multiplication

numberOfDaysCoding *= 2;
numberOfDaysCoding+=5;
numberOfDaysCoding /=5;

// Create an object

this.episode = {
    title: "The Story of Tau",
    duration: 45,
    hasBeenWatched: true,
  };


const keys = Object.keys(episode);
// console.log(keys);


keys.forEach(element => {
  console.log(element);
});

a = 29; 

this.me = "Leon";

console.log(this.episode);
console.log(episode.duration);

class Episode {
  constructor(title, duration, hasBeenWatched){
    this.title= title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode("The story of my life", 45, true);
let secondEpisode = new Episode("Coming home", 46, false );
let thirdEpisode = new Episode("In my name", 42, false);

let episodes = [];
episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);
episodes.pop();
let numberOfEpisodes = episodes.length;

let episodesSet = new Set(episodes);
episodesSet.add({name: "Saving the world", duration: 45, hasBeenWatched: false})
console.log("Set of array", episodes.includes({name: "Saving the world", duration: 45, hasBeenWatched: false}));
console.log("Set of episodes====", episodesSet);

// Use foreach on an array

episodes.forEach((episode) => {
  console.log(episode);
})

let me = "Leon";
let you = "Divine";
let meAndYou = "Lovine";

let couple = { 
  me,
  you,
  meAndYou,
}

me = "Habineza"; // This does not update "me" value in the object when it is created after the object has been created.

couple.me = "Leon Habineza"; // This does update the "me" VALUE in the object even when updated after the object has been created.
couple.you="Divine Abizeyimana";

console.log(couple);

// Primitive types like "numbers, boolean, and string" are passes by value; whereas Arrays and Objects are passed by REFERENCE.

let myfamily = couple;
myfamily.me = "Leon Christian Habineza";

console.log(" ======", myfamily); // weird, when I update new object, the old one gets modified as well.

const movie = {
  name: "Blacklist",
  serie: "yes",
  watched: false
}

let newMovie = JSON.parse(JSON.stringify(movie));

newMovie.watched = true;
console.log(movie);
console.log(newMovie);
console.log(JSON.stringify(movie));
