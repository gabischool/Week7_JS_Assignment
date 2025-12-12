// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

// https://api.github.com/users/Abdirahman984

const apiURL = "https://api.github.com/users/Abdirahman984";

function fitchApi() {
  // return the promise that resolves to the user data (response.data)
  return axios
    .get(apiURL)
    .then((response) => response.data)
    .catch((error) => {
      console.log("Error fetching user:", error);
      // rethrow so callers can also handle if needed
      throw error;
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

function createCard(userObject) {
  const mainCard = document.createElement("div");
  mainCard.className = "card";

  const mainImg = document.createElement("img");
  mainImg.src = userObject.avatar_url;

  const secondDiv = document.createElement("div");
  secondDiv.className = "card-info";

  const titleH3 = document.createElement("h3");
  titleH3.className = "name";
  titleH3.textContent = userObject.name || userObject.login; // fallback if no name

  const firstPara = document.createElement("p");
  firstPara.className = "username";
  firstPara.textContent = userObject.login;

  const secoPara = document.createElement("p");
  secoPara.textContent = `Location: ${userObject.location || "Not specified"}`;

  const thirdPara = document.createElement("p");
  thirdPara.innerHTML = `Profile: <a href="${userObject.html_url}" target="_blank">${userObject.html_url}</a>`;

  const forthPara = document.createElement("p");
  forthPara.textContent = `Followers: ${userObject.followers ?? 0}`;

  const fifthPara = document.createElement("p");
  fifthPara.textContent = `Following: ${userObject.following ?? 0}`;

  const sixthPara = document.createElement("p");
  sixthPara.textContent = `Bio: ${userObject.bio || "No bio"}`;

  secondDiv.append(titleH3, firstPara, secoPara, thirdPara, forthPara, fifthPara, sixthPara);
  mainCard.append(mainImg, secondDiv);

  return mainCard;
}

//
// 3️⃣ Return the created card element.




// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.

function displayGitHub() {
  // call API to get main user data
  fitchApi()
    .then((userData) => {
      // STEP 3: create and append the main user card
      const card = createCard(userData);
      const cardsContainer = document.querySelector(".cards");
      cardsContainer.append(card);

   

// run it



// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.


   // STEP 4: fetch followers using the followers_url from userData
      return axios.get(userData.followers_url)
        .then((followersResponse) => {
          // 3️⃣ Log the response data to inspect structure
          console.log("Followers response:", followersResponse.data);

          const followersList = followersResponse.data; // array of follower objects

          // 4️⃣ For each follower: create card and append
          followersList.forEach((follower) => {
            const followerCard = createCard(follower);
            cardsContainer.append(followerCard);
          });
        })
        .catch((err) => {
          console.log("Error fetching followers:", err);
        });
    })
    .catch((err) => {
      console.log("Error in displayGitHub:", err);
    });
}

displayGitHub();

// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
