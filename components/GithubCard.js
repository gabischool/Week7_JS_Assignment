// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/<your_name>`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.


// const username = "Abdulrahman-Midraara";

// axios.get(`https://api.github.com/users/Abdulrahman-Midraara`)
// .then(response => {
//     console.log(response);
//    })

/* function fetchGitHubProfile() {
    return axios.get(`https://api.github.com/users/Abdulrahman-Midraara`) 
    .then(response => response.userData) // Get the joke data from the API response
    .catch(error => { 
      console.error('Error fetching GitHub profile:', error); // Log the error if something goes wrong
      return null; // Return null to indicate failure
    });
} */


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



// 🛠 STEP 1: Create the Function to Build the Card
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
  name.textContent = userData.name;
  cardInfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = `@${userData.login}`;
  cardInfo.appendChild(username);

  const userLocation = document.createElement('p');
  userLocation.textContent = `Location: ${userData.location || 'N/A'}`;
  cardInfo.appendChild(userLocation);

  const profileLink = document.createElement('p');
  const link = document.createElement('a');

  link.href = userData.html_url;
  link.target = "_blank";
  link.textContent = userData.html_url;
  
  profileLink.textContent = "Profile: ";
  profileLink.appendChild(link);
  cardInfo.appendChild(profileLink);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${userData.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${userData.following}`;
  cardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${userData.bio}`;
  cardInfo.appendChild(bio);

  card.appendChild(cardInfo);

  // Append the card to the DOM inside the cards container
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.appendChild(card);
}

// 🛠 STEP 2: Fetch GitHub Data using Axios
axios.get('https://api.github.com/users/Abdulrahman-Midraara') // Replace with your actual username
  .then(response => {
    console.log(response.data);  // Log the response to inspect it
    createUserCard(response.data);  // Pass the response data to createUserCard
  })
  .catch(error => {
    console.error('Error fetching data', error);  // Log any errors that occur
  });



// 3️⃣ Return the created card element.


// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.


// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data.
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.


// 4️⃣ Fetch followers' data and create follower cards

function createFollowersCard(followerData) {
  const card = document.createElement('div');
  card.classList.add('card');

  // Create and append elements for user data
  const img = document.createElement('img');
  img.src = followerData?.avatar_url;
  img.alt = followerData?.login;
  card.appendChild(img);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  
  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = followerData?.login;
  cardInfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = `@${followerData?.login}`;
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

  // const followers = document.createElement('p');
  // followers.textContent = `Followers: ${followerData.followers}`;
  // cardInfo.appendChild(followers);

  // const following = document.createElement('p');
  // following.textContent = `Following: ${userData.following}`;
  // cardInfo.appendChild(following);

  // const bio = document.createElement('p');
  // bio.textContent = `Bio: ${userData.bio}`;
  // cardInfo.appendChild(bio);

  card.appendChild(cardInfo);

  // Append the card to the DOM inside the cards container
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.appendChild(card);
}




function fetchFollowers() {
    axios.get('https://api.github.com/users/Abdulrahman-Midraara/followers')
      .then(response => {
        console.log(response);
        const followersData = response.data;

        followersData.forEach(follower => {
            createFollowersCard(follower);  // Reuse the same function to create follower cards
          });
        })
        .catch(error => {
          console.error("Error fetching followers:", error);
        });
    }
    
fetchFollowers();


// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.




// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
