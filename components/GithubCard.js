// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

function fetchGithubData() {
  return axios
    .get("https://api.github.com/users/zacimka")
    .then((response) => {
      console.log("response", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("error", error);
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

function createCard(userdata) {
  console.log("userdata");

  const card = document.createElement("div");
  card.className = "card";

  const avatar = document.createElement("img");
  avatar.src = userdata.avatar_url;
  card.appendChild(avatar);

  const cardInfo = document.createElement("div");
  cardInfo.className = "cardInfo";
  card.appendChild(cardInfo);

  const name = document.createElement("h3");
  name.className = "name";
  name.textContent = userdata.name;
  cardInfo.appendChild(name);

  const username = document.createElement("p");
  username.className = "username";
  username.textContent = userdata.login;
  cardInfo.appendChild(username);

  const location = document.createElement("p");
  location.textContent = "location: " + userdata.location;
  cardInfo.appendChild(location);

  const profile = document.createElement("p");
  profile.innerHTML = `profile: <a href="${userdata.html_url}" target="_blank">${userdata.html_url}</a>`;
  cardInfo.appendChild(profile);

  const Followers = document.createElement("p");
  Followers.textContent = "Followers: " + userdata.followers;
  cardInfo.appendChild(Followers);

  const Following = document.createElement("p");
  Following.textContent = "Following: " + userdata.following;
  cardInfo.appendChild(Following);

  const bio = document.createElement("p");
  bio.textContent = "bio: " + userdata.bio;
  cardInfo.appendChild(bio);

  return card;
}

// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.

// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or
//Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.

function fetchFollowersData() {
  return axios
    .get("https://api.github.com/users/zacimka/followers")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error", error);
    });
}

function displayNewUser() {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";
  fetchGithubData().then((currentUser) =>
    cardsContainer.append(createCard(currentUser))
  );
  fetchFollowersData().then((following) => {
    following.map((user) => {
      cardsContainer.append(createCard(user));
    });
  });
}

const button = document.createElement("button");
button.addEventListener("click", displayNewUser);

displayNewUser();

// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.

// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
