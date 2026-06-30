// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.
// SAX: Hubi inaan dhibic (.) ku dambayn URL-ka
const mainUrl = `https://api.github.com/users/duraanali`; 
  const followers_url = `https://api.github.com/users/duraanali/followers`;
  function fetchMainCard() {
    fetch(mainUrl)
      .then((response) => response.json())
      .then((data) => {
        const dataCard = createProfiles(data);
        document.querySelector(".cards").append(dataCard);
      })
      .catch((error) => console.error("Error fetching main book:", error));
  }
function fetchFollowersList() {
  fetch(followers_url)
    .then((response) => response.json())
    .then((followersList) => {

      followersList.forEach((follower) => {
    
        fetch(`https://api.github.com/users/${follower.login}`)
          .then((res) => res.json())
          
          .then((detailedFollowerData) => {
            
            const followersCard = createProfiles(detailedFollowerData);
            document.querySelector(".cards").append(followersCard);
          })
          .catch((err) =>
            console.error("Error fetching detailed follower:", err),
          );
      });
    })
    .catch((error) => console.error("Error fetching followers list:", error));
}

function init() {
 fetchMainCard();
 fetchFollowersList();
}

init();



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
function createProfiles(userObject) {
  const crd = document.createElement("div");
  crd.className = "card";

  const image = document.createElement("img");
  image.src = userObject.avatar_url; 

  const crdInfo = document.createElement("div");
  crdInfo.className = "card-info";

  const names = document.createElement("h3");
  names.className = "name";
  names.textContent = userObject.name || userObject.login;

  const location = document.createElement("p");
  location.textContent = `Location: ${userObject.location || "Not Available"}`;
  
  
  const profile = document.createElement("p");

  profile.innerHTML = `profile: <a href="${userObject.html_url}">${userObject.html_url}</a>`;

  const follower = document.createElement("p");
  follower.textContent = `Followers: ${userObject.followers}`;

  const following = document.createElement("p");
  following.textContent = `Following: ${userObject.following}`;

  crd.append(image);
  crd.append(crdInfo);
  crdInfo.append(names);
  crdInfo.append(location);
  crdInfo.append(profile);
  crdInfo.append(follower);
  crdInfo.append(following);

  return crd;
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

// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.

// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!


