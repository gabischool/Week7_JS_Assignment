// 🛠️ STEP 1: Fetch GitHub Data
/*
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/<your_name>`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.
*/

// ✍️ Solve it here ✍️
// 🛠 STEP 1: Fetch GitHub Data using Axios
async function fetchUser() {
  try {
    const response = await axios.get('https://api.github.com/users/Abdulrahman-Midraara'); // Use Axios to send a GET request
    createUserCard(response.data); // Pass the data into a function to create a user card.
  } catch (error) {
    console.error('Error fetching user data:', error); // Log any errors that occur
    // Optionally, check for error response
    if (error.response) {
      console.error('Response error:', error.response);
    }
  }
}

fetchUser();

// 🛠️ STEP 2: Create a Function to Build the Card
// 🛠️ STEP 3: Add the Card to the DOM
/*
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

// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.
*/

// ✍️ Solve it here ✍️
// 🛠 STEP 2: Create the Function to Build the Card
function createUserCard(userData) {
  const card = document.createElement('div');
  card.classList.add('card');

  // Create and append elements for user data
  const img = document.createElement('img');
  img.src = userData?.avatar_url || 'default-avatar.png';
  img.alt = userData?.name?.title || 'User avatar';
  card.appendChild(img);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  
  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = userData?.name;
  cardInfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = `${userData?.login}`;
  cardInfo.appendChild(username);

  const userLocation = document.createElement('p');
  userLocation.textContent = `Location: ${userData?.location || 'N/A'}`;
  cardInfo.appendChild(userLocation);

  const profileLink = document.createElement('p');
  const link = document.createElement('a');

  link.href = userData?.html_url;
  link.target = "_blank";
  link.textContent = userData?.html_url;
  
  profileLink.textContent = "Profile: ";
  profileLink.appendChild(link);
  cardInfo.appendChild(profileLink);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${userData?.followers || 'N/A'}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${userData?.following || 'N/A'}`;
  cardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${userData?.bio || 'N/A'}`;
  cardInfo.appendChild(bio);

  card.appendChild(cardInfo);

// Append the card to the DOM inside the cards container
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.appendChild(card);
}

// 🛠️ STEP 4: Fetch Followers Data
/*
// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data.
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.
*/

// ✍️ Solve it here ✍️
// Create a card using the function.
function createFollowersCard(followerData) {
  console.log("Sub-followerData", followerData);
  const card = document.createElement('div');
  card.classList.add('card');

  // Create and append elements for user data
  const img = document.createElement('img');
  img.src = followerData?.avatar_url || 'default-avatar.png';
  img.alt = followerData?.name?.title || 'User avatar';
  card.appendChild(img);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  
  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = followerData?.login;
  cardInfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = `${followerData?.login}`;
  cardInfo.appendChild(username);

  const userLocation = document.createElement('p');
  userLocation.textContent = `Location: ${followerData?.location || 'N/A'}`;
  cardInfo.appendChild(userLocation);

  const profileLink = document.createElement('p');
  const link = document.createElement('a');

  link.href = followerData?.html_url;
  link.target = "_blank";
  link.textContent = followerData?.html_url;
  
  profileLink.textContent = "Profile: ";
  profileLink.appendChild(link);
  cardInfo.appendChild(profileLink);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${followerData?.followers || 'N/A'}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${followerData?.following || 'N/A'}`;
  cardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${followerData?.bio || 'N/A'}`;
  cardInfo.appendChild(bio);

  card.appendChild(cardInfo);

  // Append the card to the DOM inside the cards container
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.appendChild(card);
}

// 4️⃣ Fetch followers' data and create follower cards
async function fetchSubFollowers(follower) {
  try {
    console.log(follower);
    const response = await axios.get(`https://api.github.com/users/${follower?.login}/followers`);
    console.log("response of sub-followers:", response);
    return response?.data;
  } catch (error) {
    console.error(`Error fetching followers for ${follower?.login}:`, error);
    return []; // Return empty array in case of error
  }
}

async function fetchSubFollowing(follower) {
  try {
    const response = await axios.get(`https://api.github.com/users/${follower?.login}/following`);
    console.log("response of sub-following:", response);
    return response?.data;
  } catch (error) {
    console.error(`Error fetching following for ${follower?.login}:`, error);
    return []; // Return empty array in case of error
  }
}

async function fetchFollowers() {
  try {
    const response = await axios.get('https://api.github.com/users/Abdulrahman-Midraara/followers');
    console.log(response);
    const followersData = response.data;

    // Use for...of to handle async/await properly
    for (const follower of followersData) {
      console.log("sub-follower", follower);

      try {
        const [followers, following] = await Promise.all([
          fetchSubFollowers(follower),
          fetchSubFollowing(follower),
        ]);

        console.log("sub-A-follower", followers);
        console.log("sub-A-following", following);

        // Reuse the same function to create follower cards
        createFollowersCard({
          ...follower,
          followers: followers?.length,
          following: following?.length,
        });
      } catch (subError) {
        console.log("Error fetching sub-followers or sub-following:", subError);
      }
    }
  } catch (error) {
    console.log("Error fetching followers:", error);
  }
}

fetchFollowers();

// 🛠️ STRETCH: Add More GitHub Users
/*
// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.
*/
// ✍️ Solve it here ✍️
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// const gitHubUsersArray = [
//   // GitHub usernames of GitHub founders 
//   'torvalds',      // Linus Torvalds (Creator of Linux)
//   'mojombo',       // Tom Preston-Werner (GitHub Co-founder)
//   'defunkt',       // Chris Wanstrath (GitHub Co-founder)
//   'pjhyett',       // PJ Hyett (GitHub Co-founder)
//   'jasonlong'      // Jason Long (GitHub Co-founder)
// ];

const gitHubUsersArray = [
  // Most active GitHub users
  'sindresorhus',  // Prolific open-source contributor
  'kamranahmedse', // Known for educational resources for developers
  'donnemartin',   // Coding interview preparation expert
  'jwasham',       // Developer resources for coding interviews and algorithms
  '996icu'         // Creator of the "996.ICU" repository advocating for developers' rights
];

// 2️⃣ Loop through the array and send a GET request for each username.
gitHubUsersArray.forEach(username => {
  axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      console.log(response.data);  // Log the response to inspect the data
      createGitHubUserCard(response.data);  // Create and append a card for the user
    })
    .catch(error => {
      console.error(`Error fetching data for ${username}:`, error);  // Handle any errors
    });
});

// 3️⃣ Create a card for each user and append it to .cards.
function createGitHubUserCard(gitHubUserData) {
  const card = document.createElement('div');
  card.classList.add('card');

 // Create and append elements for user data

  const img = document.createElement('img');
  img.src = gitHubUserData?.avatar_url || 'default-avatar.png';
  img.alt = gitHubUserData?.name?.title || 'User avatar';
  card.appendChild(img);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  
  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = gitHubUserData?.login;
  cardInfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = gitHubUserData?.login;
  cardInfo.appendChild(username);

  const userLocation = document.createElement('p');
  userLocation.textContent = `Location: ${gitHubUserData?.location || 'N/A'}`;
  cardInfo.appendChild(userLocation);

  const profileLink = document.createElement('p');
  const link = document.createElement('a');

  link.href = gitHubUserData?.html_url;
  link.target = "_blank";
  link.textContent = gitHubUserData?.html_url;
  profileLink.textContent = "Profile: ";
  profileLink.appendChild(link);
  cardInfo.appendChild(profileLink);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${gitHubUserData?.followers || 'N/A'}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${gitHubUserData?.following || 'N/A'}`;
  cardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${gitHubUserData.bio || 'N/A'}`;
  cardInfo.appendChild(bio);

  card.appendChild(cardInfo);

  // Append the user card to the DOM inside the cards container
  
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.appendChild(card);
}


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!