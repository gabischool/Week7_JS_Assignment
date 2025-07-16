// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

// Replace with your actual GitHub username
const githubUsername = "your_github_username";

// Select the container where cards will be appended
const cardsContainer = document.querySelector('.cards');

// 1️⃣ Send GET request to GitHub API
axios.get(`https://api.github.com/users/${githubUsername}`)
  .then(response => {
    // 2️⃣ Log the full response data to inspect structure
    console.log(response.data);

    // 3️⃣ Access key fields (optional logging)
    const { name, avatar_url, location, followers, following, bio, followers_url } = response.data;
    console.log({ name, avatar_url, location, followers, following, bio, followers_url });

    // 4️⃣ Pass data to create card function (assume createUserCard exists)
    const userCard = createUserCard(response.data);

    // 5️⃣ Append card to DOM
    cardsContainer.appendChild(userCard);
  })
  .catch(error => {
    console.error('Error fetching GitHub data:', error);
  });

// Dummy createUserCard function to avoid errors (you will complete this later)
function createUserCard(user) {
  const card = document.createElement('div');
  card.textContent = user.name || user.login;
  return card;
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
  // Create main card container
  const card = document.createElement('div');
  card.classList.add('card');

  // Create and set image
  const img = document.createElement('img');
  img.src = user.avatar_url;
  img.alt = `${user.name || user.login}'s avatar`;
  card.appendChild(img);

  // Create info container
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  // Name
  const nameEl = document.createElement('h3');
  nameEl.classList.add('name');
  nameEl.textContent = user.name || 'No name provided';
  cardInfo.appendChild(nameEl);

  // Username
  const usernameEl = document.createElement('p');
  usernameEl.classList.add('username');
  usernameEl.textContent = user.login;
  cardInfo.appendChild(usernameEl);

  // Location
  const locationEl = document.createElement('p');
  locationEl.textContent = `Location: ${user.location || 'Not available'}`;
  cardInfo.appendChild(locationEl);

  // Profile link
  const profileEl = document.createElement('p');
  profileEl.innerHTML = `Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a>`;
  cardInfo.appendChild(profileEl);

  // Followers
  const followersEl = document.createElement('p');
  followersEl.textContent = `Followers: ${user.followers}`;
  cardInfo.appendChild(followersEl);

  // Following
  const followingEl = document.createElement('p');
  followingEl.textContent = `Following: ${user.following}`;
  cardInfo.appendChild(followingEl);

  // Bio
  const bioEl = document.createElement('p');
  bioEl.textContent = `Bio: ${user.bio || 'No bio available'}`;
  cardInfo.appendChild(bioEl);

  // Append card info to main card container
  card.appendChild(cardInfo);

  // Return the complete card element
  return card;
}


// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.



// Fetch your GitHub data using Axios
axios.get('https://api.github.com/users/zakariahasanabdiali')  
  .then(response => {
    const userCard = createUserCard(response.data);

    cardsContainer.appendChild(userCard);
  })
  .catch(error => {
    console.error('Error fetching GitHub user:', error);
  });



// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.

// ✅ Declare cardsContainer only once at the top of the file
// (Already declared above, so this line is removed)

// ✅ Main user + followers
axios.get('https://api.github.com/users/zakariahasanabdiali')
  .then(response => {
    const userData = response.data;
    const userCard = createUserCard(userData);
    cardsContainer.appendChild(userCard);

    return axios.get(userData.followers_url);
  })
  .then(followersResponse => {
    followersResponse.data.forEach(follower => {
      axios.get(`https://api.github.com/users/${follower.login}`)
        .then(followerDetails => {
          const followerCard = createUserCard(followerDetails.data);
          cardsContainer.appendChild(followerCard);
        });
    });
  })
  .catch(error => {
    console.error('❌ Error fetching GitHub data or followers:', error);
  });


// ✅ Card creator function
function createUserCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = user.avatar_url;
  img.alt = `${user.name}'s avatar`;

  const info = document.createElement('div');
  info.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = user.name || 'No name provided';

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = user.login;

  const location = document.createElement('p');
  location.textContent = `Location: ${user.location || 'Not specified'}`;

  const profile = document.createElement('p');
  profile.innerHTML = `Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a>`;

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${user.followers}`;

  const following = document.createElement('p');
  following.textContent = `Following: ${user.following}`;

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${user.bio || 'No bio provided'}`;

  info.append(name, username, location, profile, followers, following, bio);
  card.append(img, info);

  return card;
}



// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
