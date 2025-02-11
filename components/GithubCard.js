// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/<your_name>`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.
function fetchGit() {
    axios.get("https://api.github.com/users/Mariayusuf12")
      .then((response) => {
        console.log(response.data);
        GitCard(response.data);
        return axios.get(response.data.followers_url);
      })
      .then((response) => {
        response.data.forEach(follower => {
          axios.get(follower.url)
            .then(response => {
              GitCard(response.data);
            })
            .catch((error) => console.log(`Error fetching follower: `, error));
        });
      })
      .catch((error) => console.log(`Error fetching user data: `, error));
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

function GitCard(data) {
    const cardContainer = document.querySelector(".cards");
    const gitCardDiv = document.createElement("div");
    const avatarImg = document.createElement("img");
    const cardInfoDiv = document.createElement("div");
    const cardName = document.createElement("h3");
    const userCard = document.createElement("p");
    const locationCard = document.createElement("p");
    const ProfileCard = document.createElement("p");
    const profileLink = document.createElement("a");
    const followersCard = document.createElement("p");
    const followingCard = document.createElement("p");
    const bio = document.createElement("p");
  
    gitCardDiv.classList = "card";
    avatarImg.src = data.avatar_url;
    avatarImg.alt = `${data.name}'s Avatar`;
    cardInfoDiv.className = "card-info";
    cardName.className = "name";
    userCard.className = "username";
    locationCard.textContent = `Location: ${data.location || "Not available"}`;
    cardName.textContent = data.name;
    userCard.textContent = data.login;
    profileLink.href = data.html_url;
    profileLink.textContent = data.html_url;
    ProfileCard.textContent = "Profile: ";
    ProfileCard.appendChild(profileLink);
    followersCard.textContent = `Followers: ${data.followers || 0}`;
    followingCard.textContent = `Following: ${data.following || 0}`;
    bio.textContent = `Bio: ${data.bio || "No bio available"}`;
  
    gitCardDiv.append(avatarImg);
    cardInfoDiv.append(cardName, userCard, locationCard, ProfileCard, followersCard, followingCard, bio);
    gitCardDiv.append(cardInfoDiv);
    cardContainer.appendChild(gitCardDiv);
  
    return gitCardDiv;
  }
  

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


// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
function fetchAdditionalUsers() {
    const followersArray = ['Ali', 'Halima', 'Salman', 'gabi', 'gami'];
    followersArray.forEach(username => {
      axios.get(`https://api.github.com/users/${username}`)
        .then(response => {
          GitCard(response.data);
        })
        .catch(error => {
          console.error(`Error fetching data for ${username}:`, error);
        });
    });
  }
  fetchGit();
  fetchAdditionalUsers();