// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

const apiURL = "https://api.github.com/users/Abdikadir21";

function fetchApi() {

  return axios

    .get(apiURL)

    .then(response => response.data)

    .catch(error => {

      console.log("Error fetching user:", error);

      throw error;

    });
}

  

// 🛠️ STEP 2: Create a Function to Build the Card
// 1️⃣ Write a function that takes a **user object** as a parameter.
// 2️⃣ Use JavaScript DOM methods to create the following structure:
//
//     <div class="card">
//       <img src="{avatar_url}" />
//       <div class="card-info">
//         <h3 class="name">{name}</h3>
//         <p class="username">{login}</p>
//         <p>Location: {location}</p>
//         <p>Profile: <a href="{html_url}">{html_url}</a></p>
//         <p>Followers: {followers}</p>
//         <p>Following: {following}</p>
//         <p>Bio: {bio}</p>
//       </div>
//     </div>
//
// 3️⃣ Return the created card element.

function createUserCard(user) {

  const card = document.createElement("div");
  
  card.className = "card";

  const img = document.createElement("img");

  img.src = user.avatar_url;

  img.alt = user.login;

  const cardInfo = document.createElement("div");

  cardInfo.className = "card-info";

  const name = document.createElement("h3");

  name.className = "name";

  name.textContent = user.name || user.login;

  const username = document.createElement("p");

  username.className = "username";

  username.textContent = user.login;

  const location = document.createElement("p");

  location.textContent = `Location: ${user.location || "Not specified"}`;

  const profile = document.createElement("p");

  profile.innerHTML = `Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a>`;

  const followers = document.createElement("p");

  followers.textContent = `Followers: ${user.followers ?? 0}`;

  const following = document.createElement("p");

  following.textContent = `Following: ${user.following ?? 0}`;

  const bio = document.createElement("p");

  bio.textContent = `Bio: ${user.bio || "No bio"}`;

  cardInfo.append(
    name,
    username,
    location,
    profile,
    followers,
    following,
    bio
  );

  card.append(img, cardInfo);

  return card;
}



// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.

function displayGitHub() {

  const cardsContainer = document.querySelector(".cards");

  fetchApi()

    .then(userData => {

      const userCard = createUserCard(userData);

      cardsContainer.append(userCard);

      return axios.get(userData.followers_url);
    })


// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.

    .then(followersResponse => {

      followersResponse.data.forEach(follower => {

        const followerCard = createUserCard(follower);

        cardsContainer.append(followerCard);
      });
    })

    .catch(err => {

      console.log("Error in displayGitHub:", err);
    });
}


displayGitHub();
 



// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
