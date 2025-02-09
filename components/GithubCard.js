// // 🛠️ STEP 1: Fetch GitHub Data
// // 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/maxamb99>`.
// // 2️⃣ Log the response data to inspect its structure.
// // 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// // 4️⃣ Pass the data into a function to create a user card.
// // 5️⃣ Append the created card to the `.cards` container in the DOM.

function fetchGitHubProfile() {
  return axios
    .get("https://api.github.com/users/maxamb99")
    .then((response) => {
      response.data;
      const userData = response.data;
      const userCard = createCard(userData);
      document.querySelector(".cards").append(userCard);

      fetchFollowers(userData.followers_url);
    })
    .catch((error) => console.error(error));
}

// 🛠️ STEP 2: Create a Function to Build the Card
// 1️⃣ Write a function that takes a **user object** as a parameter.
// 2️⃣ Use JavaScript DOM methods to create the following structure:

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

// 3️⃣ Return the created card element.
function createCard(user) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const cardImage = document.createElement("img");
  cardImage.src = user.avatar_url;
  cardImage.alt = user.name;
  cardDiv.appendChild(cardImage);

  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";
  cardDiv.append(cardInfo);

  const tittle = document.createElement("h3");
  tittle.className = "name";
  tittle.textContent = user.name;
  cardInfo.append(tittle);

  const userName = document.createElement("p");
  userName.className = "username";
  userName.textContent = `${user.login}`;
  cardInfo.append(userName);

  const location = document.createElement("p");
  location.textContent = user.location;
  cardInfo.append(location);

  const Profile = document.createElement("p");
  Profile.alt = user.Profile;
  cardInfo.append(Profile);

  const Followers = document.createElement("p");
  Followers.textContent = `followers : ${user.followers}`;
  cardInfo.append(Followers);

  const Following = document.createElement("p");
  Following.textContent = `following : ${user.following}`;
  cardInfo.append(Following);

  const Bio = document.createElement("p");
  Bio.textContent = ` ${user.bio}`;
  cardInfo.append(Bio);

  return cardDiv;
}

// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.
// const mainCardDive = document.querySelector(".cards")
// mainCardDive.append(createCard)

// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data.
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.

function fetchFollowers(followersUrl) {
  return axios
    .get(followersUrl)
    .then((response) => {
      const followersData = response.data;

      const cardsContainer = document.querySelector(".cards");

      followersData.forEach((follower) => {
        axios
          .get(follower.url)
          .then((followerResponse) => {
            const followerCard = createCard(followerResponse.data);
            cardsContainer.appendChild(followerCard);
          })
          .catch((error) => console.error(error));
      });
    })
    .catch((error) => console.error(error));
}

fetchGitHubProfile();

// // 🛠️ STRETCH: Add More GitHub Users
// // 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// // 2️⃣ Loop through the array and send a GET request for each username.
// // 3️⃣ Create a card for each user and append it to `.cards`.

// // 🌟 BONUS TIP:
// // 🎨 Style your cards using CSS to make them look polished!
// // 🤖 Try experimenting with different GitHub profiles!
