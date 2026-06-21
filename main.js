


// The API endpoint that returns a random joke
const JOKE_URL = "https://official-joke-api.appspot.com/random_joke";

// Grab the elements where the joke will go
const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");




 async function fetchJoke() {
  // Show a loading message while we wait for the data
  setupEl.textContent = "Loading...";
  punchlineEl.textContent = "";



   try {

      const res = await fetch("https://official-joke-api.appspot.com/random_joke")
      const data = await res.json();
      displayJoke(data)

   } catch (error) {

   console.error(error);
   setupEl.textContent = "Couldn't load a joke"

   }

}




function displayJoke(joke) {
   setupEl.textContent = joke.setup
   punchlineEl.textContent = joke.punchline


   
}




 const newJoke = document.getElementById("new-joke");

   newJoke.addEventListener("click", fetchJoke);

   fetchJoke();




