/* ============================================================
   Week 7 — Random Joke Generator
   ------------------------------------------------------------
   Fetch a joke from a real API and show it on the page.
   Click the button to load a new one.
   ============================================================ */


// The API endpoint that returns a random joke
const JOKE_URL = "https://official-joke-api.appspot.com/random_joke";

// Grab the elements where the joke will go
const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
// const btnJoke= document.querySelector("#new-joke")

/* ------------------------------------------------------------
   Task 1 + Task 5: fetchJoke()

   1. Use fetch() + await to get the data from JOKE_URL
   2. Use await response.json() to turn it into a JS object
   3. Pass the joke to displayJoke()
   5. Wrap it all in try / catch — on error, console.error it
      and show "Couldn't load a joke" in setupEl
   ------------------------------------------------------------ */

async function fetchJoke(joke) {
  // Show a loading message while we wait for the data
  setupEl.textContent = "Loading...";
  punchlineEl.textContent = "";

  // ✍️ Solve it here ✍️
  try{
const responcejoke= await fetch(JOKE_URL);
const jokedata = await responcejoke.json();
 console.log(jokedata)
  displayJoke(jokedata)
  } catch (error){
  console.log (error);
  setupEl.textContent  ="couldn't load a joke"
}

  }



/* ------------------------------------------------------------
   Task 2: displayJoke(joke)

  
   Put the joke on the page, inside the displayJoke function:
   - set setupEl.textContent to joke.setup
   - set punchlineEl.textContent to joke.punchline
   
   ------------------------------------------------------------ */

function displayJoke(joke) {
  // ✍️ Solve it here ✍️
 setupEl.textContent = joke.setup;
  punchlineEl.textContent = joke.punchline
  
}
fetchJoke();

/* ------------------------------------------------------------
   Task 4: When #new-joke is clicked, load a new joke
   ------------------------------------------------------------ */

// ✍️ Solve it here ✍️

const button= document.querySelector("#new-joke")
button.addEventListener("click",(event)=>{
fetchJoke();

})


/* ------------------------------------------------------------
   Task 3: Load a joke when the page opens
   ------------------------------------------------------------ */

// ✍️ Solve it here ✍️

window= document.addEventListener("load",()=>{
   fetchJoke();
})
