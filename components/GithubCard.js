// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

function fetchGitHubUser(username) {
  return axios.get(`https://api.github.com/users/${username}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error fetching data for ${username}:`, error);
      return null;
    });
}

function createUserCard(user) {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = user.avatar_url;
  img.alt = `${user.login}'s avatar`;

  const cardInfo = document.createElement('div');
  cardInfo.className = 'card-info';

  const nameHeader = document.createElement('h3');
  nameHeader.textContent = user.name || user.login;
  nameHeader.className = 'name';

  const username = document.createElement('p');
  username.textContent = user.login;
  username.className = 'username';

  const location = document.createElement('p');
  location.textContent = `Location: ${user.location || 'Not specified'}`;

  const profile = document.createElement('p');
  profile.innerHTML = `Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a>`;

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${user.followers}`;

  const following = document.createElement('p');
  following.textContent = `Following: ${user.following}`;

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${user.bio || 'No bio available'}`;

  cardInfo.append(nameHeader, username, location, profile, followers, following, bio);
  card.append(img, cardInfo); 
  return card;
}
// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.
 function displayUser(username) {
  fetchGitHubUser(username)
    .then((user) => {
      if (user) {
        const card = createUserCard(user);
        document.querySelector('.cards').appendChild(card);
      }
    });
}

// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.

const followersArray = ["duraanali", "ilayka"];

function displayAllUsers() {
  followersArray.forEach(username => {
    displayUser(username);
  });
}

displayAllUsers();

// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
