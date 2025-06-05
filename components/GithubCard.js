// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

function fetchApi(username) {
  const API_URL = `https://api.github.com/users/${username}`;
  return axios
    .get(API_URL)
    .then((response) => {
      const userData = response.data;
      const card = createCard(userData);
      document.querySelector(".cards").append(card);
      return userData;
    })
    .catch((error) => {
      console.error("User not found or error fetching user:", error);
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
//////////////////// before i modified it /////////////////////////////////

// const createCard = function (user) {
//   const mainCardDiv = document.createElement("div");
//   mainCardDiv.className = "card";
//   const profileImg = document.createElement("img");
//   profileImg.src = `${user.avatar_url}`;
//   const cardInfo = document.createElement("div");
//   cardInfo.className = "card-info";
//   const name = document.createElement("h3");
//   name.className = "name";
//   name.textContent = `${user.name}`;
//   const userName = document.createElement("p");
//   userName.className = "username";
//   userName.textContent = `${user.login}`;
//   const location = document.createElement("p");
//   location.textContent = `location: ${user.location}`;
//   const profile = document.createElement("p");
//   profile.innerHTML = `Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a>`;

//   const followers = document.createElement("p");
//   followers.textContent = `followers: ${user.followers}`;
//   const following = document.createElement("p");
//   following.textContent = `following: ${user.following}`;
//   const bio = document.createElement("p");
//   bio.textContent = `Bio: ${user.bio}`;

//   mainCardDiv.append(profileImg, cardInfo);
//   cardInfo.append(name, userName, location, profile, followers, following, bio);

//   return mainCardDiv;
// };

//////////////////// After i modified it /////////////////////////////////
const createCard = function (user) {
  const mainCardDiv = document.createElement("div");
  mainCardDiv.className = "card";
  const profileImg = document.createElement("img");
  profileImg.src = `${user.avatar_url}`;
  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";
  const name = document.createElement("h3");
  name.className = "name";
  name.textContent = `${user.name}`;
  const userName = document.createElement("p");
  userName.className = "username";
  userName.textContent = `${user.login}`;

  const location = document.createElement("p");
  location.className = "location";
  location.textContent = `📍location: ${user.location}`;
  const profile = document.createElement("p");
  profile.className = "profile";
  profile.innerHTML = `Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a>`;
  const followersDiv = document.createElement("div");
  followersDiv.className = "followers-div";
  const followers = document.createElement("p");
  followers.className = "followers";
  followers.textContent = `followers: ${user.followers}`;
  const following = document.createElement("p");
  following.className = "following";
  following.textContent = `following: ${user.following}`;
  const bio = document.createElement("p");
  bio.className = "bio";
  bio.textContent = `Bio: ${user.bio}`;

  mainCardDiv.append(profileImg, cardInfo);
  cardInfo.append(name, userName, bio, location, followersDiv, profile);
  followersDiv.append(followers, following);

  return mainCardDiv;
};

// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.

// fetchApi("jamaal-abdirahem"); //i declared all of the step 3 in the step 1

// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or
//Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.
const fetchFollowers = function (username) {
  fetchApi(username).then((userData) => {
    const followersUrl = userData.followers_url;
    console.log(followersUrl);
    axios.get(followersUrl).then((response) => {
      response.data.forEach((follower) => {
        fetchApi(follower.login);
      });
    });
  });
};
fetchFollowers("jamaal-abdirahem");

// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.
const followersArray = [
  "duraanali",
  "jamaal-abdirahem",
  "nafiisa7",
  "mohameddacar",
  "ghazali-sufi",
];

followersArray.forEach((username) => fetchApi(username));

// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!

/////////// make it done ✅✅✅ ///////////////
