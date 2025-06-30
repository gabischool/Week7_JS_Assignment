// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

// STEP 1: List of GitHub API URLs for the users
const userUrls = [
  'https://api.github.com/users/mohadaahir',
  'https://api.github.com/users/naqib-axmed',
  'https://api.github.com/users/jamaal-Abdirahem',

];

const cardsContainer = document.querySelector('.cards');

userUrls.forEach(url => {
  axios.get(url)
    .then(response => {
      const userData = response.data;

      console.log('User data:', userData);

      const card = createGithubCard(userData);
      cardsContainer.appendChild(card);

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
function createGithubCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');

  const avatar = document.createElement('img');
  avatar.src = user.avatar_url;
  avatar.alt = `${user.name || user.login}'s avatar`;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = user.name || 'No Name Provided';

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = user.login;

  const location = document.createElement('p');
  location.textContent = `Location: ${user.location || 'Not Available'}`;

  const profile = document.createElement('p');
  profile.innerHTML = `Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a>`;

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${user.followers}`;

  const following = document.createElement('p');
  following.textContent = `Following: ${user.following}`;

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${user.bio || 'No bio available.'}`;

  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  card.appendChild(avatar);
  card.appendChild(cardInfo);

  return card;
}

// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.

// STEP 4: Fetch followers for this user
      axios.get(userData.userUrls )
        .then(followersResponse => {
          const followers = followersResponse.data;
          // Log the followers data
          console.log(`Followers for ${userData.login}:`, followers);

          // For each follower, fetch their full user data and create a card
          followers.forEach(follower => {
            axios.get(userUrls )
              .then(followerDetailResponse => {
                const followerData = followerDetailResponse.data;
                const followerCard = createGithubCard(followerData);
                cardsContainer.appendChild(followerCard);
              })
              .catch(err => {
                console.error('Error fetching follower details:', err);
              });
          });
        })
        .catch(err => {
          console.error('Error fetching followers:', err);
        });
    })
    .catch(error => {
      console.error('Error fetching GitHub user data:', error);
    });

});
// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
