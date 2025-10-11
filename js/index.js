// js/index.js
const cards = document.querySelector(".cards");

// A list of people (you can add more later)
const people = [
  {
    name: "Duraan Ali",
    login: "duraanali",
    avatar_url: "./assets/duran.jpg",
    location: "MN",
    html_url: "https://github.com/duraanali",
    followers: 25,
    following: 50,
    bio: "Frontend Developer & Teacher"
  },
  {
    name: "Mohamed Jisow",
    login: "Mjisow",
    avatar_url: "./assets/personal 1.jpg",
    location: "WA",
    html_url: "https://github.com/mjisow",
    followers: 10,
    following: 35,
    bio: "Web Developer"
  },
  {
    name: "Gabi School",
    login: "gabischool",
    avatar_url: "./assets/gabilogo.png",
    location: "MN",
    html_url: "https://github.com/gabischool",
    followers: 85,
    following: 10,
    bio: "School of Coding"
  }
];

// Build a card for each person
people.forEach(person => {
  const card = GithubCard(person);
  cards.appendChild(card);
});
