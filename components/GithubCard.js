// 🛠️ STEP 1: Fetch Your GitHub Data
// 🔗 1. Use Axios to send a GET request to the GitHub API.
//     URL: `https://api.github.com/users/<your_name>` 
//     (Replace `<your_name>` with your GitHub username).
// 📡 2. When the data comes back, log it to the console to inspect its structure.
// 🗂️ 3. Look at the fields like `name`, `avatar_url`, `location`, `followers`, etc.
// 🛠️ 4. Pass the data into a function to create a user card.
// 📋 5. Append the created card to the `.cards` container in the DOM.

// ✍️ Write your solution for STEP 1 below:


// 🛠️ STEP 2: Create a Function to Build the Card
// 📦 1. Write a function that accepts one parameter: a **user object**.
// 🧱 2. Use JavaScript DOM methods to create the following structure:
//
//     <div class="card">
//       <img src={user's avatar_url} />
//       <div class="card-info">
//         <h3 class="name">{user's name}</h3>
//         <p class="username">{user's username}</p>
//         <p>Location: {user's location}</p>
//         <p>Profile:
//           <a href={user's GitHub URL}>{user's GitHub URL}</a>
//         </p>
//         <p>Followers: {user's followers}</p>
//         <p>Following: {user's following}</p>
//         <p>Bio: {user's bio}</p>
//       </div>
//     </div>
//
// 🖋️ 3. Return the DOM element (card) from the function so it can be used later.

// ✍️ Write your solution for STEP 2 below:
function createCard(user) {
 
}


// 🛠️ STEP 3: Add Your Card to the DOM
// 1️⃣ 1. After the function creates a card, call it with your GitHub data.
// 🧩 2. Use `document.querySelector('.cards')` to select the `.cards` container.
// ➕ 3. Append your created card to the `.cards` container.

// ✍️ Write your solution for STEP 3 below:



// Append your card to the container here!


// 🛠️ STEP 4: Fetch Follower Data
// 🔗 1. Use the `followers_url` property from your GitHub user data.
// 📡 2. Send a GET request to the `followers_url` to fetch follower information.
// 📋 3. Log the follower data to inspect its structure.
// ➕ 4. For each follower in the response:
//       - Pass their data into your card creation function.
//       - Append the created card to the `.cards` container.

// ✍️ Write your solution for STEP 4 below:


// 🛠️ ***STRETCH**: Add More GitHub Users
// 🌐 1. Create an array called `followersArray` with at least 5 GitHub usernames.
// 📡 2. Loop through the array, and for each username:
//       - Send a GET request to `https://api.github.com/users/<username>`.
// 🧩 3. Pass the returned data into your card creation function.
// ➕ 4. Append the created cards to the `.cards` container.

// ✍️ Write your solution for the STRETCH goal below:



// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS for a polished look!
// 🤖 Have fun experimenting with different GitHub user profiles!
