// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.


axios.get("https://api.github.com/users/GureyAYGARAD")
  .then(response => {
    const user = response.data;
    console.log(user);

    const card = createCard(user); 
    document.querySelector('.cards').append(card);

    fetchFollowers(user.followers_url); 
  })
  .catch(error => {
    console.error("Error fetching user data:", error);
  });
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

function createCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = user.avatar_url;
  img.alt = `${user.name || user.login}'s Avatar`;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = user.name || user.login;

  const username = document.createElement("p");
  username.classList.add("username");
  username.textContent = `@${user.login}`;

  const location = document.createElement("p");
  location.textContent = `Location: ${user.location || "Not specified"}`;

  const profile = document.createElement("p");
  profile.innerHTML = `Profile: <a href="${user.html_url}" target="_blank" class="profile-link">${user.html_url}</a>`;

  const followers = document.createElement("p");
  followers.textContent = `Followers: ${user.followers}`;

  const following = document.createElement("p");
  following.textContent = `Following: ${user.following}`;

  const bio = document.createElement("p");
  bio.textContent = `Bio: ${user.bio || "Not specified"}`;

  cardInfo.append(name, username, location, profile, followers, following, bio);
  card.append(img, cardInfo);

  return card;
}


// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.


async function fetchFollowers(followersUrl) {
  try {
    const followersResponse = await axios.get(followersUrl);
    const followers = followersResponse.data;

    const fragment = document.createDocumentFragment(); 

    for (const follower of followers) {
      try {
        const fullFollowerResponse = await axios.get(follower.url);
        const fullFollower = fullFollowerResponse.data;
        const followerCard = createCard(fullFollower);
        fragment.appendChild(followerCard);
      } catch (followerError) {
        console.error("Error fetching follower details:", followerError);
        const basicCard = createCard({
          login: follower.login,
          avatar_url: follower.avatar_url,
          html_url: follower.html_url,
          followers: follower.followers,
          following: follower.following,
          bio: "Not specified",
        });
        fragment.appendChild(basicCard);
      }
    }

    document.querySelector('.cards').appendChild(fragment); 
  } catch (error) {
    console.error("Error fetching followers list:", error);
  }
}


// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
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
