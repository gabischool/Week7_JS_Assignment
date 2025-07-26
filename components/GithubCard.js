// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

function fetchGitHub() {
    axios.get('https://api.github.com/users/swar1904')
    .then(response => {
      return  response.data;
      createCard(response.data);
    })
    .catch(error => {
      console.error( error);
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
//
// 3️⃣ Return the created card element.
function buildUsercard(user) {
        const card = document.createElement("div");
        card.className = "card";
        const avatar = document.createElement("img");
        avatar.src = user.avatar_url;
        card.appendChild(avatar);
        
        const cardInfo = document.createElement("div");
        cardInfo.className = "card-info";

        const nameElement = document.createElement("h3");
        nameElement.className = "name";
        nameElement.textContent = user.name;
        cardInfo.appendChild(nameElement);

        const usernameElement = document.createElement("p");
        usernameElement.className = "username";
        usernameElement.textContent = user.login;
        cardInfo.appendChild(usernameElement);

        const locationElement = document.createElement("p");
        locationElement.textContent = user.location;
        cardInfo.appendChild(locationElement);

        const profileElement = document.createElement("p");
        const profileLink = document.createElement("a");
        profileLink.href = user.html_url;
        profileLink.textContent = user.html_url;
        profileElement.textContent = user.Profile;
        profileElement.appendChild(profileLink);
        cardInfo.appendChild(profileElement);

        const followersElement = document.createElement("p");
        followersElement.textContent = user.follower;
        cardInfo.appendChild(followersElement);

        const followingElement = document.createElement("p");
        followingElement.textContent = user.following;
        cardInfo.appendChild(followingElement);

        const bioElement = document.createElement("p");
        bioElement.textContent = user.bio;
        cardInfo.appendChild(bioElement);

        card.appendChild(cardInfo);

        return card;
}

       const cardsContainer = document.querySelector('.cards');
       
        cardsContainer.appendChild(buildUsercard(fetchGitHab()));

// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.
function fetchFollowerData() {
        return axios.get("https://api.github.com/users/anshur970/followers")
        .then((response) => {
                return response.data
                })
        .catch((error) => {
                console.log(error)
        })
  }
const button = document.createElement("button")
button.addEventListener("click", displaynewUser)

displaynewUser();

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
// 4️⃣ Use the `Promise.all` method to handle multiple requests.
// 5️⃣ Use `Promise.all` to wait for all requests to complete before appending the cards to the DOM.
// 6️⃣ Use `Promise.all` to wait for all requests to complete before appending the cards to the DOM.
// 7️⃣ Use `Promise.all` to wait for all requests to complete before appending the cards to the DOM.
// 8️⃣ Use `Promise.all` to wait for all requests to complete before appending the cards to the DOM.
// 9️⃣ Use `Promise.all` to wait for all requests to complete before appending the cards to the DOM.
// 🔟 Use `Promise.all` to wait for all requests to complet     e

// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!