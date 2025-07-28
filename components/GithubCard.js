// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.
        function fetchGitHab() {
        return axios.get("https://api.github.com/users/swar1904")
        .then((response) => {
                return response.data
        })
        .catch((error) => {
                console.log(error)
        })
}

// 🛠️ STEP 2: Create a Function to Build the Card
// 1️⃣ Write a function that takes a **user object** as a parameter.
// 2️⃣ Use JavaScript DOM methods to create the following structure:
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
        locationElement.textContent = `Location: ${user.location}`;
        cardInfo.appendChild(locationElement);

        const profileElement = document.createElement("p");
        profileElement.innerHTML = `Profile: <a href="${user.html_url}">${user.html_url}</a>`;
        cardInfo.appendChild(profileElement);

        const followersElement = document.createElement("p");
        followersElement.textContent = `Followers: ${user.followers}`;
        cardInfo.appendChild(followersElement);

        const followingElement = document.createElement("p");
        followingElement.textContent = `Following: ${user.following}`;
        cardInfo.appendChild(followingElement);

        const bioElement = document.createElement("p");
        bioElement.textContent = `Bio: ${user.bio}`;
        cardInfo.appendChild(bioElement);

        card.appendChild(cardInfo);

        return card;
}

       const cardsContainer = document.querySelector('.cards');
       
        // Remove this incorrect usage, fetchGitHab() returns a Promise, not a user object
        // cardsContainer.appendChild(buildUsercard(fetchGitHab()));

        fetchGitHab().then(user => {
            cardsContainer.appendChild(buildUsercard(user));
        });
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
// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.
function fetchFollowerData() {
        return axios.get("https://api.github.com/users/safiyacodes/followers")
        .then((response) => {
                return response.data
                })
        .catch((error) => {
                console.log(error)
        })
  }

function displaynewUser(){      
        
    const cardsContainer = document.querySelector(".cards")
        cardsContainer.innerHTML = ""
         fetchGitHab().then((currentUser) =>
        cardsContainer.append(buildUsercard(currentUser)))
        fetchFollowerData().then((following)=>{
                following.map((user)=>{
                        cardsContainer.append(buildUsercard(user))
                })
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


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!