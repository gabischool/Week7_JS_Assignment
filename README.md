# Week 7 — Random Joke Generator 😄

You're going to fetch a joke from a real API and show it on the page. Click a button — get a new joke. That's it. Small project, big concepts.

This is the foundation of every modern web app: **fetch data → show it on the page**.

## Setup

1. **Fork** this repo to your account.
2. Clone it locally and open in your editor.
3. Open `index.html` in the browser.
4. Edit `main.js`. Refresh the page to see changes.

## The API

We're using a free, no-signup-required jokes API:

```
https://official-joke-api.appspot.com/random_joke
```

Open it in your browser — you'll see a JSON response like:

```json
{
  "type": "general",
  "setup": "Why don't scientists trust atoms?",
  "punchline": "Because they make up everything!",
  "id": 32
}
```

Your job is to fetch that data and show `setup` + `punchline` on the page.

## Tasks

### Task 1 — Fetch a Joke 🎯

Write an `async function getJoke()` that:
1. Uses `fetch()` to hit the URL above
2. Calls `.json()` on the response to get the data
3. Returns the joke object

> 💡 Use `async`/`await` (not `.then()` chains).

---

### Task 2 — Show the Joke on the Page 📺

Inside `getJoke()`, after you get the data:
1. Find `#setup` and `#punchline` with `document.querySelector`
2. Set their `textContent` to the joke's `setup` and `punchline`

Refresh the page — a joke should appear.

---

### Task 3 — Call the Function on Page Load 🚀

At the bottom of your file, just call `getJoke()`. The page should now show a joke as soon as it loads.

---

### Task 4 — "New Joke" Button 🔄

The page has a button: `<button id="new-joke">New Joke</button>`.

Add an event listener so clicking it fetches a new joke. Each click should replace the joke on screen.

> 💡 You already wrote `getJoke()` — just call it again inside the click handler!

---

### Task 5 — Handle Errors 🛡️

Wrap your `fetch` code in a `try / catch`. If the API ever fails, log the error and show "Couldn't load a joke" on the page instead of breaking.

```js
try {
  // fetch + display
} catch (error) {
  console.error(error);
  // show error message in the UI
}
```

---

## ✅ When you're done

- A joke shows when the page loads
- Clicking "New Joke" gets a different joke each time
- If you turn off your wifi and click the button, the page shows an error message instead of breaking

## Submitting

```bash
git add .
git commit -m "Complete Week 7 random joke generator"
git push
```

Submit your repo link.

## 🚀 Stretch (optional)

- Show a "Loading..." message while waiting for the joke
- Disable the button while a joke is loading
- Try a different API:
  - 🐶 Dog photos: `https://dog.ceo/api/breeds/image/random`
  - 🐱 Cat facts: `https://catfact.ninja/fact`
  - 🎓 Pokémon: `https://pokeapi.co/api/v2/pokemon/pikachu`
